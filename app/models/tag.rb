class Tag
  attr_accessor :name, :data_tag, :status
end

def all_tags(category)
  ActsAsTaggableOn::Tagging.where(context: category).map { |tagging| tagging.tag.name }.uniq
end

def tag_data(parameters, category)
  tag_list = ActsAsTaggableOn.default_parser.new(parameters).parse
  tags = all_tags category
  tag_data = []
  tags.each do |tag|
    tag_obj = Tag.new
    tag_obj.name = tag
    tag_obj.data_tag = URI.encode(tag)
    tag_obj.status = tag_list.include?(tag) ? "checked" : ""
    tag_data << tag_obj
  end
  tag_data
end

def order_days(day_tags)
  days_sorted = Array.new
  if day_tags && day_tags.length > 0 then
   days_of_week = Date::DAYNAMES
   days_of_week.each do |day|
     if day_tags.find {|item| item.name == day} then
       days_sorted << day_tags.fetch(day_tags.find_index {|item| item.name == day})
     end
   end
 end
 days_sorted
end
