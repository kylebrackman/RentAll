class UserSerializer < ActiveModel::Serializer
  attributes :id, :owned_items, :current_rentals, :upcoming_rentals, :past_rentals, :first_name, :last_name, :email, :rental_requests_made, :rental_requests_received, :rental_requests, :items_requested, :rental_requests_made_with_items

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

  def rental_requests_made_with_items
    ActiveModel::Serializer::CollectionSerializer.new(object.rental_requests_made, serializer: RentalRequestSerializer)
  end
end