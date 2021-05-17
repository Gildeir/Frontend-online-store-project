import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ElementsCard extends Component {
  // componentDidMount() {
  //   const { data } = this.props;
  //   const { id, title } = data;
  //   getProductsFromCategoryAndQuery(id, title)
  //     .then((response) => console.log(response));
  // }

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
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
};
