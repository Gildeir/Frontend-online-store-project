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
      cart: [],
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

  handleClickAddCart = (product) => {
    const { cart } = this.state;
    const haveCart = cart.length;
    if (!haveCart) {
      const { id, title } = product;
      const productCart = [{ id, title, count: 1 }];
      this.setState({
        cart: productCart,
      });
    } else {
      let productCart = cart;
      const findProduct = productCart.find((data) => data.id === product.id);
      if (findProduct) {
        const key = productCart.indexOf(findProduct);
        productCart[key].count += 1;
        this.setState({
          cart: productCart,
        });
      } else {
        const { id, title } = product;
        productCart = [...productCart, { id, title, count: 1 }];
        this.setState({
          cart: productCart,
        });
      }
    }
  }

  render() {
    const { products, cart } = this.state;
    return (
      <div>
        <Categories handleClick={ this.handleChangeCategory } />
        <ElementsHome
          products={ products }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
          handleClickAddCart={ this.handleClickAddCart }
          cart={ cart }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
