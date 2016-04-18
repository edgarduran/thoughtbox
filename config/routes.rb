Rails.application.routes.draw do

  get 'links/index'

  get 'users/create'

  root 'home#index'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :links, only: [:index]

end
