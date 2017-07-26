class RemoveNullConstraintsFromRecipes < ActiveRecord::Migration[5.0]
  def change
    change_column :recipes, :chef_name, :string, null: false
    change_column :recipes, :main_image_url, :string, null: false
    change_column :recipes, :chef_image_url, :string, null: false
  end
end
