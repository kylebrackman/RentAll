class Item < ApplicationRecord
    validates :name, :description, :item_type, :condition, :price, presence: true
    has_one_attached :image, dependent: :destroy

    has_many :rentals
    has_many :renters, through: :rentals, source: :renter_id
    belongs_to :owner, class_name: "User"

    private

end
