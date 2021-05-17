import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    this.state = {
      product: [],
      categoryId: id,
    };
    this.productRender = this.productRender.bind(this);
  }

  componentDidMount() {
    this.productRender();
  }

  async productRender() {
    const { id } = this.props.match.params;
    const { product } = this.state;
    // const response = await fetch(`https://api.mercadolibre.com/items/${id}`)
    const response = await api.getProductsFromCategoryAndQuery(product, id)
    this.setState({
      product: response,
    });
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price, attributes } = product;
    // const {  } = attributes;

    return (
      <div>
        <p data-testid="product-detail-name">
          {`${title} - `}
          {`R$ ${price}`}
        </p>
          <img src={thumbnail} alt={ title } />
          {/* { console.log(attributes) } */}
          {/* { attributes[0][0].map((attribute) => (
            <ul key={ attribute.id }>
              <li>{ attribute }</li>
            </ul>
          )) } */}
        <button>
          <Link to="/shopping"></Link>
        </button>
      </div>
    );
  }
}
