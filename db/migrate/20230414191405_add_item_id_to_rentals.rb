class AddItemIdToRentals < ActiveRecord::Migration[7.0]
  def change
    add_column :rentals, :item_id, :integer
  end
end
