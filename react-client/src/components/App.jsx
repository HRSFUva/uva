import React from 'react';
import Search from './searchBar.jsx';
import TopWine from './topWines.jsx';
import $ from 'jquery';
import Login from './loginForm.jsx';
import ProductList from './ProductList.jsx'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      products: [
        {id:1, Name: 'greatWine', Rating: '10', Description: 'This is a great wine!'},
        {id:2, Name: 'goodWine', Rating: '8.5', Description: 'This is a good wine!'},
        {id:3, Name: 'averageWine', Rating: '7', Description: 'This is an average wine.'}
      ],
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
      userLoggedIn: false,
      userWantsHomePage: true,
      username: '',
      userID: ''
    }
    this.search = this.search.bind(this);
    this.handleUserWantsLogin = this.handleUserWantsLogin.bind(this);
    this.validateUser = this.validateUser.bind(this);
    this.newUser = this.newUser.bind(this);
  }

  handleUserWantsLogin(event) {
    this.setState({
      userWantsLogin: !this.state.userWantsLogin
    })
  }

  validateUser (username, password) {
    var context = this;
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
         console.log('success after validateUserAJAXSUCCESS', typeof data);
         console.log('success after validateUserAJAXSUCCESS',  data);
         context.setState({
          userLoggedIn: !context.state.userLoggedIn,
          username: data[0].name,
          userID: data[0]._id,
          userWantsLogin: !context.state.userWantsLogin
         })
       },
       error: function(err){
         console.log('error after validateUser', err);
       }
     })
   }

   newUser (username, password) {
    console.log('username inside app.jsx', username);
    console.log('password inside app.jsx', password);
    $.ajax({
      url: 'http://localhost:3000/signup',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        username: username,
        password: password
      }),
      success: function(data) {
        console.log('added user successfully, i think?', data)
      },
      error: function(error) {
        console.log('error in adding user, dude', error);
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

  render (){
    if(!this.state.userWantsLogin){
      return (
        <div className = 'container'>
         </span>
         <span className = 'loginButton'>
           <button value='login' onClick={this.handleUserWantsLogin}>Login</button>
         </span>
         <span className = 'menuButton'>
           <button value='login'>Home</button>
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

          <div>
            <ProductList products={this.state.products}/>
          </div>

      </div>
    )} else {
        return (
          <div className = 'loginWrapper'>
            <Login newUser={this.newUser} validate={this.validateUser} handleUserWantsHome={this.handleUserWantsLogin} userWantsLogin={this.state.userWantsLogin} className = 'loginForm' />
          </div>
          )
        //REVIEW LIST
      }
  }
}

export default App;
//<ReviewList reviews={this.state.reviews} />
