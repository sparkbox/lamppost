class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  http_basic_authenticate_with name: ENV["DEV_USER_NAME"], password: ENV["DEV_PASSWORD"] if Rails.env.production?
end
