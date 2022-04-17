class Charger < ApplicationRecord
    belongs_to :user

    has_many :reviews, dependent: :destroy
    # has_many :users, through: :reviews

    # has_many :prices, dependent: :destroy
    # has_many :users, through: :prices

    validates :charger_type, :hours, :address, :cost, :fee, :latitude, :longitude, :user_id, presence: true
    validates :status, exclusion: [nil] 

end
