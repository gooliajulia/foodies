class RemoveColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :foods, :category
  end
end
