import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  render() {
    const { products, handleClickAddCart, cart } = this.props;
    return (
      <div className="items">
        { products.map((product) => (
          <div key={ product.id }>
            <ProductCard
              product={ product }
              cart={ cart }
            />
            <button
              type="button"
              value={ product.id }
              onClick={ () => handleClickAddCart(product) }
              data-testid="product-add-to-cart"
            >
              Adicionar
            </button>
            <button type="button">
              <Link
                data-testid="product-detail-link"
                to={ { pathname: `/details/${product.id}`, state: { product } } }
              >
                Ver Detalhes
              </Link>
            </button>
          </div>
        )) }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClickAddCart: PropTypes.func.isRequired,
};
