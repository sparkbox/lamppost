class AddLocationAgainBecauseHerokuSucksToEvent < ActiveRecord::Migration
  def change
    add_column :events, :location_name, :text
  end
end
