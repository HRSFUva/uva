import React from 'react';
import Search from './searchBar.jsx';

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
  }


  render () {
    if(!this.state.userHasSearched){
      return (
        <div className = 'container'>
          <div className = 'heroImageContainer'>
            <span className = 'mainLogo'>
              <h2>Uva</h2>
            </span>
            <div className = 'heroContentWrapper'>
              <h2>Unbiased wine reviews</h2>
              <Search className ='SearchBar' />
            </div>
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

