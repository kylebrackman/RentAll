class ItemSerializer < ActiveModel::Serializer
  attributes :id, :owner_id, :name, :type, :condition, :created_at
end
