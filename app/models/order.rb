class Order < ApplicationRecord
  validates :address, presence: true

  belongs_to :user
  belongs_to :recipe
end
