class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :board
      t.string :user_name
      t.integer :total_score
      t.string :words

      t.timestamps
    end
  end
end
