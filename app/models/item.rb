class Item < ApplicationRecord
    validates :name, :description, :item_type, :condition, :price, :image, presence: true
    has_one_attached :image, dependent: :destroy

    validates :image, attached: true, content_type: ['image/png', 'image/jpg', 'image/jpeg'], size: { less_than: 5.megabytes , message: 'is not given between size' }

    has_many :rentals
    has_many :renters, through: :rentals, source: :renter_id
    belongs_to :owner, class_name: "User"

    private

end
