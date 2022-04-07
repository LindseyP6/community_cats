class Interaction < ApplicationRecord
    belongs_to :cat
    belongs_to :user

    validates :comment, presence: true
end
