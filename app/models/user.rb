class User < ActiveRecord::Base
  validates :email, presence: true
  has_secure_password
  validates :password_digest, presence: true
  validates_confirmation_of :password
end
