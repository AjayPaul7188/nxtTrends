import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalOrderPrice = cartList.reduce(
        (total, currentVal) => total + currentVal.price * currentVal.quantity,
        0,
      )

      return (
        <div className="cart-summary">
          <h1 className="all-orders-price">
            Order Total:{' '}
            <span className="total-orders-price">Rs {totalOrderPrice}/-</span>
            <p className="items-count">{cartList.length} Items in cart</p>
            <button className="check-out-btn" type="button">
              Checkout
            </button>
          </h1>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
