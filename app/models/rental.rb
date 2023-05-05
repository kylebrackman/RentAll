class Rental < ApplicationRecord

    validates :rental_start_date, presence: true
    validates :rental_end_date, presence: true

    belongs_to :renter, class_name: "User"
    belongs_to :item, class_name: "Item"

    def self.current_rentals(user)
        where(renter_id: user.id).where("rental_end_date >= ?", Date.today)
    end
end
