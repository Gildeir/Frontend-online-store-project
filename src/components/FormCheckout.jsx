import React, { Component } from 'react';
import '../FormCheckout.css';

export default class FormCheckout extends Component {
  render() {
    return (
      <div>
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
          <form className="payment">
            <div>
              <p>Boleto</p>
              <input
                type="radio"
                name="paymentMethod"
              />
              Boleto
            </div>
            <div>
              <p>Cartão de crédito</p>
              <input
                type="radio"
                name="paymentMethod"
              />
              Visa
              <input
                type="radio"
                name="paymentMethod"
              />
              MasterCard
              <input
                type="radio"
                name="paymentMethod"
              />
              Elo
            </div>
          </form>
        </form>
      </div>
    );
  }
}
