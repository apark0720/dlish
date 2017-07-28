class Api::OrdersController < ApplicationController
  def create
    @order = Order.create(order_params)

    if @order.save
      render :show
    end
  end

  def show
    @order = Order.find(params[:id])

    render :show
  end

  private

  def order_params
    params.require(:order).permit(:user_id, :recipe_id, :address)
  end
end
