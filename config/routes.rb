Rails.application.routes.draw do
  
  resources :cats
  resources :interactions, only: [:show, :index, :create, :destroy]
  resources :users, only: [:index, :show, :create, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  delete '/logout', to: 'sessions#destroy'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
