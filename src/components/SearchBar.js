import React from 'react';

class SearchBar extends React.Component {
  render(){
    return (
      <div>
        <input />
        <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    )
  }
}

export default SearchBar;