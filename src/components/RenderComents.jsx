import React, { Component } from 'react';

export default class RenderComents extends Component {
  render() {
    const { coment: { email, mensagem } } = this.props;
    return (
      <div>
        <p>{ email }</p>
        <p>{ mensagem }</p>
      </div>
    );
  }
}
