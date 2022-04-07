class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :id, :review
  has_one :user
  has_one :charger
end
