class Api::RentalRequestsController < ApplicationController

    def show
        @rental_request = RentalRequest.find(params[:id])
    end
    
    def approve
        rental_request = RentalRequest.find(params[:id])
        rental_request.approved!
        # You may want to perform additional actions here, like creating the actual Rental record.
        redirect_to rental_request.item, notice: "Rental request approved."
    end
    
    def reject
        rental_request = RentalRequest.find(params[:id])
        rental_request.rejected!
        # You may want to perform additional actions here or notify the renter about the rejection.
        redirect_to rental_request.item, alert: "Rental request rejected."
    end

end
