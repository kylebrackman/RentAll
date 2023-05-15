class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :lat, :lng

  belongs_to :user
end
