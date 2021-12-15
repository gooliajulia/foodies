Rails.application.routes.draw do

  resources :categories
  resources :foods
  resources :benefits
  resources :ingredients
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'


  resources :recipes
  resources :users, only: [:create, :index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
