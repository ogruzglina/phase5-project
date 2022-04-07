class Chargers < ActiveRecord::Migration[6.1]
  def change
    rename_column :chargers, :type, :charger_type
  end
end
