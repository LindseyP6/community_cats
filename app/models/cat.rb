class Cat < ApplicationRecord
    belongs_to :user
    has_many :interactions
    geocoded_by :address
    after_validation :geocode, if: ->(obj){ obj.address.present? and obj.address_changed? }
    # after_validation :geocode, if: :address_changed?

    # geocoded_by :address_for_geocode
    # reverse_geocoded_by :latitude, :longitude

    def convert_address_to_coordinates
        results = Geocoder.search(self.address)
        results.first.coordinates
    end

    # def address
    #     [street, city, zip, state].compact.join(", ")
    # end

    # def address_changed?
    #     street_changed? || city_changed? || zip_changed? || state_changed?
    # end
    
end
