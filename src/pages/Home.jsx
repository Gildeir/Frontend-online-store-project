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
      foo: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  componentDidUpdate() {
    const { searchField, category, foo } = this.state;
    if (foo === false) {
      api.getProductsFromCategoryAndQuery(category, searchField).then((response) => {
        this.setState({
          products: response.results,
          foo: true,
        });
      });
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
      foo: false,
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
