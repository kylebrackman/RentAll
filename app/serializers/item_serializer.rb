class ItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :owner_id, :name, :item_type, :condition, :created_at, :description, :image, :price

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
