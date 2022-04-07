class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :gender, :latitude, :longitutde, :description, :temperament, :tnr_status, :tnr_date, :trap_date, :special_notes, :user_id
end
