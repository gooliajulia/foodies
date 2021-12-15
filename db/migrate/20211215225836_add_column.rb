class AddColumn < ActiveRecord::Migration[6.1]
  def change
    add_reference :foods, :benefits, index: true
  end
end
