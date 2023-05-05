class Rental < ApplicationRecord

    validates :start_date, presence: true, if: :rental?
    validates :end_date, presence: true, if: :rental?

    belongs_to :renter, class_name: "User"
    belongs_to :item, class_name: "Item"

    def rental?
        self.persisted?
    end
    
    def self.current_rentals(user)
        where(renter_id: user.id).where("rental_end_date >= ?", Date.today)
    end
end
