import React from 'react';
import "./cart.css";

const Cart = ({ cartItems }) => {

  console.log(cartItems);
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="cart3">
        <div className="container grid">       
          <h2>Cart is Empty</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="container grid grid2">
        <h2>Cart</h2>
        <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>{`₹${item.price}`}</p>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart
