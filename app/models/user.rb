class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :chargers, through: :reviews

    has_many :prices, dependent: :destroy
    has_many :chargers, through: :prices
end
