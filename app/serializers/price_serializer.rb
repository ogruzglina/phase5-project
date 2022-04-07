class PriceSerializer < ActiveModel::Serializer
  attributes :id, :id, :total_time, :total_amount
  has_one :user
  has_one :charger
end
