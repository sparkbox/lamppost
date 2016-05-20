class AddLocationAgainBecauseHerokuSucksToEvent < ActiveRecord::Migration
  def change
    add_column :events, :location, :text
  end
end
