class RentalRequestSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :status

  belongs_to :item, serializer: ItemSerializer
end
