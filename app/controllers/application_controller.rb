class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :redirect_subdomain
  
  def redirect_subdomain
    if request.host == "www.#{request.domain(2)}"
      redirect_to "https://#{request.domain + request.fullpath}"
    end
    p "Domain: #{request.domain(2)}"
    p "Host: #{request.host}"
  end

end
