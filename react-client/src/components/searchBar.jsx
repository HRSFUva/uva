import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      pricePoint: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handlePriceClick = this.handlePriceClick.bind(this);
  }


  handlePriceClick(event) {
    this.setState({
      pricePoint: event.target.value
    })
  }

  handleSearchSubmit (event) {
    if(this.state.searchQuery.length){
      this.props.search(this.state.searchQuery, this.state.pricePoint);
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
        <button value='10' onClick={this.handlePriceClick}>$</button>
        <button value='20'>$$</button>
        <button value='30'>$$$</button>
        <button value='50'>$$$$</button>
      </div>

      <div className='submitButton'>
        <input type='submit' value='Submit' />
      </div>
    </form>
    )
  }
}


export default SearchBar;