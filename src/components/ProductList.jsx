import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        { products.map((product) => (
          <div key={ product.id }>
            <ProductCard
              product={ product }
            />
          </div>
        )) }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
