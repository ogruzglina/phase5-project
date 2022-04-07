class Charger < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    has_many :prices, dependent: :destroy
    has_many :users, through: :prices
end
