class CreateJoinTableRecipeFood < ActiveRecord::Migration[6.1]
  def change
    create_join_table :recipes, :foods do |t|
      # t.index [:recipe_id, :food_id]
      # t.index [:food_id, :recipe_id]
    end
  end
end
