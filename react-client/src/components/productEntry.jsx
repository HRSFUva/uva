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

        <div className="productFlexbox" onClick={this.handlePassBackClickedWine} >

        {/*
          <div className="productEntryFlexItem">
          <img  src={this.props.product.Labels[0].Url} />
        </div>*/}

        <div className="productFlexItem">
          <h4>
            Wine:
          </h4>
          <p>
            {this.props.product.name}
          </p><br/>
          <h4>
            Region:
          </h4>
          <p>
            {this.props.product.region}
          </p><br/>
          <h4>
            Origin:
          </h4>
          <p>
            {this.props.product.origin}
          </p><br/>
          <h4>
            Category:
          </h4>
          <p>
            {this.props.product.type}
          </p><br/>
        </div>

        <div className='productFlexItem'>
          <h4>
            Avg Rating:
          </h4>
          <p>
            {this.props.product.apiRating/20}
          </p><br/>
          <h4>
            Best Price:
          </h4>
          <p>
            ${this.props.product.priceMin}
          </p>
        </div>

       </div>

    )
  }

}


export default ProductEntry;