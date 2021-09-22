import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductsDetail extends React.Component {
  constructor(props) {
    super(props);
    const { match: { params: { categoryId, id } } } = props;
    this.state = {
      id,
      categoryId,
      render: false,
      result: {},
    };
  }

  funcApiId = async () => {
    const { categoryId, id, render } = this.state;
    if (!render) {
      const vazia = '$QUERY';
      const fecthApiId = await getProductsFromCategoryAndQuery(categoryId, vazia);
      const fecthResult = await fecthApiId.results;
      console.log(fecthResult);
      const result = fecthResult.find((obj) => obj.id === id);
      console.log(result);
      this.setState({
        result,
        render: true,
      });
    }
  }

  goToCart = ({ target }) => {
    const { id } = target;

    if (localStorage.getItem('ShoppingCartStorage')) {
      const saveStorage = JSON.parse(localStorage.getItem('ShoppingCartStorage'));
      const objectID = { id, quantidade: 1 };
      const boolean = saveStorage.some((obj) => obj.id === objectID.id);
      if (boolean) {
        const buscaItemRepetido = saveStorage.reduce((acc, obj) => {
          let temp = acc;
          if (obj.id === objectID.id) {
            obj.quantidade += 1;
          }
          temp = [...temp, obj];
          return temp;
        }, []);

        const save = [...buscaItemRepetido];
        localStorage.setItem('ShoppingCartStorage', JSON.stringify(save));
      } else {
        const save = [...saveStorage, objectID];
        localStorage.setItem('ShoppingCartStorage', JSON.stringify(save));
      }
    } else {
      const objectID = [{ id, quantidade: 1 }];
      localStorage.setItem('ShoppingCartStorage', JSON.stringify(objectID));
    }
  }

  render() {
    const { result, render } = this.state;
    this.funcApiId();
    const test = (
      <section id="card-list">
        <div data-testid="product">
          <h3 data-testid="product-detail-name">{result.title}</h3>
          <img src={ result.thumbnail } alt="imagem do produto" />
          <h5>{result.price}</h5>
        </div>
        <div>
          <h2>Especificações Técnicas</h2>
          <p>{result.sold_quantity}</p>
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          id={ result.title }
          onClick={ this.goToCart }
        >
          ADICIONAR AO CARRINHO
        </button>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <img src="../../shopping-cart-1985.png" alt="carrinho" />
        </Link>
      </section>
    );

    return (
      <div>
        {render && test}
        ;
      </div>
    );
  }
}

ProductsDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryId: PropTypes.string,
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductsDetail;
