# config/routes.rb
Rails.application.routes.draw do

  namespace :api do

    root to: 'users#show'
    
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    post '/signup', to: 'users#create'
    get '/me', to: 'users#show'
  
    # get '/upcomingrentals', to: 'rentals#upcoming_rentals'
    # get '/pastrentals', to: 'rentals#past_rentals'

    post '/createprofile', to: 'profiles#create'
  
    resources :users
    resources :rentals
    resources :items
    resources :profiles
  end

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
