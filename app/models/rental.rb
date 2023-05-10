class Rental < ApplicationRecord

    validate :start_date
    validate :end_date

    belongs_to :renter, class_name: "User"
    belongs_to :item, class_name: "Item"
    
    def self.current_rentals(user)
        where(renter_id: user.id).where("rental_end_date >= ?", Date.today)
    end
end
