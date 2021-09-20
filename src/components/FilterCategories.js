import React from 'react';


class FillterCatergories extends React.Component {
  render() {
    const { products } = this.props;
    return( 
        <ul>
            {products.map(({ id, name }) => (
                <li key={id}>{name}</li>
                                    
            )
            ) }
        </ul>
    ) 
  }

  
}

export default FillterCatergories;
