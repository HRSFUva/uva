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
          <img className="productEntryFlexItem" src={this.props.product.Labels[0].Url} />
          <h4 onClick={this.handlePassBackClickedWine} className="productEntryFlexItem productEntryFlexItemCenter" >{this.props.product.Name} MSRP: {this.props.product.PriceRetail}, Low Price: {this.props.product.PriceMin}
          </h4>
          <h3 className="productEntryFlexItem" >{this.props.product.Vineyard.Name}
          </h3>
        </div>
      </div>
    )
  }

}


export default ProductEntry;
  // <div className="productEntry">
  //   <h4>
  //     <span className="productName">{product.Name}</span>
  //   </h4>
  //   <p>
  //     <span className="productDescription">{product.Description}</span>
  //   </p>
  //   <h4>
  //     <span className="productRating">{product.Rating}</span>
  //   </h4>
  // </div>
