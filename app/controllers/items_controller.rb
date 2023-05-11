class ItemsController < ApplicationController

    skip_before_action :authorize, only: :index


    def index
        if params[:all_items]
            items = Item.all.with_attached_image
        else
            #adding in finding the current user because i'm skipping authorize above
            @current_user = User.find_by(id: session[:user_id])
            items = @current_user.owned_items
        end
        render json: items
    end

    def show 
        render json: @item
    end

    def create
        if params[:image].blank?
            raise ActionController::BadRequest, "Please add a photo"
        end
        # item = @current_user.items.create!(item_params)
        item = @current_user.owned_items.create!(owned_item_params)
        item.image.attach(params[:image])
        render json: item, status: :created
    end

    def destroy
        @item.delete
        head :no_content
    end

    def owned_item_params
        # might want to change to owned_item_params
        params.permit(:name, :item_type, :description, :condition, :image, :price)
    end

    def set_item
        @item = @current_user.items.find_by(id: params[:id])
        render json: { error: "Item not found" }, status: :not_found unless @item
    end

end
