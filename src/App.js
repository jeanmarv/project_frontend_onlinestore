import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/'>
        <Home />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
