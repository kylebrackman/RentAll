class RemoveImageFromItems < ActiveRecord::Migration[7.0]
  def change
    remove_column :items, :image
  end
end
