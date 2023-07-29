class Api::ProfilesController < ApplicationController

    def create
        profile = @current_user.create_profile!(profile_params)
        profile.image.attach(params[:image])
        render json: profile, status: :created
    end

    def index
        users = User.all
        render json: users, include: [:profile]
    end

    def show
        profile = Profile.find(params[:id])
        render json: profile
    end

    private 

    def profile_params
        params.permit(:name, :bio, :lat, :lng, :user_id, :image)
    end
    
end
