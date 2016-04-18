class Api::V1::LinksController < Api::V1::ApiController
  respond_to :json

  def index
    respond_with = Link.all
  end

end
