class AddVideoIdtoRecipe < ActiveRecord::Migration[5.0]
  def change
    add_column :recipes, :video_id, :string, null: false
  end
end
