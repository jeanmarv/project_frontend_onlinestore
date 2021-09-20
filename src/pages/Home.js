import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import FillterCatergories from '../components/FilterCategories';
import {getCategories} from '../services/api';

class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      categories: [],
    }
  }

  funcGetCategories 
  render() {
    return (
      <div>
        <SearchBar />
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <img src="../../shopping-cart-1985.png" alt="carrinho" />
        </Link>
        <FillterCatergories />
      </div>
    );
  }
}

export default Home;
