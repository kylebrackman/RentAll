class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :owned_items
end