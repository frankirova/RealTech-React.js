import React from 'react'

const CartWidget = () => {
  return (
    <button className='cart-widget btn btn-success mx-2 my-auto d-flex justify-content-center align-items-center'>
        <i class="fa-sharp fa-solid fa-cart-shopping p-1"></i>
        <span>0</span>
    </button>
  )
}

export default CartWidget