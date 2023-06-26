class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :owned_items, :current_rentals, :upcoming_rentals, :past_rentals

  has_many :owned_items, foreign_key: :owner_id, class_name: "Item"
  has_many :rentals, foreign_key: :renter_id

  has_one :profile

  def current_rentals
    ActiveModel::Serializer::CollectionSerializer.new(object.rentals.current_rentals(object), serializer: RentalSerializer)
  end

  def upcoming_rentals
    ActiveModel::Serializer::CollectionSerializer.new(object.rentals.upcoming_rentals(object), serializer: RentalSerializer)
  end

  def past_rentals
    ActiveModel::Serializer::CollectionSerializer.new(object.rentals.past_rentals(object), serializer: RentalSerializer)
  end
end