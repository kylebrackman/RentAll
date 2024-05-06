class Api::RentalRequestsController < ApplicationController

    def show
      @rental_request = RentalRequest.includes(:item).find(params[:id])
      # @renter_profile = @rental_request.renter.profile
      # @owner_profile = @rental_request.item.owner.profile
      render json: @rental_request, serializer: RentalRequestSerializer
    end
    
    def approve
        rental_request = RentalRequest.find(params[:id])
        rental_request.approved!
        redirect_to rental_request.item, notice: "Rental request approved."
    end
    
    def reject
        rental_request = RentalRequest.find(params[:id])
        rental_request.rejected!
        redirect_to rental_request.item, alert: "Rental request rejected."
    end

    def index
      @rental_requests = RentalRequest.all
      render json: @rental_requests, each_serializer: RentalRequestSerializer
    end
    

end
