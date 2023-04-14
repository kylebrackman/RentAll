class Item < ApplicationRecord
    has_many :rentals
    has_many :renters, through: :rentals, source: :renter_id
    belongs_to :owner, class_name: "User"
end
