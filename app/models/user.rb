class User < ApplicationRecord
    has_secure_password
    
    has_many :reviews, dependent: :destroy
    has_many :chargers, through: :reviews

    has_many :prices, dependent: :destroy
    has_many :chargers, through: :prices

    validates :username, presence: true, uniqueness: true
    validates :email, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    # validates :password, presence: true, uniqueness: true, confirmation: true, length: { in: 6..8 }

end
