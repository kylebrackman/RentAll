class Rental < ApplicationRecord
    belongs_to :renter, class_name: "User"
    belongs_to :item, class_name: "Item"
end