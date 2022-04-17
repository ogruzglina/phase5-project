class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        user = find_user
        render json: user.chargers, status: :ok
    end

    def profile
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end

    # def create
    #     user = User.create!(user_params)
    #     render json: user, status: :created
    # end


    def create
        @user = User.create(user_params)
        if @user.valid?
            @token = encode_token(user_id: @user.id)
            render json: {
                user: UserSerializer.new(@user),
                jwt: @token,
            },
            status: :created
        else
            render json: {
                error: 'failed to create user',
            },
            status: :unprocessable_entity
        end
    end
    



    def update
        user = find_user
        user.update!(user_params)
        render json: user, status: :ok
    end

    def destroy
        user = find_user
        user.destroy
        head :no_content
    end

    private
    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :password_confirmation, :avatar, :email)
    end
end
