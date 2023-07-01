class RemoveNamesFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :firstname, :string
    remove_column :users, :lastname, :string
  end
end
