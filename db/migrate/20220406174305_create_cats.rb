class CreateCats < ActiveRecord::Migration[6.1]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :image
      t.string :gender
      t.float :latitude
      t.float :longitutde
      t.string :description
      t.string :temperament
      t.string :tnr_status
      t.string :tnr_date
      t.string :trap_date
      t.string :special_notes
      t.integer :user_id

      t.timestamps
    end
  end
end
