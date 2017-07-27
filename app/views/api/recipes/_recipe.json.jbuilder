json.extract! recipe, :id, :title, :description, :chef_name, :url, :video_id, :main_image_url, :price, :recipe_source, :creator_id, :status, :category, :chef_image_url, :upvote_count

json.upvoted recipe.upvoted(current_user)
