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
      // <div className="productEntry">

        <div className="productEntryFlexbox" onClick={this.handlePassBackClickedWine} >

        <div className="productEntryFlexItem">
          <img  src={this.props.product.Labels[0].Url} />
        </div>

        <div className="productEntryFlexItem">
          <h4  >{this.props.product.Name} </h4>
          <h4>Best Price: {this.props.product.PriceMin}
          </h4>
        </div>

        <div className="productEntryFlexItem">
          <h4>{this.props.product.Vineyard.Name}Extra
          </h4>
        </div>

       </div>

     // </div>
    )
  }

}


export default ProductEntry;