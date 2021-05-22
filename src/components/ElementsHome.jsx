import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';

export default class ElementsHome extends Component {
  render() {
    const { products, handleChange, handleClick, handleClickAddCart, cart } = this.props;
    return (
      <div className="container">
        <input
          className="inputSearch"
          type="text"
          data-testid="query-input"
          onChange={ handleChange }
        />
        <button
          className="buttonSearch"
          type="button"
          data-testid="query-button"
          onClick={ handleClick }
        >
          <img src="https://www.freeiconspng.com/uploads/search-icon-png-15.png" alt="cart icon" height="25px" />
        </button>
        <button type="button">
          <Link
            to={ { pathname: '/shoppingcart', state: { cart } } }
            data-testid="shopping-cart-button"
          >
            <img src="https://www.freeiconspng.com/uploads/grocery-cart-icon-14.png" alt="cart icon" height="25px" />
          </Link>
        </button>
        <ProductList
          products={ products }
          handleClickAddCart={ handleClickAddCart }
          cart={ cart }
        />
      </div>
    );
  }
}

ElementsHome.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  handleClickAddCart: PropTypes.func,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
}.isRequired;
