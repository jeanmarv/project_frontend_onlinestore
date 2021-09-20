import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onchange, value, onclick } = this.props;
    return (
      <div>
        <input
          type="text"
          onChange={ onchange }
          value={ value }
          data-testid="query-input"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ onclick }
        >
          Buscar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

      </div>
    );
  }
}

SearchBar.propTypes = {
  onchange: PropTypes.func.isRequired,
  onclick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBar;
