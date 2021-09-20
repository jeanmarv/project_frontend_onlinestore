import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shoppingcart">
          <ShoppingCart />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
