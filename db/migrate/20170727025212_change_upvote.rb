class ChangeUpvote < ActiveRecord::Migration[5.0]
  def change
    remove_column :upvotes, :post_id, :integer
    add_column :upvotes, :recipe_id, :integer

    add_index :upvotes, :recipe_id
  end
end
