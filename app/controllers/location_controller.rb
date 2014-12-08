class LocationController < ApplicationController

	def search
		#makes sure the search view is read
	end

	def submit

		#finds or creates a location record in the database using the location parameters
		@location = Location.find_or_create_by(location_params)
		
		#response can be html or js
		#html renders the comments form partial

		respond_to do |format|
			format.html {render :partial => "comments/form"}
		end
	end

	private
		#sets the attributes that are allowed for a comment
		def location_params
			params.require(:location).permit(:city, :state)
		end
end