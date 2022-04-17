class RemoveChargerIdFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :charger_id, :integer
  end
end
