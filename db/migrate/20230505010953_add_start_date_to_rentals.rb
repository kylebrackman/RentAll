class AddStartDateToRentals < ActiveRecord::Migration[7.0]
  def change
    add_column :rentals, :start_date, :date
  end
end
