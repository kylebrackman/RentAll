class AddRentedItemIdToRentals < ActiveRecord::Migration[7.0]
  def change
    add_column :rentals, :rented_item_id, :integer
  end
end
