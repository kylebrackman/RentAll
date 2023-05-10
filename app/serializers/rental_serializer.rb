class RentalSerializer < ActiveModel::Serializer
  attributes :id, :price, :renter_id, :item_id, :start_date, :end_date
end
