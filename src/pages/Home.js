import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import FillterCatergories from '../components/FilterCategories';
import { getCategories } from '../services/api';
import CardList from '../components/CardList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      requestCategoriesApi: true,
      busca: '',
      button: false,
    };
  }

  componentDidMount() {
    this.funcGetCategories();
  }

  funcGetCategories = async () => {
    const { requestCategoriesApi } = this.state;
    if (requestCategoriesApi) {
      const categories = await getCategories();
      this.setState({
        categories,
        requestCategoriesApi: false,
      });
    }
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ busca: value });
  }

  onclick = () => {
    this.setState({ button: true });
  }

  render() {
    const { categories, requestCategoriesApi, busca, button } = this.state;
    return (
      <div>
        <SearchBar
          onchange={ this.handleChange }
          value={ busca }
          onclick={ this.onclick }
        />
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <img src="../../shopping-cart-1985.png" alt="carrinho" />
        </Link>
        {!requestCategoriesApi && <FillterCatergories products={ categories } />}
        {button && <CardList busca={ busca } />}
      </div>
    );
  }
}

export default Home;
