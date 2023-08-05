class Api::RentalsController < ApplicationController

    def create
        item = Item.find(params[:item_id])
        rental_request = RentalRequest.create(item_id: item.id, renter_id: @current_user.id)
        # You can add any other relevant logic here, like notifying the owner of the request.
      
        redirect_to api_rental_request_url(rental_request)
    end
    
    private

    def rental_params
        params.permit(:renter_id, :item_id, :start_date, :end_date, :owner_id)
    end
end
