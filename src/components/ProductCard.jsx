import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price, shipping } = product;

    if (shipping.free_shipping) {
      return (
        <div data-testid="product">
          <h3>{ title }</h3>
          <p data-testid="free-shipping">Produto com frete grátis</p>
          <img src={ thumbnail } alt={ title } />
          <p>{ `R$${price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}` }</p>
          <button type="button">
            <Link
              data-testid="product-detail-link"
              to={ { pathname: `/details/${id}`, state: { product } } }
            >
              Ver Detalhes
            </Link>
          </button>
        </div>
      );
    }

    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$${price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}` }</p>
        <button type="button">
          <Link
            data-testid="product-detail-link"
            to={ { pathname: `/details/${id}`, state: { product } } }
          >
            Ver Detalhes
          </Link>
        </button>
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
