import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    // this.handleCategories();
    getCategories()
      .then((response) => this.setState({ categories: response }));
  }

  //   handleCategories = () => {
  //     // console.log(getCategories());
  //   }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          {categories.map((cat) => <li key={ cat.id }>{cat.name}</li>)}
        </ul>
      </div>
    );
  }
}
