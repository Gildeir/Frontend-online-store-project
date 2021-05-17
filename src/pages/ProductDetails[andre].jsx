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
    const { id } = this.props.match.params;
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`)
    const jsx = await response.json()
    this.setState({
      product: jsx,
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
          { attributes.map((attribute) => (
            <ul key={ attribute.id }>
              <li>{ attribute }</li>
            </ul>
          )) }
        { console.log(attributes) }
        <button>
          <Link to="/shopping"></Link>
        </button>
      </div>
    );
  }
}
