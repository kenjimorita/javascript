# frozen_string_literal: true

class DepartmentValidation < ValidationSchema
  setting :default, -> {
    validates :name, VH[:required, :default_text_field]
    validates :display_order, VH[:required]
    validates :organization_id, VH[:required]
    validate VH.existence_of(Organization, :organization_id)
  }
  setting :create, -> {
    validates :owner_id, VH[:required]
    validate VH.existence_of(User, :owner_id)
    validate VH.existence_of(Department, :parent_department_id)
    validate -> {
      unless OrganizationMember.find_by(organization_id: organization_id, user_id: owner_id)
        errors.add(:owner_id, :must_be_same_organization)
      end
    }
    validate -> {
      parent_department = Department.find_by(id: parent_department_id)
      return unless parent_department

      if parent_department.organization_id != organization_id
        errors.add(:parent_department_id, :must_be_same_organization)
      end
    }
  }
end
