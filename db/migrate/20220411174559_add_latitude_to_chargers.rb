class AddLatitudeToChargers < ActiveRecord::Migration[6.1]
  def change
    add_column :chargers, :location, :point   #point - combines (x,y) which can be your lat / long
  end
end
