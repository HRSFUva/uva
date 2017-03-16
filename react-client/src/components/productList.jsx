import React from 'react';
import productEntry from './productEntry.jsx';

class productList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      products: []
    }
  }

  render () {
    return (
      {this.state.products.map((product) => {
        <productEntry product={product}/>
      })}
    )
  }

};

export default productList;
