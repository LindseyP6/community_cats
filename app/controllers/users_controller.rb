class UsersController < ApplicationController
    
    def index
        render json: User.all
    end

    def show
        user = User.find(params[:id])
        if user 
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
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
