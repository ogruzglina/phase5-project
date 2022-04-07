class Charger < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    has_many :prices
    has_many :users, through: :prices
end
