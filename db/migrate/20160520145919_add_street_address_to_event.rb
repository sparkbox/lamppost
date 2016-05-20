class AddStreetAddressToEvent < ActiveRecord::Migration
  def change
    add_column :events, :street_address, :text
  end
end
