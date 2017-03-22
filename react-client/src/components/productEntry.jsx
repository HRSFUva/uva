import React from 'react';
// import productOverview from './productOverview.jsx';
// import reviewList from './reviewList.jsx';


class ProductEntry extends React.Component {
  constructor(props){
    super(props);
    this.state={}
    this.handlePassBackClickedWine = this.handlePassBackClickedWine.bind(this);
  }

  handlePassBackClickedWine(){
    console.log(this.props.product);
    this.props.handleClickedProductEntry(this.props.product);
  }

  render(){
    return(
      <div className="productEntry">
        <div className="productEntryFlexbox">

        <div className="productEntryFlexItem">
          <img  src={this.props.product.Labels[0].Url} />
        </div>

        <div className="productEntryFlexItem productEntryFlexItemCenter">
          <h4 onClick={this.handlePassBackClickedWine}  >{this.props.product.Name} </h4>
          <h4>MSRP: {this.props.product.PriceRetail}</h4><h4> Low Price: {this.props.product.PriceMin}
          </h4>
        </div>

        <div className="productEntryFlexItem">
          <h3>{this.props.product.Vineyard.Name}
          </h3>
        </div>
        </div>
      </div>
    )
  }

}


export default ProductEntry;