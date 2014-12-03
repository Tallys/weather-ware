class LocationController < ApplicationController

	def search
		@location = Location.new
	end

	def create
		@location = Location.find_or_create_by(location_params)
		if @location.save
			render 'show'
		else 
			render 'new'
		end
	end

	def show
		@location = Location.find(params[:id])
	end

	private #only allow city and state parameters
	def location_params
		params.require(:location).permit(:city, :state)
	end
end
