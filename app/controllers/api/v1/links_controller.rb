class Api::V1::LinksController < ApplicationController
  respond_to :json

  def index
    respond_with Link.all
  end

  def update

  end

  def create

  end


end
