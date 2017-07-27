class CreateUpvotes < ActiveRecord::Migration[5.0]
  def change
    create_table :upvotes do |t|
      t.integer "user_id", null: false
      t.integer "post_id", null: false

      t.timestamps
    end

    add_index :upvotes, :user_id
    add_index :upvotes, :post_id
  end
end
