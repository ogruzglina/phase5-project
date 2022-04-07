class CreateChargers < ActiveRecord::Migration[6.1]
  def change
    create_table :chargers do |t|
      t.string :type
      t.string :hours
      t.string :address
      t.boolean :status
      t.float :cost
      t.float :fee

      t.timestamps
    end
  end
end
