class User < ApplicationRecord
    has_secure_password

    has_many :cats
    has_many :interactions

    validates :name, presence: true
    validates :email, presence: true

    def how_many_cats
        self.cats.size
    end 

    def first_tnr_date
        self.cats.pluck(:tnr_date).max
    end

    def first_tnr_cat
        dates = self.cats.sort_by {|date | date[:tnr_date] }.last
        dates.name
    end

    def last_tnr_date
        self.cats.pluck(:tnr_date).min
    end

    def last_tnr_cat
        dates = self.cats.sort_by {|date | date[:tnr_date] }.first
        dates.name
    end

    def first_trap_date
        self.cats.pluck(:trap_date).max
    end

    def first_trapped_cat
        dates = self.cats.sort_by {|date | date[:trap_date] }.last
        dates.name
    end

    def last_trap_date
        self.cats.pluck(:trap_date).min
    end

    def last_trapped_cat
        dates = self.cats.sort_by {|date | date[:trap_date] }.first
        dates.name
    end


end