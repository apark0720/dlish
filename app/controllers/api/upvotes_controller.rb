class Api::UpvotesController < ApplicationController
  def create
    @upvote = upvote.new(upvote_params)
    if @upvote.save
      render "api/upvotes/show"
    else
      render json: @upvote.errors.full_messages, status: 422
    end
  end

  def destroy
    @upvote = upvote.find_by(user_id: upvote_params[:user_id],
                            recipe_id: upvote_params[:recipe_id])
    if @upvote
      @upvote.destroy
      render json: @upvote
    end
  end

  private

  def upvote_params
    params.require(:upvote).permit(:user_id, :recipe_id)
  end
end
