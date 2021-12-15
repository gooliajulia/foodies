class RemoveBenefitsColumnFromFoods < ActiveRecord::Migration[6.1]
  def change
    remove_column :foods, :benefits_id
  end
end
