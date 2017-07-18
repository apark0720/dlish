Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :user, only: [:create]
    resources :session, only: %i[create destroy show]
  end

  root 'static_pages#root'
end
