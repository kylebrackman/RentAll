class User < ApplicationRecord
    validates :username, presence: true

    has_secure_password 
    
    has_many :owned_items, foreign_key: :owner_id, class_name: "Item"
    has_many :rentals, foreign_key: :renter_id
    has_many :items, through: :rentals
end
