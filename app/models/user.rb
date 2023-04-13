class User < ApplicationRecord
    has_many :rentals, foreign_key: :renter_id
    has_many :items, through: :rentals
    has_many :owned_items, foreign_key: :owner_id, class_name: "Item"
end
