import React from 'react';

function CartItem({ item, removeFromCart }) {
  return (
    <li className="cart-item">
      <div>
        <span>{item.name}</span>
        <span>Price: ${item.price}</span>
        <span>Quantity: {item.quantity}</span>
      </div>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </li>
  );
}

export default CartItem;