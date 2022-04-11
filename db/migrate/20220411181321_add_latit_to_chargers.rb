class AddLatitToChargers < ActiveRecord::Migration[6.1]
  def change
    add_column :chargers, :latitude, :float
  end
end
