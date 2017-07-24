Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: %i[create destroy show]
    resources :recipes
  end

  root 'static_pages#root'
end
