import React from 'react';
import {getProductsFromCategoryAndQuery} from '../services/api';
import { Link } from 'react-router-dom';


class ProductsDetail extends React.Component {
  constructor(props){
    super(props);
    const {match: {params: {category_id,id}} } = props;
    this.state = {
      id,
      fecthApiIdJson: [],
      category_id,
      render:false,
      result:{},
    }
  }

  componentDidMount(){
    const {id} = this.state;
    //this.funcApiId(id);
  }  

  funcApiId = async () => {    
    const {category_id, id, render} = this.state    
    if (!render) {
      const vazia = ''    
      const fecthApiId = await getProductsFromCategoryAndQuery(category_id, vazia);
      const fecthResult = await fecthApiId.results
      const result = fecthResult.find((obj) => obj.id === id);
      console.log(fecthResult);
      console.log(result);
      this.setState({
        result,
        render: true,
      });
    }    
  }

  render() {
      const {result,render} = this.state;
      this.funcApiId();
      const test = (<section id="card-list">       
      <div data-testid="product">
          <h3 data-testid="product-detail-name">{result.title}</h3>
          <img src={ result.thumbnail } alt="imagem do produto" />
          <h5>{result.price}</h5>                     
      </div>
      <div>            
        <h2>Especificações Técnicas</h2>
        <p>{result.sold_quantity}</p>
      </div>
      <Link data-testid="shopping-cart-button" to="/shoppingcart">
        <img src="../../shopping-cart-1985.png" alt="carrinho" />            
      </Link>
    </section>)
      

      return (   
        <div>     
          {render && test};
        </div>
      );
    }
  } 
    

export default ProductsDetail;
