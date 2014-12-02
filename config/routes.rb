Rails.application.routes.draw do
  root 'location#new'

  resources :location do
    resources :comments
  end
end
