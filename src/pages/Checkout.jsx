import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Checkout extends Component {

  render() {
    const { location: { state } } = this.props;
    const { shopcart, totalSum } = state;

    return (
      <div>
        <h2>Resumo da Compra</h2>
        { shopcart.map(({ id, thumbnail, title, totalValue, count }) => (
          <div key={ id }>
            <img src={ thumbnail } alt={ title } />
            <p>{ title }</p>
            <p>{ `Quantidade: ${count}` }</p>
            <p>{ `Preço R$: ${totalValue}` }</p>
          </div>
        )) }
        <p>
          <strong>
            { `VALOR TOTAL DO PRODUTOS: R$ ${totalSum}` }
          </strong>
        </p>
        <br />
        <h2>Informações do comprador</h2>
        <form>
          <input
            type="text"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
          />
          <input
            type="email"
            placeholder="E-mail"
            data-testid="checkout-email"
          />
          <input
            type="text"
            placeholder="CPF"
            data-testid="checkout-cpf"
          />
          <input
            type="text"
            placeholder="Telefone"
            data-testid="checkout-phone"
          />
          <input
            type="text"
            placeholder="CEP"
            data-testid="checkout-cep"
          />
          <input
            type="text"
            placeholder="Endereço"
            data-testid="checkout-address"
          />
          <form>
            <p>Boleto</p>
            <input
              type="radio"
              name="boleto"
            />
            Boleto
            <input
              type="radio"
              name="cartao"
            />
            Visa
            <input
              type="radio"
              name="cartao"
            />
            MasterCard
            <input
              type="radio"
              name="cartao"
            />
            Elo
          </form>
        </form>
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
      totalSum: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};
