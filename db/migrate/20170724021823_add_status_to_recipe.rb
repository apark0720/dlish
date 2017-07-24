class AddStatusToRecipe < ActiveRecord::Migration[5.0]
  def change
    add_column :recipes, :status, :string, null: false
  end
end
