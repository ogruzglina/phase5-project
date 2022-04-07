class User < ApplicationRecord
    has_many :reviews
    has_many :chargers, through: :reviews

    has_many :prices
    has_many :chargers, through: :prices
end
