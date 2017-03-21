import React from 'react';
import ProductEntry from './ProductEntry.jsx';

import reviewEntry from './reviewEntry.jsx';

class ProductList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 1,
      totalPages: '',
      currentRange: []
    }
    this.updateCurrentPageList = this.updateCurrentPageList.bind(this);
    this.handleUserWantsBack = this.handleUserWantsBack.bind(this);
    this.handleUserWantsNext = this.handleUserWantsNext.bind(this);
  }

  componentDidMount(){
    this.updateCurrentPageList()
  }

  handleUserWantsNext(event){
    if(this.state.currentPage < this.state.totalPages){
      this.setState({
          currentPage: this.state.currentPage + 1
        }, this.updateCurrentPageList)
      }
    }

  handleUserWantsBack(event){
    if(this.state.currentPage > 1)
      this.setState({
        currentPage: this.state.currentPage - 1
      }, this.updateCurrentPageList)
    }

  updateCurrentPageList(event){
    var products = this.props.products;
    var total = Math.floor(products.length/10);
    var firstIndex = (this.state.currentPage - 1) * 10;
    var lastIndex = (this.state.currentPage * 10);
    var currentRange = products.slice(firstIndex, lastIndex);

    this.setState({
      totalPages: total,
      currentRange: currentRange,
    })
  }

  render () {
    return (
      <div className="productListContainer">

      <div className="ProductListHeader">
        <h4>Page: {this.state.currentPage} of {this.state.totalPages} </h4>
        <button onClick={this.handleUserWantsBack}>Back</button>
        <button onClick={this.handleUserWantsNext}>Next</button>
      </div>

      <ul>
      {
        this.state.currentRange.map(product =>
        <li key={product.id}><ProductEntry product={product}/></li>

        )}
      </ul>
      </div>
      )
  }
}

export default ProductList;
