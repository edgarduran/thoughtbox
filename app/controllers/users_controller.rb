class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to links_path
      flash[:success] = "#{@user.email} successfully created!"
    else
      redirect_to "/"
      flash[:notice] = 'Username and password required. Passwords must match.'
    end
  end


  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
