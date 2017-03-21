import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      price: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handlePriceClick = this.handlePriceClick.bind(this);
  }


  handlePriceClick(event) {

    var price = 10;

    if(event.target.value === '$'){
      price = 10;
    } else if (event.target.value === '$$'){
      price = 20;
    }else if (event.target.value === '$$$'){
      price = 30;
    }else if (event.target.value === '$$$$'){
      price = 40;
    }

    this.setState({
      price: price
    })

    event.preventDefault()
  }

  handleSearchSubmit (event) {
    var price = this.state.price || null;
    var search = this.state.searchQuery;
    console.log('price inside handleSearchSubmit', price)
    if(this.state.searchQuery.length > 0){
      this.props.search(search, price);
      this.setState({
        searchQuery: '',
      })
    }
    event.preventDefault();
  }

  handleSearchChange (event) {
    this.setState({
      searchQuery: event.target.value
    });
  }


render(){
  return(
    <form className = 'searchBarForm' onSubmit={this.handleSearchSubmit}>
      <input className = 'mainSearchBar' onChange={this.handleSearchChange} placeholder = 'Drink Great Wine' value={this.state.searchQuery} />
      <div className="priceButtons">
        <input type='button' value='$' onClick={this.handlePriceClick}></input>
        <input type='button' value='$$' onClick={this.handlePriceClick}></input>
        <input type='button' value='$$$' onClick={this.handlePriceClick}></input>
        <input type='button' value='$$$$' onClick={this.handlePriceClick}></input>
      </div>

      <div className='submitButton'>
        <input type='submit' value='Submit' />
      </div>
    </form>
    )
  }
}


export default SearchBar;