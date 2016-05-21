class AddZipCodeToEvent < ActiveRecord::Migration
  def change
    add_column :events, :zipcode, :text
  end
end
