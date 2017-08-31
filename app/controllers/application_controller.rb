class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  unless Rails.application.config.consider_all_requests_local
    rescue_from ActionController::RoutingError, with: -> { not_found }
    rescue_from ActiveRecord::RecordNotFound, with: -> { not_found }
  end

  def not_found
    render file: 'public/404.html', status: :not_found, layout: false
  end

end
