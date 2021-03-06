# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170727030057) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "orders", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "recipe_id",  null: false
    t.string   "address",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_orders_on_recipe_id", using: :btree
    t.index ["user_id"], name: "index_orders_on_user_id", using: :btree
  end

  create_table "recipes", force: :cascade do |t|
    t.string   "title",                              null: false
    t.text     "description",                        null: false
    t.string   "chef_name"
    t.string   "url",                                null: false
    t.string   "main_image_url"
    t.integer  "price"
    t.string   "recipe_source",                      null: false
    t.integer  "creator_id",                         null: false
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.string   "status",         default: "pending", null: false
    t.string   "category",                           null: false
    t.string   "chef_image_url"
    t.string   "video_id",                           null: false
    t.index ["creator_id"], name: "index_recipes_on_creator_id", using: :btree
  end

  create_table "upvotes", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "recipe_id"
    t.index ["recipe_id"], name: "index_upvotes_on_recipe_id", using: :btree
    t.index ["user_id"], name: "index_upvotes_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

end
