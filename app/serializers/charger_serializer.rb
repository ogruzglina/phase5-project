class ChargerSerializer < ActiveModel::Serializer
  attributes :id, :charger_type, :hours, :address, :status, :cost, :fee, :latitude, :longitude, :user_id
  has_one :user
end
