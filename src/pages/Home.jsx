import React, { Component } from 'react';
import ElementsHome from '../components/ElementsHome';
import Categories from '../components/Categories';
import * as api from '../services/api';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
      products: [],
      category: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  componentDidUpdate() {
    const { category } = this.state;
    if (category) {
      this.handleClick();
    }
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      searchField: value,
    });
  }

  handleChangeCategory({ target: { id } }) {
    this.setState({
      category: id,
    });
  }

  async handleClick() {
    const { searchField, category } = this.state;
    const response = await api.getProductsFromCategoryAndQuery(category, searchField);
    this.setState({
      products: response.results,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Categories handleClick={ this.handleChangeCategory } />
        <ElementsHome
          products={ products }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
