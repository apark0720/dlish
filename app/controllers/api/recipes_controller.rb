class Api::RecipesController < ApplicationController
  def index
    current_user
    @recipes = if params[:category]
                 Recipe.where(category: params[:category])
               else
                 Recipe.all
               end
  end

  def search
    current_user
    recipes = Recipe.all
    render json: recipes
  end

  def show
    current_user
    @recipe = Recipe.find(params[:id])
  end

  def create
    current_user
    @recipe = Recipe.new(recipe_params)
    @recipe.creator_id = current_user.id

    if @recipe.save
      render :show
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  def destroy
    current_user
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    render json: @recipe
  end

  def update
    current_user
    @recipe = Recipe.find(params[:id])
    if @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :description, :url, :main_image_url,
                                   :video_id, :recipe_source, :status, :category)
  end
end
