require '../test_helper'

class EventTest < ActiveSupport::TestCase

  test "profane name" do
    event = Event.new
    event[:name] = "fuckthistest"

    assert_not event.save
  end
end
