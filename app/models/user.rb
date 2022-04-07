class User < ApplicationRecord
    has_secure_password
    has_many :cats
    has_many :interactions

    validates :name, presence: true
    validates :email, presence: true
end
