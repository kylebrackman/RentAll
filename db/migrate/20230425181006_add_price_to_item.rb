class AddPriceToItem < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :price, :integer
  end
end
