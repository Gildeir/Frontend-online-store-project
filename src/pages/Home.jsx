import React, { Component } from 'react';
import ElementsHome from '../components/ElementsHome';
import Categories from '../components/Categories';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // const { categories } = this.state;
    return (
      <div>
        <ElementsHome />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categories />
      </div>
    );
  }
}
