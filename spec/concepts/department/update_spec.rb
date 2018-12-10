# frozen_string_literal: true

RSpec.describe Department::Update do
  let!(:organization) { OrganizationFactory.new.create }
  let!(:admin_user) { UserFactory.new(organization: organization).create(admin: true) }
  let!(:department) do
    DepartmentFactory.new(
      organization: organization,
      owner: admin_user
    ).create
  end

  describe "SUCCESS" do
    let!(:other_department) do
      DepartmentFactory.new(
        organization: organization,
        owner: admin_user
      ).create(
        name: "開発部",
        display_order: 2
      )
    end
    let!(:child_department) do
      DepartmentFactory.new(
        organization: organization,
        owner: admin_user,
        parent_department: department
      ).create(
        name: "Web開発部",
        display_order: 1
      )
    end
    let(:nomal_user) do
      UserFactory.new(organization: organization).create(
        email: "nomal_user@example.com",
        first_name: "普通",
        last_name: "たろう"
      )
    end

    example "部署名を変更する" do
      params = {
        id: child_department.id,
        organization_id: organization.id,
        name: "Ruby部"
      }

      result = described_class.call(params: params)

      child_department.reload
      expect(result).to be_success
      expect(child_department.name).to eq("Ruby部")
    end

    example "表示順を変更する" do
      params = {
        id: child_department.id,
        organization_id: organization.id,
        display_order: 2
      }

      result = described_class.call(params: params)

      child_department.reload
      expect(result).to be_success
      expect(child_department.display_order).to eq(2)
    end

    example "親部署を変更する" do
      params = {
        id: child_department.id,
        organization_id: organization.id,
        parent_department_id: other_department.id
      }

      result = described_class.call(params: params)

      child_department.reload
      expect(result).to be_success
      expect(child_department.parent).to eq(other_department)
    end

    example "部署責任者を変更する" do
      params = {
        id: child_department.id,
        organization_id: organization.id,
        owner_id: nomal_user.id
      }

      result = described_class.call(params: params)

      child_department.reload
      expect(result).to be_success
      expect(child_department.owner).to eq(nomal_user)
    end

    example "部署責任者を削除する" do
      params = {
        id: child_department.id,
        organization_id: organization.id,
        owner_id: 0,
      }

      result = described_class.call(params: params)

      child_department.reload
      expect(result).to be_success
      expect(child_department.owner).to be_nil
    end

    example "全ての項目を変更する" do
      params = {
        id: child_department.id,
        organization_id: organization.id,
        name: "Ruby部",
        display_order: 2,
        parent_department_id: other_department.id,
        owner_id: nomal_user.id
      }

      result = described_class.call(params: params)

      child_department.reload
      expect(result).to be_success
      expect(child_department.name).to eq("Ruby部")
      expect(child_department.display_order).to eq(2)
      expect(child_department.organization).to eq(organization)
      expect(child_department.parent).to eq(other_department)
      expect(child_department.owner).to eq(nomal_user)
    end

    example "部署責任者を削除済みの部署に部署責任者を設定する" do
      child_department.department_members_owner.destroy!

      params = {
        id: child_department.id,
        organization_id: organization.id,
        owner_id: nomal_user.id
      }

      result = described_class.call(params: params)

      child_department.reload
      expect(result).to be_success
      expect(child_department.owner).to eq(nomal_user)
    end
  end

  example "ERROR: 必須項目を消すことは出来ない" do
    params = {
      id: department.id,
      organization_id: nil,
      name: "",
      display_order: nil
    }

    result = described_class.call(params: params)
    contract = result["contract.default"]

    expect(result).to be_failure
    expect(contract.errors.full_messages).to contain_exactly(
      "組織を入力してください",
      "表示順を入力してください",
      "部署名を入力してください"
    )
  end

  example "ERROR: アーカイブされた部署を親部署に指定することは出来ない" do
    archived_department = DepartmentFactory.new(
      organization: organization,
      owner: admin_user
    ).create_archived(
      name: "開発部",
      display_order: 2
    )

    params = {
      id: department.id,
      organization_id: organization.id,
      parent_department_id: archived_department.id
    }

    result = described_class.call(params: params)
    contract = result["contract.default"]

    expect(result).to be_failure
    expect(contract.errors.full_messages).to contain_exactly(
      "親部署はアーカイブ済みです"
    )
  end

  example "ERROR: アーカイブ済みの部署は更新できない" do
    department.department_members.destroy_all
    Department::Archive.call(params: { id: department.id })
    department.reload

    params = {
      id: department.id,
      organization_id: organization.id,
      name: "Ruby部"
    }

    result = described_class.call(params: params)
    contract = result["contract.default"]

    expect(result).to be_failure
    expect(contract.errors.full_messages).to contain_exactly(
      "アーカイブ済みのため更新できません"
    )
  end

  example "ERROR: 自分自身を親部署に指定することは出来ない" do
    params = {
      id: department.id,
      organization_id: organization.id,
      parent_department_id: department.id
    }

    result = described_class.call(params: params)
    contract = result["contract.default"]

    expect(result).to be_failure
    expect(contract.errors.full_messages).to contain_exactly(
      "親部署は別の部署にしてください"
    )
  end

  example "ERROR: 子孫の部署を親部署に指定することは出来ない" do
    child_department = DepartmentFactory.new(
      organization: organization,
      owner: admin_user,
      parent_department: department
    ).create(
      name: "Web開発部",
      display_order: 1
    )
    grandchild_department = DepartmentFactory.new(
      organization: organization,
      owner: admin_user,
      parent_department: child_department
    ).create(
      name: "Ruby部",
      display_order: 1
    )

    params = {
      id: department.id,
      organization_id: organization.id,
      parent_department_id: grandchild_department.id
    }

    result = described_class.call(params: params)
    contract = result["contract.default"]

    expect(result).to be_failure
    expect(contract.errors.full_messages).to contain_exactly(
      "親部署に子孫の部署を指定することは出来ません"
    )
  end

  context "他の組織が存在する" do
    let!(:other_org) { OrganizationFactory.new.create(name: "other") }
    let!(:other_org_user) do
      UserFactory.new(organization: other_org).create(
        last_name: "花京院",
        first_name: "典明",
        email: "other_org_user@example.com",
        admin: true
      )
    end
    let!(:other_org_department) do
      DepartmentFactory.new(organization: other_org, owner: other_org_user).create(
        name: "企画部",
        display_order: 1
      )
    end

    example "ERROR: organization_idで指定した組織に属していない部署を更新することは出来ない" do
      params = {
        id: department.id,
        organization_id: other_org.id,
        name: "Ruby部"
      }

      result = described_class.call(params: params)
      contract = result["contract.default"]

      expect(result).to be_failure
      expect(contract.errors.full_messages).to contain_exactly(
        "部署IDは組織内から選択してください"
      )
    end

    example "ERROR: 異なる組織の部署を親部署に指定することは出来ない" do
      params = {
        id: department.id,
        organization_id: organization.id,
        parent_department_id: other_org_department.id
      }

      result = described_class.call(params: params)
      contract = result["contract.default"]

      expect(result).to be_failure
      expect(contract.errors.full_messages).to contain_exactly(
        "親部署は組織内から選択してください"
      )
    end

    example "ERROR: 異なる組織のユーザーを部署責任者に指定することは出来ない" do
      params = {
        id: department.id,
        organization_id: organization.id,
        owner_id: other_org_user.id
      }

      result = described_class.call(params: params)
      contract = result["contract.default"]

      expect(result).to be_failure
      expect(contract.errors.full_messages).to contain_exactly(
        "部署責任者は組織内から選択してください"
      )
    end
  end
end
