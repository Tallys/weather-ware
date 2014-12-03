Rails.application.routes.draw do

root 'location#search'

post "/", to: 'location#search', as: "search"
post 'location/:id/comments', to: 'comments#create', as: "comment"

end
