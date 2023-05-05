class AddEndDateToRentals < ActiveRecord::Migration[7.0]
  def change
    add_column :rentals, :end_date, :date
  end
end
