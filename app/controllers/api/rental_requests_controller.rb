class Api::RentalRequestsController < ApplicationController

  def create
    @rental_request = RentalRequest.new(rental_request_params)

    if @rental_request.save
      render json: @rental_request, status: :created
    else
      render json: @rental_request.errors, status: :unprocessable_entity
    end
  end

    def show
      @rental_request = RentalRequest.includes(:item).find(params[:id])
      # @renter_profile = @rental_request.renter.profile
      # @owner_profile = @rental_request.item.owner.profile
      render json: @rental_request, serializer: RentalRequestSerializer
    end
    
    def finalize_approval
      # Extract the id from the nested hash
      rental_request_id = params[:rental_request][:id]
      # Find the rental request by its id
      @rental_request = RentalRequest.find(rental_request_id)
      # Update the rental request status
      @rental_request.update(status: 'approved')
      # Create a new rental record based on the approved rental request
      # Assuming you have a Rental model and it accepts attributes like item_id, renter_id, start_date, end_date, etc.
      @rental = Rental.create(
        item_id: @rental_request.item_id,
        renter_id: @rental_request.renter_id,
        start_date: @rental_request.start_date,
        end_date: @rental_request.end_date,
        # Add any other necessary fields here
      )
      # Optionally, you can update the rental request to indicate that it has been processed
      @rental_request.processed = true
      @rental_request.save
    
      # Render the response
      render json: { message: 'Rental request finalized successfully and a new rental created', rental: @rental }, status: :ok
    rescue ActiveRecord::RecordNotFound => e
      render json: { error: 'Rental request not found' }, status: :not_found
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

    private

    def rental_request_params
      params.permit(:renter_id, :item_id, :start_date, :end_date, :owner_id)
    end
    

end
