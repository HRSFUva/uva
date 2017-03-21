import React from 'react';

class ProductOverview extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render(){
    return(
      <div className='container'>
        <div>{this.props.product.Name}</div>
        <div>{this.props.product.PriceMin}</div>
        <div>{this.props.product.Vineyard.name}</div>
      </div>
    )
  }
}

export default ProductOverview;
