class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :owned_items

  has_one :profile
end
