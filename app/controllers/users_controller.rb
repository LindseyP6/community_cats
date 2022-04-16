class UsersController < ApplicationController
    # skip_before_action :authorized_user, only: :create, :show
    
    def index
        users = User.all
        render json: users
    end

    # def me
    #     current_user = User.find(session[:user_id])
    #     render json: current_user, status: :ok
    # end 

    def me
        render json: current_user, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, serializer:UserProfileSerializer
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:name, :email, :location, :password, :password_digest)
    end

end
