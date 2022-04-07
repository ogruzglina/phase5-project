class User < ApplicationRecord
    has_many :reviews
    has_many :chargers, through: :reviews
end
