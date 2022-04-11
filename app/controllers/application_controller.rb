class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized_user
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  # def current_user
  #   User.find_by(id:session[:current_user])
  # end 

  def authorized_user
    return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end 

  private

  def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end 

  def render_not_found(error)
      render json: {error: "#{error.model} Not Found"}, status: :not_found
  end 
end
