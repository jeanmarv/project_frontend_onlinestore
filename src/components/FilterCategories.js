import React from 'react';
import PropTypes from 'prop-types';

class FillterCatergories extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <ul>
        {products.map(({ id, name }) => (
          <li data-testid="category" key={ id }>{name}</li>

        )) }
      </ul>
    );
  }
}

FillterCatergories.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default FillterCatergories;
