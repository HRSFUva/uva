import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }


  handleSearchSubmit (event) {
    if(this.state.searchQuery.length){
      this.props.search(this.state.searchQuery);
      //DO WORK
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
      <div className='submitButton'>
        <input type='submit' value='Submit' />
      </div>
    </form>
    )
  }
}


export default SearchBar;