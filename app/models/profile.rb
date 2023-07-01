class Profile < ApplicationRecord

    validates :image, attached: true, content_type: ['image/png', 'image/jpg', 'image/jpeg'], size: { less_than: 5.megabytes , message: 'is not given between size' }
    validates :name, :bio, :lat, :lng, presence: true
    
    belongs_to :user
    has_one_attached :image, dependent: :destroy

end
