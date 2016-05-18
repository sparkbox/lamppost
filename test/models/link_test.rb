require_relative '../test_helper'

class LinkTest < ActiveSupport::TestCase
  test "no title" do
    link = Link.new
    link[:url] = "google.com"

    assert_not link.save
  end
  test "no url" do
    link = Link.new
    link[:title] = "google.com"

    assert_not link.save
  end
end
