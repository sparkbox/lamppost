class AddRecurringToEvent < ActiveRecord::Migration
  def change
    add_column :events, :recurring, :boolean
  end
end
