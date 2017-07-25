class DeleteRecipeCategoryAndStatus < ActiveRecord::Migration[5.0]
  def change
    remove_column :recipes, :category
    remove_column :recipes, :status
  end
end
