class Api::AccountsController < ApplicationController

    before_action :authorize

    def index
    
    end
    

    def create
        account = Account.find_or_create_by(user_id: @current_user.id)

        service = StripeAccount.new(account)
        service.create_account

        redirect_to service.onboarding_url, allow_other_host: true, status: see_other
    end

end