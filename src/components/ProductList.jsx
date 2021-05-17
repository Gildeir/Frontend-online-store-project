import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  render() {
    const { products, handleClickAddCart } = this.props;
    return (
      <div>
        { products.map((product) => (
          <div key={ product.id }>
            <ProductCard
              product={ product }
            />
            <button
              type="button"
              value={ product.id }
              onClick={ () => handleClickAddCart(product) }
              data-testid="product-add-to-cart"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        )) }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClickAddCart: PropTypes.func.isRequired,
};
