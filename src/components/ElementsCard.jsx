import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ElementsCard extends Component {
  render() {
    const { data } = this.props;
    const { title, count } = data;

    return (
      <div>
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          { count }
        </p>
      </div>
    );
  }
}

ElementsCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
};
