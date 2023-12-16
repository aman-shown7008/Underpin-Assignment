import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
        <div>
          <h2 className='head2'>jello</h2>
        </div>
        <div className="cart">
          <h3 className='head3'><i class='bx bxs-cart'></i><Link to={'/cart'}>Cart</Link></h3>
      </div>
    </header>
  )
}

export default Header;