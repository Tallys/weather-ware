class CommentsController < ApplicationController

	#generates comment based on location id
	#response will be the rendering of an html partial with local variables passed in

	def create
		@location = Location.find(params[:id])
		@comment = @location.comments.create(comment_params)
		respond_to do |format|
			format.html { render :partial => "comments/comment",  locals: {comment: @comment} }
		end
	
	end

	private 
	#sets the attributes that are allowed for a comment
		def comment_params
			params.require(:comment).permit(:commenter, :body)
		end
end
