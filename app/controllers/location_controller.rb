class LocationController < ApplicationController

	def search

	end

	def submit
		@location = Location.find_or_create_by(location_params)
		
		respond_to do |format|
			format.html { render :partial => "comments/form" }
			format.js
		end
		end

	private #only allow city and state parameters
	def location_params
		params.require(:location).permit(:city, :state)
	end
end