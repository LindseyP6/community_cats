class CreateInteractions < ActiveRecord::Migration[6.1]
  def change
    create_table :interactions do |t|
      t.string :comment
      t.integer :user_id
      t.integer :cat_id

      t.timestamps
    end
  end
end
