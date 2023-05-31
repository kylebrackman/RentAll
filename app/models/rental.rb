class Rental < ApplicationRecord

    validate :start_date
    validate :end_date
    validate :no_overlapping_rentals

    belongs_to :renter, class_name: "User"
    belongs_to :item, class_name: "Item"
    
    def self.current_rentals(user)
        query = where(renter_id: user.id).where("start_date <= ? AND end_date >= ?", Date.today, Date.today)
    end

    # why isn't my current_rentals method returning anything?
    # def self.current_rentals(user)
    #     where(renter_id: user.id).where("start_date <= ? AND end_date >= ?", Date.today, Date.today)
    # end

    private

    def no_overlapping_rentals
        existing_rentals = Rental.where(item_id: item_id).where("start_date <= ? AND end_date >= ?", start_date, end_date)

        if existing_rentals.exists?
            errors.add(:start_date, "cannot overlap with an existing rental")
        end
    end
end
