class ChangeLongitutdeToLongitudeInCats < ActiveRecord::Migration[6.1]
  def change
    rename_column :cats, :longitutde, :longitude
  end
end
