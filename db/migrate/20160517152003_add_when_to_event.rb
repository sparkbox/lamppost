class AddWhenToEvent < ActiveRecord::Migration
  def change
    add_column :events, :when, :text
  end
end
