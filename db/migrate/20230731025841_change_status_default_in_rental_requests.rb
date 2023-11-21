class ChangeStatusDefaultInRentalRequests < ActiveRecord::Migration[7.0]
  def change
    change_column_default :rental_requests, :status, from: nil, to: 0
  end
end
