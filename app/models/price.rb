class Price < ApplicationRecord
  belongs_to :user
  belongs_to :charger
end
