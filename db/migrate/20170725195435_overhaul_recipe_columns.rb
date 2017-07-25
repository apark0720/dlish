class OverhaulRecipeColumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :recipes, :delivery_address
    remove_column :recipes, :delivery_datetime
    remove_column :recipes, :lowest_price
    remove_column :recipes, :lowest_price_threshold
    remove_column :recipes, :max_orders
    remove_column :recipes, :order_by_date

    change_column :recipes, :price, :integer, null: true

    add_column :recipes, :status, :string, null: false, default: "pending"
    add_column :recipes, :category, :string, null: false
    add_column :recipes, :chef_image_url, :string, null: false
  end
end
