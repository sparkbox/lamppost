class Tag
  attr_accessor :name, :data_tag, :status
end

def all_tags(category)
  ActsAsTaggableOn::Tagging.where(context: category).map { |tagging| tagging.tag.name }.uniq
end

def tag_data(parameters, category)
  tag_list = ActsAsTaggableOn.default_parser.new(parameters).parse
  tags = ActsAsTaggableOn::Tagging.where(context: category).map { |tagging| tagging.tag.name }.uniq
  tag_data = []
  tags.each do |tag|
    tag_obj = Tag.new
    tag_obj.name = tag
    tag_obj.data_tag = tag.tr(" ", "_")
    tag_obj.status = tag_list.include?(tag) ? "checked" : ""
    tag_data << tag_obj
  end
  tag_data
end
