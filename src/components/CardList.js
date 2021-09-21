import React from 'react';
import PropTypes from 'prop-types';
// import { getProductsFromCategoryAndQuery } from '../services/api';

class CardList extends React.Component {
  goToCart = () => {
    const { findResult } = this.props;
    localStorage.setItem('ShoppingCartStorage', findResult.title);
  }

  render() {
    const { findResult } = this.props;
    if (findResult.length < 1) {
      return (<p>Nenhum produto foi encontrado</p>);
    }
    return (
      <section id="card-list">
        { findResult.map(({ title, thumbnail, price, id }) => (
          <div data-testid="product" key={ id }>
            <h3>{title}</h3>
            <img src={ thumbnail } alt="imagem do produto" />
            <h5>{price}</h5>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ this.goToCart }
            />
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
