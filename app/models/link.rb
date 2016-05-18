class Link < ActiveRecord::Base
  belongs_to :event
  validates :title, presence: true
  validates :url, presence: true
end
