class Recipe < ApplicationRecord
  validates :title, :description, :chef_name, :url, :main_image_url, :recipe_source,
            :creator_id, :status, :category, :chef_image_url, presence: true

  belongs_to :creator,
             primary_key: :id,
             foreign_key: :creator_id,
             class_name: :User
end
