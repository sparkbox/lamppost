class AddCityToEvent < ActiveRecord::Migration
  def change
    add_column :events, :city, :text
  end
end
