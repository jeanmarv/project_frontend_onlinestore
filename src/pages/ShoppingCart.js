import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      ShoppingCartStorage: JSON.parse(localStorage.getItem('ShoppingCartStorage')),
    };
  }

  addToCart = () => {
    const { ShoppingCartStorage } = this.state;
    if (ShoppingCartStorage !== undefined) {
      return (
        ShoppingCartStorage.map((obj, index) => (
          <div key={ index }>
            <p data-testid="shopping-cart-product-name">{ obj.id }</p>
            <p data-testid="shopping-cart-product-quantity">1</p>
          </div>))
      );
    }
  }

  render() {
    const { ShoppingCartStorage } = this.state;
    return (
      <div>
        {
          !ShoppingCartStorage
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : this.addToCart()
        }
      </div>
    );
  }
}

export default ShoppingCart;
