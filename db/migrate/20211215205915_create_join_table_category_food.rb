class CreateJoinTableCategoryFood < ActiveRecord::Migration[6.1]
  def change
    create_join_table :categories, :foods
  end
end
