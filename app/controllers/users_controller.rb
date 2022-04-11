class UsersController < ApplicationController
    # skip_before_action :authorized_user, only: :create, :show
    
    def index
        render json: User.all
    end

    def show
        current_user = User.find(session[:user_id])
        render json: current_user
    end 

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:name, :email, :location, :password)
    end

end
