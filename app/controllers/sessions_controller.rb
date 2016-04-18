class SessionsController < ApplicationController

  def create
    @user = User.find_by(email: params[:session][:email])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      redirect_to links_path
      flash[:success] = "#{@user.email} successfully logged in!"
    else
      redirect_to "/"
      flash[:notice] = "Invalid Login"
    end
  end

  def destroy
    session.clear
    flash[:notice] = "Thanks for visiting"
    redirect_to "/"
  end
end
