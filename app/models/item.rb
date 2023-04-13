class Item < ApplicationRecord
    has_many :rentals, foreign_key: "rented_item_id"
    has_many :renters, through: :rentals, source: :renter_id
    belongs_to :owner, class_name: "User"
end
