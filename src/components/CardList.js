import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardList extends React.Component {
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
        const save = [objectID, ...saveStorage];
        localStorage.setItem('ShoppingCartStorage', JSON.stringify(save));
      }
    } else {
      const objectID = [{ id, quantidade: 1 }];
      localStorage.setItem('ShoppingCartStorage', JSON.stringify(objectID));
    }
  }

  render() {
    const { findResult } = this.props;
    if (findResult.length < 1) {
      return (<p>Nenhum produto foi encontrado</p>);
    }
    return (
      <section id="card-list">
        { findResult.map((obj) => (
          <div key={ obj.id }>
            <Link
              data-testid="product-detail-link"
              to={ `/${obj.category_id}/${obj.id}` }
            >
              <div data-testid="product">
                <h3>{obj.title}</h3>
                <img src={ obj.thumbnail } alt="imagem do produto" />
                <h5>{obj.price}</h5>
              </div>
            </Link>
            <button
              type="button"
              data-testid="product-add-to-cart"
              id={ obj.title }
              onClick={ this.goToCart }
            >
              ADICIONAR AO CARRINHO
            </button>
          </div>
        ))}
      </section>
    );
  }
}

CardList.propTypes = {
  findResult: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
