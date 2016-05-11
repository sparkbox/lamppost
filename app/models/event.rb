require_relative "../../lib/blacklist"
class Event < ActiveRecord::Base
  before_create :validate_name

  validates :name, presence: true, length: { minimum: 7, maximum: 100}
  validates_uniqueness_of :name
end

def validate_name
  approved = Blacklist.approved?(self.name)
  errors.add(:name, 'Name is not accepted. Please enter new.')if !approved
  approved
end
