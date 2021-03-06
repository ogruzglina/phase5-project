class ChargersController < ApplicationController
    def index
        chargers = Charger.all
        render json: chargers, status: :ok
    end

    def show
        charger = find_charger
        render json: charger.reviews.order('created_at desc'), status: :ok
    end

    def show_user_chargers
        userChargers = Charger.where("user_id = #{params[:user_id]}")
        render json: userChargers
    end

    def create
        charger = Charger.create!(charger_params)
        render json: charger, status: :created
    end

    def update
        charger = find_charger
        charger.update!(charger_params)
        render json: charger, status: :ok
    end

    def destroy
        charger = find_charger
        charger.destroy
        head :no_content
    end

    private
    def find_charger
        Charger.find(params[:id])
    end

    def charger_params
        params.permit(:charger_type, :hours, :address, :status, :cost, :fee, :latitude, :longitude, :user_id, :created_at)
    end
end
