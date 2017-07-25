class ChangeRecipeSourceToString < ActiveRecord::Migration[5.0]
  def change
    change_column :recipes, :recipe_source, :string
  end
end
