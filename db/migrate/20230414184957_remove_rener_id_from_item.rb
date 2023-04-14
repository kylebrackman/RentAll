class RemoveRenerIdFromItem < ActiveRecord::Migration[7.0]
  def change
    remove_column :items, :renter_id
  end
end
