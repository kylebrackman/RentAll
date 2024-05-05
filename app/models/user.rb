class User < ApplicationRecord
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true, uniqueness: { case_sensitive: false, message: "has already been taken" }, format: { with: /\A\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+\z/, message: "Invalid email format" }
    # add in correct error messaging for email already taken
    validates :password, presence: true, length: { minimum: 8 }

    has_secure_password 
    
    has_many :owned_items, foreign_key: :owner_id, class_name: "Item"
    has_many :rentals, foreign_key: :renter_id
    has_many :items, through: :rentals, source: :item

    has_many :rental_requests, foreign_key: :renter_id, class_name: "RentalRequest"
    # has_many :rental_requests_received, through: :owned_items, source: :item

    has_many :items_requested, through: :rental_requests_made, source: :item

    has_one :profile

    def rental_requests_made_with_items
        ActiveModel::Serializer::CollectionSerializer.new(self.rental_requests_made, serializer: RentalRequestSerializer, scope: self)
    end

    def current_rentals
        Rental.current_rentals(self)
    end
    
    def upcoming_rentals
        Rental.upcoming_rentals(self)
    end
    
    def past_rentals
        Rental.past_rentals(self)
    end

    def pending_rental_requests
        RentalRequest.where(renter_id: id, status: 0)
    end

    def rental_requests_received
        RentalRequest.includes(item: :owner).where(items: { owner_id: self.id }, status: 0)
    end

end
