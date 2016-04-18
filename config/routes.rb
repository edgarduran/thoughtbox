Rails.application.routes.draw do

  get 'links/index'

  root 'home#index'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :links, only: [:index]
  resources :users, only: [:create]

end
