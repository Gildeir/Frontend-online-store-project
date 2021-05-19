import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

export default class FormComents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      mensagem: '',
      rating: 0,
      array: [],
    };
  }

  componentDidMount() {
    this.handleArray();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { handleComents } = this.props;
    handleComents(this.state);
  }

  handleChangeState = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  // Rating:
  // Fonte: https://javascript.plainenglish.io/how-to-build-a-star-rating-component-in-react-dad06b05679b

  handleArray = () => {
    const array = [];
    const number = 6;
    for (let i = 1; i < number; i += 1) {
      array.push(i);
    }
    this.setState({
      array,
    });
  }

  onSaveRating = (index) => {
    this.setState({
      rating: index,
    });
  };

  render() {
    const { rating, hoverRating, array } = this.state;
    return (
      <div>
        <form>
          <div className="stars-rating">
            { [...array].map((index) => (
              <Rating
                key={ index }
                index={ index }
                rating={ rating }
                hoverRating={ hoverRating }
                onMouseEnter={ this.onMouseEnter }
                onMouseLeave={ this.onMouseLeave }
                onSaveRating={ this.onSaveRating }
              />
            )) }
          </div>
          <label htmlFor="input-id">
            <input
              type="text"
              name="email"
              id="input-id"
              placeholder="Email"
              onChange={ this.handleChangeState }
            />
          </label>
          <textarea
            data-testid="product-detail-evaluation"
            name="mensagem"
            id="input-msg"
            placeholder="Mensagem"
            onChange={ this.handleChangeState }
          />
          <button type="button" onClick={ this.handleSubmit }>Avaliar</button>
        </form>
      </div>
    );
  }
}

FormComents.propTypes = {
  handleComents: PropTypes.func.isRequired,
};
