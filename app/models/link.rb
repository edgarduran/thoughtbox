require 'uri'
class Link < ActiveRecord::Base
  belongs_to :user
  default_scope -> { order(id: :desc) }

  validates :url, :format => URI::regexp(%w(http https))
end
