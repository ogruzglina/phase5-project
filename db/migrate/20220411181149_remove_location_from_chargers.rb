class RemoveLocationFromChargers < ActiveRecord::Migration[6.1]
  def change
    remove_column :chargers, :location, :point
  end
end
