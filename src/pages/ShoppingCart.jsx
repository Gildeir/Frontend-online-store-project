import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    const { location: { state } } = this.props;
    const { cart } = state;

    this.state = {
      quantity: 0,
      shopcart: cart,
    };
  }

  handlePlus = (id) => {
    const { location: { state } } = this.props;
    const { cart } = state;

    const productCart = cart;
    const findProduct = productCart.find((data) => data.id === id);
    const key = productCart.indexOf(findProduct);
    productCart[key].count += 1;
    this.setState({
      quantity: productCart[key].count,
    });
    this.usingQuantity();
  }

  handleDecrease = (id) => {
    const { location: { state } } = this.props;
    const { cart } = state;

    const productCart = cart;
    const findProduct = productCart.find((data) => data.id === id);
    const key = productCart.indexOf(findProduct);
    if (productCart[key].count > 1) {
      productCart[key].count -= 1;
      this.setState({
        quantity: productCart[key].count,
      });
      this.usingQuantity();
    }
  }

  handleRemove = (id) => {
    const { shopcart } = this.state;

    const updatedCart = shopcart.filter((Cart) => Cart.id !== id);
    this.setState({
      shopcart: updatedCart,
    });
  }

  updatedShopCartValue = (id, newValue) => {
    const { shopcart } = this.state;

    const productCart = shopcart;
    const findProduct = productCart.find((data) => data.id === id);
    const key = productCart.indexOf(findProduct);
    productCart[key].totalValue = newValue;
    this.setState({
      totalValue: productCart[key].totalValue,
    });
  }

  usingQuantity = () => {
    const { quantity } = this.state;
    const quantityState = quantity;
    console.log(quantityState);
  }

  render() {
    const { shopcart } = this.state;

    if (!shopcart.length) {
      return (
        <div>
          <h3>Carrinho de Compras</h3>
          <h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h4>
          <button type="button">
            <Link to="/">
              Voltar
            </Link>
          </button>
        </div>
      );
    }
    return (
      <div>
        <h3>Carrinho de Compras</h3>
        { shopcart.map(({ title, count, id, price }) => (
          <div key={ id }>
            <div>
              <h4 data-testid="shopping-cart-product-name">{ title }</h4>
              <p data-testid="shopping-cart-product-quantity">
                Quantidade:
                { count }
              </p>
              <p>
                Valor Unit:
                { price }
              </p>
              <p>
                Valor Total:
                { Math.round((count * price) * 100) / 100 }
                { this.updatedShopCartValue(id, Math.round((count * price) * 100) / 100 ) }
                { console.log(this.updatedShopCartValue()) }
              </p>
              <button
                type="button"
                value={ id }
                onClick={ () => this.handlePlus(id) }
                data-testid="product-increase-quantity"
              >
                +
              </button>
              <button
                type="button"
                value={ id }
                onClick={ () => this.handleDecrease(id) }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <button
                type="button"
                value={ id }
                onClick={ () => this.handleRemove(id) }
              >
                X
              </button>
            </div>
          </div>
        ))}
        <button type="button">
          <Link to="/">
            Voltar
          </Link>
        </button>
        <button 
          type="button" 
          data-testid="checkout-products"
        >
          <Link to={ { pathname: '/checkout', state: { shopcart } } }>
            Finalizar a compra
          </Link>
        </button>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};
