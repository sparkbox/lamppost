require_relative '../test_helper'

class EventTest < ActiveSupport::TestCase
  def setup
    @event = Event.new(name: 'Dayton Web Developers')
  end

  test 'event should be valid' do
    assert @event.valid?
  end

  test 'name should be present' do
    @event.name = " "
    assert_not @event.valid?
  end

  test 'name should be unique' do
    @event.save
    event2 = Event.new(name: 'Dayton Web Developers')

    assert_not event2.valid?
  end

  test 'name should not be too long' do
    @event.name = 'a' * 200
    assert_not @event.valid?
  end

  test 'name should not be too short' do
    @event.name = 'aaaaaa'
    assert_not @event.valid?
  end

  test "profane name" do
    event = Event.new
    event[:name] = "fuckthistest"

    assert_not event.save
  end
end
