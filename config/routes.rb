Rails.application.routes.draw do

root 'location#search'

post "/", to: 'location#submit', as: "submit"
post 'location/:id/comments', to: 'comments#create', as: "comment"

end
