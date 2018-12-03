# frozen_string_literal: true

module ValidationHelper
  # NOTE 他の述語が必要な場合は追加してください
  VALIDATES_ATTRS_DSL = {
    required: { presence: true },
    default_text_field: { length: { maximum: 40, allow_blank: true } },
    integer_number: {
      numericality: {
        only_integer: true,
        allow_blank: true,
        greater_than_or_equal_to: -2147483648,
        less_than_or_equal_to: 2147483647
      }
    },
    natural_number: {
      numericality: {
        only_integer: true,
        allow_blank: true,
        greater_than_or_equal_to: 0,
        less_than_or_equal_to: 2147483647
      }
    }
  }.freeze

  class << self
    def call(*names)
      params = VALIDATES_ATTRS_DSL.values_at(*names)
      params.each_with_object({}) { |param, result| result.merge!(param) }
    end
    alias [] call

    def existence_of(klass, id_column_name)
      lambda {
        return if __send__(id_column_name).blank?

        unless klass.exists?(id: __send__(id_column_name))
          errors.add(id_column_name, :not_found)
        end
      }
    end
  end
end
