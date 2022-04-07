class Review < ApplicationRecord
  belongs_to :user
  belongs_to :charger

  validates :review, :user_id, :charger_id, presence: true
end
