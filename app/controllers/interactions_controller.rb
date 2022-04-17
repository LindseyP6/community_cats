class InteractionsController < ApplicationController

    def index
        render json: Interaction.all
    end

    def show
        interaction = Interaction.find(params[:id])
        render json: interaction
    end

    def create
        interaction = Interaction.create!(interaction_params)
        render json: interaction, status: :created
    end

    def update
        interaction = Interaction.find(params[:id])
        interaction.update!(interaction_params)
        render json: interaction, status: :accepted
    end

    def destroy
        interaction = Interaction.find(params[:id])
        interaction.destroy
        head :no_content
    end

    private

    def interaction_params
        params.permit(:comment, :user_id, :cat_id)
    end
end
