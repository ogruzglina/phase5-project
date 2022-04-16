class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :avatar, :charger_id
end
