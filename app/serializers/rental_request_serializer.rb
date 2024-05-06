class RentalRequestSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :status, :renter, :item

  belongs_to :item, serializer: ItemSerializer

  attribute :renter_profile do
    ActiveModel::SerializableResource.new(object.renter.profile, serializer: ProfileSerializer)
  end

  attribute :owner_profile do
    ActiveModel::SerializableResource.new(object.item.owner.profile, serializer: ProfileSerializer)
  end
end
