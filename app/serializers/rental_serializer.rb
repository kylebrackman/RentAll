class RentalSerializer < ActiveModel::Serializer
  attributes :id, :renter_id, :item_id, :start_date, :end_date, :item

  belongs_to :item
end
