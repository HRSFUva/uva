import React from 'react';
import ProductEntry from './productEntry.jsx';
import ProductOverview from './productOverview.jsx';

import reviewEntry from './reviewEntry.jsx';

class ProductList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 1,
      totalPages: '',
      currentRange: [],
      currentWine: {},
      userClickedEntry: false,
      userHasSearched: true,
      lastSearch: ''
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
    console.log('inside clicked product entry',wine);
    this.setState({
      userClickedEntry: true,
      currentWine: {
        wine: wine
      }
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
    var products = this.props.products;
    var total = Math.ceil(products.length/10);
    var firstIndex = (this.state.currentPage - 1) * 10;
    var lastIndex = (this.state.currentPage * 10);
    var currentRange = products.slice(firstIndex, lastIndex);

    this.setState({
      totalPages: total,
      currentRange: currentRange,
      lastSearch: this.props.searchHistory[0]
    })
  }

  render () {
    if(!this.state.userClickedEntry){

    return (
      <div className="productListContainer">

        <div className="productListHeader">
          <h4 id='searchTermResults'>Showing results for: '{this.state.lastSearch}'</h4>
        </div>

        <ol>
          { this.state.currentRange.map(product =>
            <li key={product._id}><ProductEntry handleClickedProductEntry={this.handleClickedProductEntry} product={product}/></li> )}
        </ol>

        <div className="productListHeader">
          <h4>Page: {this.state.currentPage} of {this.state.totalPages} </h4>
          <button onClick={this.handleUserWantsBack}>Back</button>
          <button onClick={this.handleUserWantsNext}>Next</button>
        </div>
      </div>
      )
    } else {
      return(
        <div>
          <ProductOverview reviews={this.props.reviews} getReviews={this.props.getReviews} currentWine={this.state.currentWine} submitReview={this.props.submitReview}/>
        </div>
      )
    }
  }
}

export default ProductList;
