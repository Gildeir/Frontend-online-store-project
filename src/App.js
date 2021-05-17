import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
// import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div>
      <header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/shoppingcart" component={ ShoppingCart } />
            {/* <Route path="/details/:id" render={ (props) => <ProductDetails {...props} /> } /> */}
            <Route path="/details/:id" component={ ProductDetails } />
            {/* <Route component={ NotFound } /> */}
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
