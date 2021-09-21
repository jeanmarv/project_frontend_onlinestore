import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import FillterCatergories from '../components/FilterCategories';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CardList from '../components/CardList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      findResult: [],
      requestFindAPI: false,
      categories: [],
      requestCategoriesApi: true,
      busca: '',
      cardList: false,
    };
  }

  componentDidMount() {
    this.funcGetCategories();
    const { busca } = this.state;
    this.getProductsAPI(busca);
  }

  componentDidUpdate() {
    const { busca } = this.state;
    this.getProductsAPI(busca);
  }

  getProductsAPI = async (busca) => {
    const { requestFindAPI } = this.state;
    if (requestFindAPI) {
      const vazia = '$CATEGORY_ID';
      const findObj = await getProductsFromCategoryAndQuery(vazia, busca);
      this.setState({
        findResult: findObj.results,
      });
      this.setState({
        cardList: true,
        requestFindAPI: false,
      });
    }
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

  onClickCategorie = async ({ target }) => {
    this.setState({
      cardList: false,
    });
    const { id } = target;
    const vazia = '$QUERY';
    const findObj = await getProductsFromCategoryAndQuery(id, vazia);
    this.setState({
      findResult: findObj.results,
    });
    this.setState({
      cardList: true,
    });
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ busca: value });
  }

  onclick = () => {
    this.setState({
      requestFindAPI: true,
    });
  }

  render() {
    const { categories, requestCategoriesApi, busca, cardList, findResult } = this.state;
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
        <main>
          {!requestCategoriesApi && <FillterCatergories
            onClickCategorie={ this.onClickCategorie }
            products={ categories }
          />}
          {cardList && <CardList findResult={ findResult } />}
        </main>
      </div>
    );
  }
}

export default Home;
