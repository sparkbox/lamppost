class AddImageContentTypeToEvent < ActiveRecord::Migration
  def change
    add_column :events, :image_content_type, :text
  end
end
