class CreatePrices < ActiveRecord::Migration[6.1]
  def change
    create_table :prices do |t|
      t.integer :total_time
      t.float :total_amount
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :charger, null: false, foreign_key: true

      t.timestamps
    end
  end
end
