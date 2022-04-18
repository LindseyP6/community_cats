class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :how_many_cats, :first_tnr_date, :first_tnr_cat, :first_trap_date, :first_trapped_cat, :last_tnr_date, :last_tnr_cat, :last_trap_date, :last_trapped_cat

end
