class Cat < ApplicationRecord
    belongs_to :user
    has_many :interactions
    geocoded_by :address
    after_validation :geocode
    #, if: :address_changed?

    # geocoded_by :address_for_geocode
    # reverse_geocoded_by :latitude, :longitude

    
end
