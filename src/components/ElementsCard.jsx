import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ElementsCard extends Component {
  render() {
    const { data, handlePlus, handleDecrease, handleRemove } = this.props;
    const { id, title, count } = data;

    return (
      <div>
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          { count }
        </p>
        <button
          type="button"
          value={ id }
          onClick={ () => handlePlus(id) }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          type="button"
          value={ id }
          onClick={ () => handleDecrease(id) }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <button
          type="button"
          value={ id }
          onClick={ () => handleRemove(id) }
        >
          X
        </button>
      </div>
    );
  }
}

ElementsCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  handlePlus: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};
