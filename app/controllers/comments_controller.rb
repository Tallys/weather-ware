class CommentsController < ApplicationController

	def create
		@location = Location.find(params[:id])
		@comment = @location.comments.create(comment_params)
		redirect_to root_url(location: @location)
	
	end


	private 
		def comment_params
			params.require(:comment).permit(:commenter, :body)
		end
end
