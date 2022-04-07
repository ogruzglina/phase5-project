class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :avatar, :password_digest, :charger_id
end
