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
  }


handleChange = ({ target: { value } }) => {
  this.setState({
    searchField: value,
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
      <ElementsHome
        products={ products }
        handleChange={ this.handleChange }
        handleClick={ this.handleClick }
      />
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    <Categories />
    </div>
  );
}
