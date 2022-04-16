class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :how_many_cats, :first_tnr_date, :first_tnr_cat, :first_trap_date, :first_trapped_cat

  has_many :cats

end
