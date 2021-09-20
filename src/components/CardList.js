import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class CardList extends React.Component {
  constructor(props) {
    super(props);
    // const { busca } = props;
    this.state = {
      requestFindAPI: true,
      findResult: [],
    };
  }

  componentDidMount() {
    const { busca } = this.props;
    this.getProductsAPI(busca);
  }

getProductsAPI = async (busca) => {
  const { requestFindAPI } = this.state;
  if (requestFindAPI) {
    const vazia = '';
    const findObj = await getProductsFromCategoryAndQuery(vazia, busca);
    this.setState({ findResult: findObj.results });
  }
}

render() {
  const { findResult } = this.state;
  if (findResult.length < 1) {
    return (<p>Nenhum produto foi encontrado</p>);
  }
  return (
    <>
      { findResult.map(({ title, thumbnail, price, id }) => (
        <div data-testid="product" key={ id }>
          <h3>{title}</h3>
          <img src={ thumbnail } alt="imagem do produto" />
          <h5>{price}</h5>
        </div>
      ))}
    </>
  );
}
}

CardList.propTypes = {
  busca: PropTypes.string.isRequired,
};

export default CardList;
