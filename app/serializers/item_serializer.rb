class ItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  has_many :rentals

  attributes :id, :name, :item_type, :condition, :created_at, :description, :image, :price, :owner_id

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end

end
