import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormComents from '../components/FormComents';
import RenderComents from '../components/RenderComents';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComent: {},
      coments: [],
    };
  }

  handleComents = (newComents) => {
    const { coments, newComent } = this.state;
    if (coments.length !== 0) {
      this.handleAddComents(newComent);
    }
    this.setState({ newComent: newComents });
    // const {  } = this.state;
    this.setState({ coments: [newComent] });

    // console.log(coments)
  }

  handleAddComents = () => {
    this.setState(({ newComent }) => ({ coments: [...newComent] }));
  }

  render() {
    const { coments } = this.state;
    const { location: { state } } = this.props;
    const { product } = state;
    const { title, price, thumbnail } = product;
    return (
      <div>
        <div>
          <h3 data-testid="product-detail-name">{title}</h3>
          <img src={ thumbnail } alt={ title } />
          <h2>{`Preço: R$ ${price}`}</h2>
        </div>
        <button type="button">
          <Link to="/">
            Voltar
          </Link>
        </button>
        <FormComents handleComents={ this.handleComents } />
        <div>
          {coments.map((coment, id) => <RenderComents key={ id } coment={ coment } />)}
        </div>
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
