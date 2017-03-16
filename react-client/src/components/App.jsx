import React from 'react';
import Search from './searchBar.jsx';
import TopWine from './topWines.jsx';
import $ from 'jquery'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviews: [
      { title: 'speedy',
        context: 'it was great',
        rating: 8 },
      { title: 'speedy',
        context: 'it was ok',
        rating: 7 },
      { title: 'speedy',
        context: 'it was awesome',
        rating: 9 },
      { title: 'speedy',
        context: 'it was terrible',
        rating: 6 }
      ],
      searchQuery: '',
      userHasSearched: false
    }
    this.search = this.search.bind(this);
  }

  search (query) {
    console.log('query', query);
    $.ajax({
      url: 'http://localhost:3000/search',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        search: query
      }),
      success: function(data) {
        console.log(data)
      },
      error: function(err) {
        console.log(err)
      }
    })
  }

  render () {
    if(!this.state.userHasSearched){
      return (
        <div className = 'container'>
         <span className = 'loginButton'>
           <button value='login'>Login</button>
         </span>
         <span className = 'menuButton'>
           <button value='login'>Menu</button>
         </span>

          <div className = 'heroImageContainer'>
            <span className = 'mainLogo'>
              <h2>Uva</h2>
            </span>
            <div className = 'heroContentWrapper'>
              <h2>Unbiased wine reviews</h2>
              <Search className ='SearchBar' search = {this.search}/>
            </div>
          </div>

          <div className='topWineWrapper'>
            <TopWine />
            <TopWine />
            <TopWine />
          </div>

      </div>
    )} else {
        return (
          <div>Hello after search</div>
          )
        //REVIEW LIST
      }
  }
}

export default App;
//<ReviewList reviews={this.state.reviews} />

