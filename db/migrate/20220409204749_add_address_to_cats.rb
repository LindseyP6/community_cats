class AddAddressToCats < ActiveRecord::Migration[6.1]
  def change
    add_column :cats, :address, :string
  end
end
