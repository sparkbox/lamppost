require_relative '../test_helper'
require 'capybara/poltergeist'

class JSTest < ActionDispatch::IntegrationTest

  setup do
    Capybara.javascript_driver = :poltergeist
    Capybara.current_driver = Capybara.javascript_driver
  end

  # test 'page should have content' do
  #   visit '/events'
  #   assert page.has_selector?('main')
  # end

end
