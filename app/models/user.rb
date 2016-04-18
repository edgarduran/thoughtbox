class User < ActiveRecord::Base
  validates :email, presence: true,
                    uniqueness: true
  has_secure_password
  validates :password_digest, presence: true
  validates_confirmation_of :password
  has_many :links
end
