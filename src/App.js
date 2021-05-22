import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div>
      <header className="header">
        <h1>FrontEnd Online Store</h1>
      </header>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/shoppingcart" component={ ShoppingCart } />
            <Route path="/details/:id" component={ ProductDetails } />
            <Route exact path="/checkout" component={ Checkout } />
            {/* <Route component={ NotFound } /> */}
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
