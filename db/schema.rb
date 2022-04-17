# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_17_185116) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "chargers", force: :cascade do |t|
    t.string "charger_type"
    t.string "hours"
    t.string "address"
    t.boolean "status"
    t.float "cost"
    t.float "fee"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.float "latitude"
    t.float "longitude"
    t.integer "user_id"
  end

  create_table "prices", force: :cascade do |t|
    t.integer "total_time"
    t.float "total_amount"
    t.bigint "user_id", null: false
    t.bigint "charger_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["charger_id"], name: "index_prices_on_charger_id"
    t.index ["user_id"], name: "index_prices_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "review"
    t.bigint "user_id", null: false
    t.bigint "charger_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["charger_id"], name: "index_reviews_on_charger_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "avatar"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "prices", "chargers"
  add_foreign_key "prices", "users"
  add_foreign_key "reviews", "chargers"
  add_foreign_key "reviews", "users"
end
