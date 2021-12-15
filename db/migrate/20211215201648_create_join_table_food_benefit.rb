class CreateJoinTableFoodBenefit < ActiveRecord::Migration[6.1]
  def change
    create_join_table :foods, :benefits do |t|
      # t.index [:food_id, :benefit_id]
      # t.index [:benefit_id, :food_id]
    end
  end
end
