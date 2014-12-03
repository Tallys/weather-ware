class LocationController < ApplicationController

	def search
		if params[:location].present?
			@location = Location.find(params[:location])
		else
			@location = Location.new
		end
	end

	def submit
		@location = Location.find_or_create_by(location_params)
		redirect_to root_url(location: @location)
	end

	private #only allow city and state parameters
	def location_params
		params.require(:location).permit(:city, :state)
	end
end

