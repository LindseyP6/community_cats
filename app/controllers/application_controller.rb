class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  # before_action :authorize
  
  def current_user
    User.find_by(id:session[:user_id])
  end 

  def authorize
    return render json: {error: "Not Authorized"}, status: :unauthorized unless current_user
  end

  private

  def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end 

  def render_not_found(error)
      render json: {error: "#{error.model} Not Found"}, status: :not_found
  end 
end
