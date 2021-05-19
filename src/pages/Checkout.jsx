import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Checkout extends Component {
  render() {
    const { location: { state } } = this.props;
    const { shopcart } = state;

    return (
      <div>
        { shopcart.map(({ id, thumbnail, title, price }) => (
        <div key={ id }>
          <img src={ thumbnail } alt={ title }/>
          <p>{ title }</p>
          <p>{ `R$: ${ price }` }</p>
        </div>
        )) }
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
            type="number"
            placeholder="CPF"
            data-testid="checkout-cpf"
          />
          <input
            type="number"
            placeholder="Telefone"
            data-testid="checkout-phone"
          />
          <input
            type="number"
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
            />Boleto
            <input 
              type="radio" 
              name="cartao"
            />Visa
            <input
              type="radio" 
              name="cartao"
            />MasterCard
            <input 
              type="radio" 
              name="cartao"
            />Elo
          </form>
        </form>
        <button>
          <Link to="/">COMPRAR
          </Link>
        </button>
      </div>
    );
  }
}
