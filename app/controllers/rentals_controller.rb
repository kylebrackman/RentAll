class RentalsController < ApplicationController

    before_action :authorize

    def create
        rental = @current_user.rentals.create!(rental_params)
        render json: rental, status: :created
    end

    def index
        rentals = Rental.current_rentals(@current_user)
        render json: rentals
      end

    private

    def rental_params
        params.permit(:renter_id, :item_id, :start_date, :end_date, :owner_id)
    end

end
