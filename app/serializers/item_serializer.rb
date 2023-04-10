class ItemSerializer < ActiveModel::Serializer
  attributes :id, :owner_id, :renter_id, :name, :type, :condition
end
