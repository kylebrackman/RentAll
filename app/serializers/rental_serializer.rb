class RentalSerializer < ActiveModel::Serializer
  attributes :id, :duration, :price, :renter_id, :item_id, :start_date, :end_date
end
