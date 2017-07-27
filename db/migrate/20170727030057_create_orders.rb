class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.integer "user_id", null: false
      t.integer "recipe_id", null: false
      t.string "address", null: false

      t.timestamps
    end

    add_index :orders, :user_id
    add_index :orders, :recipe_id
  end
end
