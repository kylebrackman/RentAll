class RentalSerializer < ActiveModel::Serializer
  attributes :id, :renter_id, :item_id, :start_date, :end_date

  belongs_to :item, class_name: "Item"
end
