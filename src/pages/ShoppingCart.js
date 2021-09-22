import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      ShoppingCartStorage: JSON.parse(localStorage.getItem('ShoppingCartStorage')),
    };
  }

  componentDidUpdate() {

  }

  atualizaState = () => {
    const totalItens = JSON.parse(localStorage.getItem('ShoppingCartStorage'));
    this.setState({ ShoppingCartStorage: totalItens });
  }

  removeLocalStorage= ({ target }) => {
    const { id } = target;
    const totalItens = JSON.parse(localStorage.getItem('ShoppingCartStorage'));
    totalItens.splice(id, 1);
    localStorage.setItem('ShoppingCartStorage', JSON.stringify(totalItens));
    this.atualizaState();
  }

  aumentaQuantidade = ({ target }) => {
    const { id } = target;
    const totalItens = JSON.parse(localStorage.getItem('ShoppingCartStorage'));
    const obj = totalItens[id];
    obj.quantidade += 1;
    totalItens.splice(id, 1, obj);
    localStorage.setItem('ShoppingCartStorage', JSON.stringify(totalItens));
    this.atualizaState();
  }

  diminuiQuantidade = ({ target }) => {
    const { id } = target;
    const totalItens = JSON.parse(localStorage.getItem('ShoppingCartStorage'));
    const obj = totalItens[id];
    if (obj.quantidade <= 0) {
      totalItens.splice(id, 1, obj);
      localStorage.setItem('ShoppingCartStorage', JSON.stringify(totalItens));
      this.atualizaState();
    } else {
      obj.quantidade -= 1;
      totalItens.splice(id, 1, obj);
      localStorage.setItem('ShoppingCartStorage', JSON.stringify(totalItens));
      this.atualizaState();
    }
  }

  addToCart = () => {
    const { ShoppingCartStorage } = this.state;
    if (ShoppingCartStorage !== undefined) {
      return (
        ShoppingCartStorage.map((obj, index) => (
          <div key={ index } id="carrinhoDeCompras">
            <div>
              <button
                id={ index }
                type="button"
                onClick={ this.removeLocalStorage }
              >
                X
              </button>
            </div>

            <div>
              <p data-testid="shopping-cart-product-name">{ obj.id }</p>
              <div>

                <button
                  id={ index }
                  data-testid="product-increase-quantity"
                  type="button"
                  onClick={ this.aumentaQuantidade }
                >
                  +
                </button>
                <p data-testid="shopping-cart-product-quantity">
                  { obj.quantidade }
                </p>
                <button
                  id={ index }
                  data-testid="product-decrease-quantity"
                  type="button"
                  onClick={ this.diminuiQuantidade }
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
        {!ShoppingCartStorage
          ? <p data-testid="shopping-cart-empty-message">O seu carrinho está vazio</p>
          : this.addToCart()}
      </div>
    );
  }
}

export default ShoppingCart;
