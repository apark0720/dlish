class Recipe < ApplicationRecord
  validates :title, :description, :chef_name, :delivery_address, :delivery_datetime,
            :url, :main_image_url, :price, :lowest_price,
            :order_by_date, :recipe_source, :creator_id, :status, presence: true

  belongs_to :creator,
             primary_key: :id,
             foreign_key: :creator_id,
             class_name: :User
end
