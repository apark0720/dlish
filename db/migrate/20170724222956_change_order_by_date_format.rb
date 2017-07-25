class ChangeOrderByDateFormat < ActiveRecord::Migration[5.0]
  def change
    change_column :recipes, :order_by_date, :datetime
  end
end
