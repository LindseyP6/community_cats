class Cat < ApplicationRecord
    belongs_to :user
    has_many :interactions
    geocoded_by :address
    after_validation :geocode, if: ->(obj){ obj.address.present? and obj.address_changed? }

    validates :address, presence: true
    validates :name, presence: true
    
    def convert_address_to_coordinates
        results = Geocoder.search(self.address)
        results.first.coordinates
    end

    def self.earliest_tnr_date
        self.all.pluck(:tnr_date).min
    end

    def self.earliest_tnr_date_name
       dates = self.all.sort_by {|date | date[:tnr_date] }.first
       dates.name
    end

end
