import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FormCheckout from '../components/FormCheckout';

export default class Checkout extends Component {
  render() {
    const { location: { state } } = this.props;
    const { shopcart, totalSum } = state;

    return (
      <div>
        <h2>Resumo da Compra</h2>
        { shopcart.map(({ id, thumbnail, title, totalValue, count }) => (
          <div key={ id }>
            <img src={ thumbnail } alt={ title } className="item-img" />
            <p>{ title }</p>
            <p>{ `Quantidade: ${count}` }</p>
            <p>
              { `Preço R$:
              ${totalValue.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
            </p>
          </div>
        )) }
        <p>
          <strong>
            {
              `VALOR TOTAL DO PRODUTOS:
              R$ ${totalSum.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`
            }
          </strong>
        </p>
        <br />
        <FormCheckout />
        <button
          type="button"
        >
          <Link
            to="/"
          >
            COMPRAR
          </Link>
        </button>
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      shopcart: PropTypes.arrayOf(PropTypes.object).isRequired,
      totalSum: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
