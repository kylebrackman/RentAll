class AddRentalRequestIdToRentals < ActiveRecord::Migration[7.0]
  def change
    add_column :rentals, :rental_request_id, :integer
  end
end
