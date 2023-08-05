class AddColumnsToRentalRequests < ActiveRecord::Migration[7.0]
  def change
    add_column :rental_requests, :renter_id, :integer
    add_column :rental_requests, :item_id, :integer
    add_column :rental_requests, :start_date, :date
    add_column :rental_requests, :end_date, :date
    add_column :rental_requests, :status, :integer
  end
end
