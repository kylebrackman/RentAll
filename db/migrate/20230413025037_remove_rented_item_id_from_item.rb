class RemoveRentedItemIdFromItem < ActiveRecord::Migration[7.0]
  def change
    remove_column :items, :rented_item_id
  end
end
