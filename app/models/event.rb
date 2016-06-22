class Event < ActiveRecord::Base

  has_many :links, dependent: :destroy
  before_create :validate_name
  validates :name, presence: true
  validates_uniqueness_of :name
  mount_uploader :image, ImageUploader

  acts_as_taggable # Alias for acts_as_taggable_on :tags
  acts_as_taggable_on :topics, :times, :days, :frequencies
  default_scope { where("expires IS NULL OR expires > ?", Time.now) }
  def to_param
    "#{id} #{name}".parameterize
  end

  def entire_tag_list
    tags = topics.collect { |topic| uri_encode(topic.name) }
    tags += times.collect { |time| uri_encode(time.name) }
    tags +=  days.collect { |day| uri_encode(day.name) }
    tags +=  frequencies.collect { |frequency| uri_encode(frequency.name) }
    tags
  end

  def joined_tag_list
    entire_tag_list.join ' '
  end

  def uri_encode(name)
    URI.encode(name)
  end

  def validate_name
    approved = Blacklist.approved?(self.name)
    errors.add(:name, 'Name is not accepted. Please enter new.')if !approved
    approved
  end

  def tag_queried(queried_tags)
    if queried_tags && queried_tags.length > 0 then
      'hidden' if entire_tag_list.length == (entire_tag_list - queried_tags.collect { |tag| uri_encode(tag) }).length
    end
  end

  def g_maps_link
    if g_maps_address_searchable
      "https://google.com/maps/place/#{g_maps_format_address}"
    end
  end

  private
  def g_maps_address_searchable
    (location_name != "") && (street_address != "") && ((city != "") || (zipcode != ""))
  end

  def g_maps_format_address
    [ street_address, city, state, zipcode ].map do |address_part|
      address_part.split(' ').join('+') if address_part
    end.join(',')
  end
end
