import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';

export default class ElementsHome extends Component {
  render() {
    const { products, handleChange, handleClick } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ handleClick }
        >
          PESQUISAR
        </button>
        <button type="button">
          <Link to="/shoppingcart" data-testid="shopping-cart-button">
            <img src="https://www.freeiconspng.com/uploads/grocery-cart-icon-14.png" alt="cart icon" height="25px" />
          </Link>
          <ProductList products={ products } />
        </button>
      </div>
    );
  }
}

ElementsHome.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
}.isRequired;
