# frozen_string_literal: true

class Department::Create < Trailblazer::Operation
  class Form < Reform::Form
    property :name
    property :display_order
    property :organization_id
    property :owner_id, virtual: true
    property :parent_department_id, virtual: true

    # TODO parent_department_id がアーカイブ済みの場合エラー
    # TODO parent_department_id は自分自身とか子孫とかは指定できない
    # これが使えそう https://github.com/stefankroes/ancestry#integrity-checking-and-restoration
    include DepartmentValidation.new(:default, :parent_department_id, :owner_id)
    validates :owner_id, VH[:required]
  end

  step Model(Department, :new)
  step Contract::Build(constant: Form)
  step Contract::Validate()
  step Contract::Persist(method: :sync)
  step :create_record

  def create_record(options, model:, params:, **_metadata)
    ApplicationRecord.transaction do
      if params[:parent_department_id]
        model.parent = Department.find(params[:parent_department_id])
      end
      model.save!
      model.create_department_members_owner!(user_id: params[:owner_id])
    end

    true
  end
end
