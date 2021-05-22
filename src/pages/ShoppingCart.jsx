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
      totalSum: 0,
    };
  }

  componentDidMount() {
    this.restoreFromLocalStorage();
    this.totalSumProducts();
  }

  restoreFromLocalStorage = () => {
    let localStorageShopcart = localStorage.getItem('shopcart');
    if (localStorageShopcart) {
      localStorageShopcart = JSON.parse(localStorageShopcart);
      this.setState({
        shopcart: localStorageShopcart,
      });
    }
  }

  totalSumProducts = () => {
    const { shopcart } = this.state;
    const val = shopcart.reduce((acc, value) => acc + value.totalValue, 0);
    this.setState({
      totalSum: val,
    });
  }

  handleIncrease = (id) => {
    const { shopcart } = this.state;

    const productCart = shopcart;
    const findProduct = productCart.find((data) => data.id === id);
    const key = productCart.indexOf(findProduct);
    productCart[key].count += 1;
    productCart[key].totalValue = Math.round((productCart[key].count
    * productCart[key].price) * 100) / 100;
    this.setState({
      shopcart: productCart,
    });
    this.totalSumProducts();
    localStorage.setItem('shopcart', JSON.stringify(productCart));
  }

  handleDecrease = (id) => {
    const { shopcart } = this.state;

    const productCart = shopcart;
    const findProduct = productCart.find((data) => data.id === id);
    const key = productCart.indexOf(findProduct);
    if (productCart[key].count > 1) {
      productCart[key].count -= 1;
      productCart[key].totalValue = Math.round((productCart[key].count
      * productCart[key].price) * 100) / 100;
      this.setState({
        shopcart: productCart,
      });
      this.totalSumProducts();
      localStorage.setItem('shopcart', JSON.stringify(productCart));
    }
  }

  handleRemove = (id) => {
    const { shopcart } = this.state;

    const updatedCart = shopcart.filter((Cart) => Cart.id !== id);
    this.setState({
      shopcart: updatedCart,
    });
    this.totalSumProducts();
    localStorage.setItem('shopcart', JSON.stringify(updatedCart));
  }

  clearProducts = () => {
    const updatedCart = [];
    this.setState({
      shopcart: updatedCart,
    });
    localStorage.setItem('shopcart', JSON.stringify(updatedCart));
  }

  render() {
    const { shopcart, totalSum } = this.state;

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
        { shopcart.map(({ title, count, id, price, totalValue, availableQuantity }) => (
          <div key={ id }>
            <div className="item">
              <h4 data-testid="shopping-cart-product-name">{ title }</h4>
              <div className="centerCart">
                <p data-testid="shopping-cart-product-quantity">
                  Quantidade:
                  { count }
                </p>
                <p>
                  Preço R$:
                  { price.toLocaleString('pt-br', { minimumFractionDigits: 2 }) }
                </p>
                <p>
                  <strong>
                    Total R$:
                    {
                      (totalValue === 0)
                        ? price : totalValue
                          .toLocaleString('pt-br', { minimumFractionDigits: 2 })
                    }
                  </strong>
                </p>
              </div>
              <div className="bottomCart">
                <button
                  id="increase"
                  disabled={ count >= availableQuantity }
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
          </div>
        ))}
        <button type="button">
          <Link to="/">
            Voltar
          </Link>
        </button>
        <button
          type="button"
          onClick={ this.clearProducts }
        >
          Limpar Produtos
        </button>
        <button
          type="button"
        >
          <Link
            to={ { pathname: '/checkout', state: { shopcart, totalSum } } }
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
