class Event < ActiveRecord::Base

  has_many :links, dependent: :destroy
  before_create :validate_name
  before_save :populate_tag_list
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

def populate_tag_list
  self.tag_list = []
  self.topics.each do |topic|
    self.tag_list << topic.name.parameterize.underscore
  end
  self.times.each do |topic|
    self.tag_list << topic.name.parameterize.underscore
  end
  self.days.each do |topic|
    self.tag_list << topic.name.parameterize.underscore
  end
  self.frequencies.each do |topic|
    self.tag_list << topic.name.parameterize.underscore
  end
end
