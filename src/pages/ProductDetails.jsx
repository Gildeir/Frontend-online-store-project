import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      product: [],
      categoryId: '',
    };
    this.productRender = this.productRender.bind(this);
  }

  componentDidMount() {
    this.productRender();
  }

  async productRender() {
    const { categoryId }  = this.state;
    const { id } = this.props.match.params;
    const response = await api.getProductsFromCategoryAndQuery(categoryId, id);
    this.setState({
      product: response,
    });
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price, attributes } = product;

    return (
      <div>
        <p data-testid="product-detail-name">
          {`${title} - `}
          {`R$ ${price}`}
        </p>
        <span>
          <img src={thumbnail} alt={ title } />
          {attributes}
        </span>
        <button>
          <Link to="/shopping"></Link>
        </button>
      </div>
    );
  }
}
