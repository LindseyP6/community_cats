Rails.application.routes.draw do
  
  resources :cats
  resources :interactions
  resources :users, only: [:index, :show, :create, :update, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  get "/me", to: "users#me"
  post '/signup', to: 'users#create' 
  post "/login", to: "sessions#create"
  delete '/logout', to: 'sessions#destroy'
  # get '/user-profile', to: "users#show"

end
