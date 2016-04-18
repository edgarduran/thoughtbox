Rails.application.routes.draw do

  root 'home#index'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :links, only: [:index]
  resources :users, only: [:create]

  namespace :api do
    namespace :v1 do
      resources :links, only: [:index, :create, :update], defaults: {format: :json}
    end
  end

end
