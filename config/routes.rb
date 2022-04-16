Rails.application.routes.draw do
  resources :prices, only: [:show]
  resources :reviews, only: [:create, :index]
  resources :chargers
  resources :users
  # post "/signup", to: "users#create"
  # get "/auth", to: "users#show"
  # post "/login", to: "sessions#create"
  # delete "/logout", to: "sessions#destroy"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
