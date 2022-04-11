class CatsController < ApplicationController
    skip_before_action :authorized_user

    def index
        render json: Cat.all
    end

    def show
        cat = Cat.find(params[:id])
        render json: cat
    end

    def create
        cat = Cat.create!(cat_params)
        render json: cat, status: :created
    end

    def update
        cat = Cat.find(params[:id])
        cat.update!(cat_params)
        render json: cat, status: :accepted
    end

    def destroy
        cat = Cat.find(params[:id])
        cat.destroy
        head :no_content
    end

    private

    def cat_params
        params.permit(:name, :image, :gender, :description, :temperament, :tnr_status, :tnr_date, :trap_date, :special_notes, :user_id)
        # :latitude, :longitude,
    end

end
