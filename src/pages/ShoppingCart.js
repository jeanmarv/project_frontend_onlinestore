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
          <div key={ index } id="carrinhoDeCompras">
            <div>
              <button
                type="button"
                // onClick={}
              >
                X
              </button>
            </div>
            <div>
              <p data-testid="shopping-cart-product-name">{ obj.id }</p>
              <div>
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                >
                  +
                </button>
                <p data-testid="shopping-cart-product-quantity">
                  { obj.quantidade }
                </p>
                <button
                  data-testid="product-decrease-quantity"
                  type="button"
                >
                  -
                </button>
              </div>
            </div>
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
