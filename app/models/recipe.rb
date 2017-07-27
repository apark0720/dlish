class Recipe < ApplicationRecord
  validates :title, :description, :url, :recipe_source,
            :creator_id, :status, :category, presence: true

  belongs_to :creator,
             primary_key: :id,
             foreign_key: :creator_id,
             class_name: :User

  has_many :upvotes
  has_many :orders

  def upvote_count
    self.upvotes.count
  end

  def upvoted(current_user)
    if current_user
      self.upvotes.where(user_id: current_user.id).first ? true : false
    else
      return false
    end
  end
end
