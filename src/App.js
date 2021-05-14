import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            {/* <Route exact path="/ShoppingCart" component={ ShoppingCart } /> */}
            {/* <Route component={ NotFound } /> */}
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
