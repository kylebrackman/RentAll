class RemoveRentedItemIdFromRentals < ActiveRecord::Migration[7.0]
  def change
    remove_column :rentals, :rented_item_id
  end
end
