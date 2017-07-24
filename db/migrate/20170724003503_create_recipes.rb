class CreateRecipes < ActiveRecord::Migration[5.0]
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :chef_name, null: false
      t.string :delivery_address, null: false
      t.datetime :delivery_datetime, null: false
      t.string :url, null: false
      t.string :main_image_url, null: false
      t.integer :price, null: false
      t.integer :lowest_price, null: false
      t.integer :lowest_price_threshold
      t.integer :max_orders
      t.date :order_by_date, null: false
      t.integer :recipe_source, null: false
      t.integer :creator_id, null: false
      t.string :category

      t.timestamps
    end

    add_index :recipes, :creator_id
  end
end
