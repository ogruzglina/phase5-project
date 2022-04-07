class ChargersController < ApplicationController
    def index
        chargers = Charger.all
        render json: chargers, status: :ok
    end

    def show
        charger = find_charger
        render json: charger, status: :ok
    end

    def create
        charger = Charger.create!(charger_params)
        render json: charger, status: :created
    end

    def update
        charger = find_charger
        charger.update(charger_params)
        render json: charger, status: :ok
    end

    def destroy
        charger = find_charger
        charger.destroy
        head :no_content
    end

    private
    def find_charger
        charger.find(params[:id])
    end

    def charger_params
        params.permit(:)
    end
end
