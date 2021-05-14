import React, { Component } from 'react'
import ElementsHome from '../components/ElementsHome';

export default class Home extends Component {
constructor(props) {
  super(props)

  this.state = {}
}
  
  render() {
    return (
      <div>
        <ElementsHome />
        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    )
  }
}
