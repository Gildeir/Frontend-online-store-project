import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormComents from '../components/FormComents';
import RenderComents from '../components/RenderComents';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComent: {},
      coments: [],
      cart: [],
    };
  }

  componentDidMount() {
    this.restoreFromLocalStorage();
  }

  // Comments:
  handleComents = (newComents) => {
    this.setState({ newComent: newComents });
    this.handleAddComents();
    const { coments } = this.state;
    localStorage.setItem('Coments', { coments });
  }

  handleAddComents = () => {
    this.setState(({ newComent, coments }) => ({ coments: [...coments, newComent] }));
  }

  restoreFromLocalStorage = () => {
    let localStorageShopcart = localStorage.getItem('shopcart');
    if (localStorageShopcart) {
      localStorageShopcart = JSON.parse(localStorageShopcart);
      this.setState({
        cart: localStorageShopcart,
      });
    }
  }

  // Add product to cart:
  handleClickAddCart2 = (product) => {
    const { cart } = this.state;
    const haveCart = cart.length;
    if (!haveCart) {
      const { id, title, price, thumbnail } = product;
      const availableQuantity = product.available_quantity;
      const productCart = [
        { id, title, price, thumbnail, availableQuantity, count: 1, totalValue: price },
      ];
      this.setState({
        cart: productCart,
      });
      localStorage.setItem('shopcart', JSON.stringify(productCart));
    } else {
      let productCart = cart;
      const findProduct = productCart.find((data) => data.id === product.id);
      if (findProduct) {
        const key = productCart.indexOf(findProduct);
        productCart[key].count += 1;
        productCart[key].totalValue = Math.round((productCart[key].count
          * productCart[key].price) * 100) / 100;
        this.setState({
          cart: productCart,
        });
        localStorage.setItem('shopcart', JSON.stringify(productCart));
      } else {
        const { id, title, price, thumbnail } = product;
        const availableQuantity = product.available_quantity;
        productCart = [...productCart,
          { id, title, price, thumbnail, availableQuantity, count: 1, totalValue: price },
        ];
        this.setState({
          cart: productCart,
        });
        localStorage.setItem('shopcart', JSON.stringify(productCart));
      }
    }
  }

  render() {
    const { coments } = this.state;
    const { location: { state } } = this.props;
    const { product } = state;
    const { title, price, thumbnail } = product;
    const { cart } = this.state;

    return (
      <div>
        <div>
          <button type="button">
            <Link
              to={ { pathname: '/shoppingcart', state: { cart } } }
              data-testid="shopping-cart-button"
            >
              <img src="https://www.freeiconspng.com/uploads/grocery-cart-icon-14.png" alt="cart icon" height="25px" />
            </Link>
          </button>
          <h3 data-testid="product-detail-name">{title}</h3>
          <img src={ thumbnail } alt={ title } />
          <h2>
            {`Preço: R$ 
            ${price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
          </h2>
        </div>
        <button
          type="button"
          value={ product.id }
          onClick={ () => this.handleClickAddCart2(product) }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
        <button type="button">
          <Link to="/">
            Voltar
          </Link>
        </button>
        <FormComents
          handleComents={ this.handleComents }
        />
        <div>
          {coments.map((coment, id) => <RenderComents key={ id } coment={ coment } />)}
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
