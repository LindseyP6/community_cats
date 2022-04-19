class Interaction < ApplicationRecord
    belongs_to :cat
    belongs_to :user

    validates :comment, presence: true

    def time_stamp
        self.created_at.strftime("%m-%d-%Y")
    end
    #dates with time
    #self.created_at.strftime("%m-%d-%Y @ %H:%M")
end
