import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    const { location: { state } } = this.props;
    const { cart } = state;

    this.state = {
      shopcart: cart,
      increaseButton: true,
    };
  }

  componentDidMount() {
    // this.restoreFromLocalStorage();
  }

  // restoreFromLocalStorage = () => {
  //   let localStorageShopcart = localStorage.getItem('shopcart');
  //   if (localStorageShopcart) {
  //     localStorageShopcart = JSON.parse(localStorageShopcart);
  //     this.setState({
  //       shopcart: localStorageShopcart,
  //     });
  //   }
  // }

  handleIncrease = (id) => {
    const { location: { state } } = this.props;
    const { cart } = state;

    const productCart = cart;
    const findProduct = productCart.find((data) => data.id === id);
    const key = productCart.indexOf(findProduct);
    productCart[key].count += 1;
    productCart[key].totalValue = Math.round((productCart[key].count
    * productCart[key].price) * 100) / 100;
    this.setState({
      shopcart: productCart,
    });
    // localStorage.setItem('shopcart', JSON.stringify(productCart));
  }

  handleDecrease = (id) => {
    const { location: { state } } = this.props;
    const { cart } = state;

    const productCart = cart;
    const findProduct = productCart.find((data) => data.id === id);
    const key = productCart.indexOf(findProduct);
    if (productCart[key].count > 1) {
      productCart[key].count -= 1;
      productCart[key].totalValue = Math.round((productCart[key].count
      * productCart[key].price) * 100) / 100;
      this.setState({
        shopcart: productCart,
      });
      // localStorage.setItem('shopcart', JSON.stringify(productCart));
    }
  }

  handleRemove = (id) => {
    const { shopcart } = this.state;

    const updatedCart = shopcart.filter((Cart) => Cart.id !== id);
    this.setState({
      shopcart: updatedCart,
    });
    // localStorage.setItem('shopcart', JSON.stringify(updatedCart));
  }

  render() {
    const { shopcart } = this.state;
    const { available_quantity } = shopcart
    const quant = document.querySelector('#quantity');
    const btn = document.querySelector('#increase');

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
        { shopcart.map(({ title, count, id, price, totalValue, available_quantity }) => (
          <div key={ id }>
            <div>
              <h4 data-testid="shopping-cart-product-name">{ title }</h4>
              <p id="quantity" data-testid="shopping-cart-product-quantity">
                Quantidade:
                { count }
              </p>
              <p>
                Preço R$:
                { price }
              </p>
              <p>
                Total R$:
                { (totalValue === 0) ? price : totalValue }
              </p>
              <button
                id="increase"
                type="button"
                value={ id }
                onClick={ () => this.handleIncrease(id) }
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
        >
          <Link
            to={ { pathname: '/checkout', state: { shopcart } } }
            data-testid="checkout-products"
          >
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
