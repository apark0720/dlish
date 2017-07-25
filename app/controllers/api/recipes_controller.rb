class Api::RecipesController < ApplicationController
  def index
    @recipes = if params[:category]
                 Recipe.where(category: params[:category])
               else
                 Recipe.all
                end
  end

  def search
    recipes = Recipe.all
    render json: recipes
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def create
    @recipe = Recipe.new(recipe_params)

    if @recipe.save
      render :show
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    render json: @recipe
  end

  def update
    @recipe = Recipe.find(params[:id])
    if @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :description, :chef_name, :url,
                                   :main_image_url, :price, :recipe_source,:creator_id,
                                   :status, :category, :chef_image_url)
  end
end
