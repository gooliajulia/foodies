Rails.application.routes.draw do

  resources :ingredients
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'

  resources :ingredients, only: [:index, :create, :update]
  resources :recipes
  post '/recipes/ingredients', to: 'recipes#add_ingredient'
  resources :users, only: [:create, :index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
