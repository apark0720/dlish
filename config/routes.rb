Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: %i[create destroy show]
    resources :recipes
    resources :upvotes, only: %i[create destroy]
    resources :orders, only: %i[create show]
  end

  root 'static_pages#root'
end
