require_relative "../../lib/blacklist"
class Event < ActiveRecord::Base
  before_create :validate_name

  validates :name, presence: true
  validates :name, uniqueness: true
end

def validate_name
  approved = Blacklist.approved?(self.name)
  errors.add(:name, 'Name is not accepted. Please enter new.')if !approved
  approved
end
