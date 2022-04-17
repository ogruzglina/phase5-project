class AddUserIdToChargers < ActiveRecord::Migration[6.1]
  def change
    add_column :chargers, :user_id, :integer
  end
end
