import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

RenderComents.propTypes = {
  coment: PropTypes.shape({
    email: PropTypes.string,
    mensagem: PropTypes.string,
  }).isRequired,
};
