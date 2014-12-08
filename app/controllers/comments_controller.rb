class CommentsController < ApplicationController

	def create
		@location = Location.find(params[:id])
		@comment = @location.comments.create(comment_params)
		respond_to do |format|
			format.html { render :partial => "comments/comment",  locals: {comment: @comment} }
			format.js
		end
	
	end


	private 
		def comment_params
			params.require(:comment).permit(:commenter, :body)
		end
end
