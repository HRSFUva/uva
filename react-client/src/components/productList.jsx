import React from 'react';
import ProductEntry from './ProductEntry.jsx';
import ProductOverview from './ProductOverview.jsx';

import reviewEntry from './reviewEntry.jsx';

class ProductList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 1,
      totalPages: '',
      currentRange: [],
      currentWine: '',
      userClickedEntry: false,
      userHasSearched: true
    }
    this.updateCurrentPageList = this.updateCurrentPageList.bind(this);
    this.handleUserWantsBack = this.handleUserWantsBack.bind(this);
    this.handleUserWantsNext = this.handleUserWantsNext.bind(this);
    this.handleClickedProductEntry = this.handleClickedProductEntry.bind(this);

  }

  componentWillReceiveProps(){
    this.setState({
      userHasSearched: !this.userHasSearched
    }, this.updateCurrentPageList);
  }

  componentDidMount(){
    this.updateCurrentPageList()
  }

  handleClickedProductEntry(wine) {
    this.setState({
      userClickedEntry: true,
      currentWine: wine
    })
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
    console.log('INSIDE currentPageLIST')
    var products = this.props.products;
    var total = Math.ceil(products.length/10);
    var firstIndex = (this.state.currentPage - 1) * 10;
    var lastIndex = (this.state.currentPage * 10);
    var currentRange = products.slice(firstIndex, lastIndex);

    this.setState({
      totalPages: total,
      currentRange: currentRange,
    })
  }

  render () {
    if(!this.state.userClickedEntry){

    return (
      <div className="productListContainer">

      <div className="productListHeader">
        <h4>Page: {this.state.currentPage} of {this.state.totalPages} </h4>
        <button onClick={this.handleUserWantsBack}>Back</button>
        <button onClick={this.handleUserWantsNext}>Next</button>
      </div>

      <ul>
        { this.state.currentRange.map(product =>
        <li key={product.id}><ProductEntry handleClickedProductEntry={this.handleClickedProductEntry} product={product}/></li> )}
      </ul>
      </div>
      )
    } else {
      return(
        <div>
          <ProductOverview product={this.state.currentWine} submitReview={this.props.submitReview}/>
        </div>
      )
    }
  }
}

export default ProductList;
