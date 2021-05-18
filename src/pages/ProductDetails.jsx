import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductDetails extends Component {
  render() {
    const { location: { state } } = this.props;
    const { product, cart } = state;
    const { title, price, thumbnail } = product;
    const { handleClickAddCart } = this.props;
    
    return (
      <div>
        <div>
          <h3 data-testid="product-detail-name">{title}</h3>
          <img src={ thumbnail } alt={ title } />
          <h2>{`Preço: R$ ${price}`}</h2>
        </div>
        <button type="button">
          <Link
            to={ { pathname: '/shoppingcart', state: { cart } } }
            data-testid="product-detail-add-to-cart"
            onClick={ () => handleClickAddCart(product) }
          >
            <p>ADICIONAR AO CARRINHO</p>
          </Link>
        </button>
        <button type="button">
          <Link to="/">
            Voltar
          </Link>
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
