class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :location, :password_digest
end
