import React from 'react';
import PropTypes from 'prop-types';

class FillterCatergories extends React.Component {
  render() {
    const { products, onClickCategorie } = this.props;
    return (
      <aside id="category">
        {products.map(({ id, name }) => (
          <button
            type="button"
            key={ id }
            onClick={ onClickCategorie }
          >
            <li id={ id } data-testid="category">{name}</li>

          </button>

        )) }
      </aside>
    );
  }
}

FillterCatergories.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  onClickCategorie: PropTypes.func.isRequired,
};

export default FillterCatergories;
