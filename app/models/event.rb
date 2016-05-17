require_relative "../../lib/blacklist"
class Event < ActiveRecord::Base
  before_create :validate_name

  validates :name, :when, :location, :description, presence: true
  validates_uniqueness_of :name
end

def validate_name
  approved = Blacklist.approved?(self.name)
  errors.add(:name, 'Name is not accepted. Please enter new.')if !approved
  approved
end
