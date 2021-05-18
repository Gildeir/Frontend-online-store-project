import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ElementsCard from '../components/ElementsCard';

export default class ShoppingCart extends Component {
  render() {
    const { location: { state } } = this.props;
    const { cart } = state;

    if (!cart.length) {
      return (
        <div>
          <h3>Carrinho de Compras</h3>
          <h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h4>
          <button type="button">
            <Link to="/">
              Voltar
            </Link>
          </button>
        </div>
      );
    }
    return (
      <div>
        <h3>Carrinho de Compras</h3>
        { cart.map((Cart) => (
          <div key={ Cart.id }>
            <ElementsCard
              data={ Cart }
            />
          </div>
        ))}
        <button type="button">
          <Link to="/">
            Voltar
          </Link>
        </button>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};
