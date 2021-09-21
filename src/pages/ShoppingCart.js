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
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{ ShoppingCartStorage }</p>
        <p data-testid="shopping-cart-product-quantity">{ ShoppingCartStorage.length }</p>
      </div>
    );
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
