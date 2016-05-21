class AddStateToEvent < ActiveRecord::Migration
  def change
    add_column :events, :state, :text
  end
end
