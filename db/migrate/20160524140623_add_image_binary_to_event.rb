class AddImageBinaryToEvent < ActiveRecord::Migration
  def change
    add_column :events, :image_binary, :binary
  end
end
