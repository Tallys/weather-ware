class LocationController < ApplicationController

	def new
		@location = Location.new
	end

	def create
		@location = Location.find_or_create_by(location_params)
		if @location.save
			redirect_to @location
		else 
			render 'new'
		end
	end

	def show
		@location = Location.find(params[:id])
	end

	private
	def location_params
		params.require(:location).permit(:city, :state)
	end
end
