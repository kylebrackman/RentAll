# config/routes.rb
Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  
  get '/hello', to: 'application#hello_world'
  #q: ActionController::RoutingError (No route matches [GET] "/[object%20Object]"): why is this happening?
  #a:  because you're not using the right url.  you're using the url that you would use in the browser, but you're not in the browser.  you're in the console.  you need to use the url that you would use in the console.  you can find that url by running the command:  rails routes


  resources :rentals
  resources :items
  resources :users

  # get '*path',
  #     to: 'fallback#index',
  #     constraints: ->(req) { !req.xhr? && req.format.html? }
end
