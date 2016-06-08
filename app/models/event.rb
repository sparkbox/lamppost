class Event < ActiveRecord::Base

  has_many :links, dependent: :destroy
  before_create :validate_name
  after_save :populate_tag_list
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
  tags_list_array = Array.new
  tags_list_array << ActsAsTaggableOn::Tagging.all.where(context: "topics").map {|tagging| URI.encode(tagging.tag.name) }
  tags_list_array << ActsAsTaggableOn::Tagging.all.where(context: "times").map {|tagging|  URI.encode(tagging.tag.name)  }
  tags_list_array << ActsAsTaggableOn::Tagging.all.where(context: "days").map {|tagging|  URI.encode(tagging.tag.name)  }
  tags_list_array << ActsAsTaggableOn::Tagging.all.where(context: "frequencies").map {|tagging|  URI.encode(tagging.tag.name) }

  self.tag_list =  tags_list_array.join(" ")
end
