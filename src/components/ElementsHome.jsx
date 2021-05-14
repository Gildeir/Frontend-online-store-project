import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ElementsHome extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
        />
        <button type="button">
          <Link to="/" data-testid="shopping-cart-button">
            <img src="https://www.freeiconspng.com/uploads/grocery-cart-icon-14.png" alt="cart icon" height="25px" />
          </Link>
        </button>
      </div>
    );
  }
}
