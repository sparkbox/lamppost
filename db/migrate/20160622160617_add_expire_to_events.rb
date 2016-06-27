class AddExpireToEvents < ActiveRecord::Migration
  def change
      add_column :events, :expires, :datetime
    end
end
