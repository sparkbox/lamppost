require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "profane name" do
    event = Event.new
    event[:name] = "fuckthistest"

    assert_not event.save
  end
end
