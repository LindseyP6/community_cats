class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :gender, :latitude, :longitude, :description, :temperament, :tnr_status, :tnr_date, :trap_date, :special_notes, :user_id, :human_name, :address

  def human_name
    self.object.user.name
  end
end
