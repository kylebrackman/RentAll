class AddOwnerIdToRentalRequests < ActiveRecord::Migration[7.0]
  def change
    add_column :rental_requests, :owner_id, :integer
  end
end
