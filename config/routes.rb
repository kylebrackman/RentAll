# config/routes.rb
Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  
  post '/createprofile', to: 'profiles#create'
  
  resources :rentals
  resources :items
  resources :users
  resources :profiles


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
