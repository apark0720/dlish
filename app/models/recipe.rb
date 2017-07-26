class Recipe < ApplicationRecord
  validates :title, :description, :url, :recipe_source,
            :creator_id, :status, :category, presence: true

  belongs_to :creator,
             primary_key: :id,
             foreign_key: :creator_id,
             class_name: :User
end
