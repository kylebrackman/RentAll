class AddRentedItemIdToItem < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :rented_item_id, :integer
  end
end
