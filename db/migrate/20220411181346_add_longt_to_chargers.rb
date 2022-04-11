class AddLongtToChargers < ActiveRecord::Migration[6.1]
  def change
    add_column :chargers, :longitude, :float
  end
end
