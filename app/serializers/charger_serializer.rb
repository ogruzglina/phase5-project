class ChargerSerializer < ActiveModel::Serializer
  attributes :id, :charger_type, :hours, :address, :status, :cost, :fee
end
