import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories()
      .then((response) => this.setState({ categories: response }));
  }

  render() {
    const { handleClick } = this.props;
    const { categories } = this.state;
    return (
      <div>
        <ul>
          {categories
            .map((cat) => (
              <li
                data-testid="category"
                key={ cat.id }
              >
                <input
                  onClick={ handleClick }
                  value={ cat.name }
                  id={ cat.id }
                  type="button"
                />
              </li>))}
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {
  handleClick: PropTypes.func,
}.isRequired;
