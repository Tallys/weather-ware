class CommentsController < ApplicationController

	def create
		@location = Location.find(params[:location_id])
		@comment = @location.comments.create(comment_params)
		redirect_to location_path(@location)
	end

	def destroy
		@location = Location.find(params[:location_id])
		@comment = @location.comments.find(params[:id])
		@comment.destroy
		redirect_to location_path(@location)
	end

	private 
		def comment_params
			params.require(:comment).permit(:commenter, :body)
		end
end
