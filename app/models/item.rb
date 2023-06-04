class Item < ApplicationRecord
    has_one_attached :image, dependent: :destroy

    validates :name, :description, :item_type, :condition, :price, :image, presence: true
    validates :image, attached: true, content_type: ['image/png', 'image/jpg', 'image/jpeg'], size: { less_than: 5.megabytes , message: 'is not given between size' }
    validate :validate_item_type
    validate :validate_condition
    validates :price, numericality: { greater_than: 0 }
    
    has_many :rentals
    has_many :renters, through: :rentals, source: :renter_id
    belongs_to :owner, class_name: "User"

    private

    def validate_item_type
        errors.add(:item_type, "cannot be 'Select'") if item_type == "Select"
    end

    def validate_condition
        errors.add(:condition, "cannot be 'Select'") if condition == "Select"
    end

end
