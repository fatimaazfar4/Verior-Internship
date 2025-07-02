import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 && <p>No items in cart</p>}
      {items.map(item => (
        <div key={item.id}>
          {item.name} x {item.quantity} (${item.price * item.quantity}){' '}
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
