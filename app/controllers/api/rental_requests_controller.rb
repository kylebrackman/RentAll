class Api::RentalRequestsController < ApplicationController

  def create
    rental_request = @current_user.rental_requests.create!(rental_request_params)
    render json: rental_request, status: :created
  end

  # def create
  #   rental_request = RentalRequest.new(rental_request_params)
  #   render json: rental_request, status: :created if rental_request.save!
  # end

    def show
      @rental_request = RentalRequest.includes(:item).find(params[:id])
      # @renter_profile = @rental_request.renter.profile
      # @owner_profile = @rental_request.item.owner.profile
      render json: @rental_request, serializer: RentalRequestSerializer
    end
    
    def finalize_approval
      rental_request = RentalRequest.find(params[:id])
    
      # Log the rental request details
      Rails.logger.debug "Debugging rental_request: #{rental_request.inspect}"
    
      # Attempt to create a new Rental record
      rental = Rental.create(
        rental_request_id: rental_request.id,
        item_id: rental_request.item_id,
        renter_id: rental_request.renter_id,
        start_date: rental_request.start_date,
        end_date: rental_request.end_date,
        owner_id: rental_request.owner_id
      )
    
      # Update the rental request status to 'approved'
      rental_request.update(status: 'approved')
    
      # Render success response
      render json: { message: 'Rental request finalized successfully', rental: rental }, status: :ok
    
    rescue ActiveRecord::RecordNotFound => e
      # Handle case where the rental request is not found
      render json: { error: 'Rental request not found' }, status: :not_found
    
    rescue ActiveRecord::RecordInvalid => e
      # Handle case where the rental record creation fails due to validation errors
      render json: { error: e.message, errors: rental.errors.full_messages }, status: :unprocessable_entity
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
      params.permit(:renter_id, :item_id, :start_date, :end_date, :owner_id, :rental_request)
    end
    

end
