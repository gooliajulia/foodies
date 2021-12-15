class CreateRecipesIngredientsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :ingredients, :recipes
  end
end
