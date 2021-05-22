import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, shipping } = product;

    if (shipping.free_shipping) {
      return (
        <div data-testid="product" className="item">
          <h3>{ title }</h3>
          <p data-testid="free-shipping">Produto com frete grátis</p>
          <img src={ thumbnail } alt={ title } className="item-img" />
          <p>{ `R$${price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}` }</p>
        </div>
      );
    }

    return (
      <div data-testid="product" className="item">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } className="item-img" />
        <p>{ `R$${price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}` }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }).isRequired,
  }).isRequired,
};
