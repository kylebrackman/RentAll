class CreateRentals < ActiveRecord::Migration[7.0]
  def change
    create_table :rentals do |t|
      t.datetime :duration
      t.integer :price

      t.timestamps
    end
  end
end
