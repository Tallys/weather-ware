Rails.application.routes.draw do

#define root to location controller with the search method
root 'location#search'

#define post request route with root url for submitting location
post "/", to: 'location#submit', as: "submit"

#define post request route for creating comments
post 'location/:id/comments', to: 'comments#create', as: "comment"

end
