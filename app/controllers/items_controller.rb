class ItemsController < ApplicationController

    skip_before_action :authorize, only: :index


    def index
        if params[:all_items]
            items = Item.all
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
        item = @current_user.items.create!(item_params)
        render json: item, status: :created
    end

    def destroy
        @item.delete
        head :no_content
    end

    private

    def item_params
        params.permit(:name, :type, :condition, :image, :description)
    end

    def set_item
        @item = @current_user.items.find_by(id: params[:id])
        render json: { error: "Item not found" }, status: :not_found unless @item
    end

end
