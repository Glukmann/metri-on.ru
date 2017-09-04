Rails.application.routes.draw do
  resources :catalogs, only: [:index] do
      collection { post :import }
  end

  resources :news
  devise_for :users

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root 'root#index'

  get '*unmatched_route', to: 'application#not_found'
end
