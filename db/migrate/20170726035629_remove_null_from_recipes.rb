class RemoveNullFromRecipes < ActiveRecord::Migration[5.0]
  def change
    change_column :recipes, :chef_name, :string, null: true
    change_column :recipes, :main_image_url, :string, null: true
    change_column :recipes, :chef_image_url, :string, null: true
  end
end
