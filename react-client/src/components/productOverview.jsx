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
        <div className="productOverviewFlexbox">
          <h3 className="productOverviewFlexitem">
            {this.props.product.Name}
            {this.props.product.PriceMin}
            {this.props.product.Vineyard.name}
          </h3>
          <input type="button" value="Write a review" className="productOverviewFlexitem" />
        </div>
      </div>
    )
  }
}

export default ProductOverview;
