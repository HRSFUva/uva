import React from 'react';
import Search from './searchBar.jsx';
import TopWine from './topWines.jsx';
import $ from 'jquery';
import Login from './loginForm.jsx';

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
      userHasSearched: false,
      userWantsLogin: false,
      userIsLoggedIn: false,
      userWantsHomePage: true,
    }
    this.search = this.search.bind(this);
    this.handleUserWantsLogin = this.handleUserWantsLogin.bind(this);
    this.validateUser = this.validateUser.bind(this);
  }

  handleUserWantsLogin(event) {
    this.setState({
      userWantsLogin: !this.state.userWantsLogin
    })
  }

  validateUser (username, password) {
     console.log('username inside validateUser', username);
     console.log('password inside validateUser', password);

     $.ajax({
       url: 'http://localhost:3000/login',
       type: 'POST',
       contentType: 'application/json',
       data: JSON.stringify({
         username: username,
         password: password
       }),
       success: function(data){
         console.log('success after validateUser', data);
       },
       error: function(err){
         console.log('error after validateUser', err);
       }
     })
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
    if(!this.state.userWantsLogin){
      return (
        <div className = 'container'>
          <span className = 'loginButton'>
            <button value='login' onClick={this.handleUserWantsLogin}>Login</button>
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
          <div className = 'loginWrapper'>
            <Login validate={this.validateUser} handleUserWantsHome={this.handleUserWantsLogin} userWantsLogin={this.state.userWantsLogin} className = 'loginForm' />
          </div>
          )
        //REVIEW LIST
      }
  }
}

export default App;
//<ReviewList reviews={this.state.reviews} />
