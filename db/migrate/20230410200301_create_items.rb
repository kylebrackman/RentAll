class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.integer :owner_id
      t.integer :renter_id
      t.string :name
      t.string :type
      t.string :condition

      t.timestamps
    end
  end
end
