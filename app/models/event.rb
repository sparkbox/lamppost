class Event < ActiveRecord::Base

  has_many :links, dependent: :destroy
  before_create :validate_name

  validates :name, presence: true
  validates_uniqueness_of :name
  mount_uploader :image, ImageUploader

  acts_as_taggable # Alias for acts_as_taggable_on :tags
  acts_as_taggable_on :topics, :times, :days, :frequencies
end

def validate_name
  approved = Blacklist.approved?(self.name)
  errors.add(:name, 'Name is not accepted. Please enter new.')if !approved
  approved
end
