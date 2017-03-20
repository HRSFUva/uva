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
      userID: '',
      invalidPasswordAttempt: false,
      invalidUsername: false
    }
    this.search = this.search.bind(this);
    this.handleUserWantsLogin = this.handleUserWantsLogin.bind(this);
    this.validateUser = this.validateUser.bind(this);
    this.newUser = this.newUser.bind(this);
    this.handleUserWantsLogout = this.handleUserWantsLogout.bind(this);
    this.checkUsername = this.checkUsername.bind(this);
  }

  handleUserWantsLogin(event) {
    this.setState({
      userWantsLogin: !this.state.userWantsLogin,
      invalidPasswordAttempt: false
    })
  }

  handleUserWantsLogout(event) {
    this.setState({
      userLoggedIn: false,
      username: '',
      userID: ''
    })
  }

  validateUser (username, password) {
    var context = this;

     $.ajax({
       url: 'http://localhost:3000/login',
       type: 'POST',
       contentType: 'application/json',
       data: JSON.stringify({
         username: username,
         password: password
       }),
       success: function(data){
         if(data.length===0){
          console.log('zeroData');
          context.setState({
            invalidPasswordAttempt: true
          })
         } else {
           context.setState({
            userLoggedIn: !context.state.userLoggedIn,
            username: data[0].name,
            userID: data[0]._id,
            userWantsLogin: !context.state.userWantsLogin,
            invalidPasswordAttempt: false
           });
         }
       },
       error: function(err){
         console.log('error after validateUser', err);
       }
     })
   }

   checkUsername (username) {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/users/username',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        username: username
      }),
      success: function(data){
        if(data.length > 0) {
          context.setState({
            invalidUsername: true
          })
        } else {
          context.setState({
            invalidUsername: false
          })
        }
      }
    })
   }

   newUser (username, password) {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/signup',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        username: username,
        password: password
      }),
      success: function(data) {
        console.log('success response from newUserAJAX', data)
      },
      error: function(error) {
        console.log('error in adding user', error);
      }
    })
   }

  search (query) {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/search',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        search: query
      }),
      success: function(data) {
        console.log('success res from searchAJAX', data)
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

          <div className='flexContainer'>
            <button className='flexItem flexEdge' value='login'>Home</button>
            {this.state.userLoggedIn &&
            <h4> Hi {this.state.username}! </h4> }
            <h2 className='flexItem flexCenter mainLogo'>Uva</h2>
            {!this.state.userLoggedIn ?
            (<button className='flexItem flexEdge' onClick={this.handleUserWantsLogin} value='login'>Login</button>) :
            (<button className='flexItem flexEdge' onClick={this.handleUserWantsLogout} value='logout'>Logout</button>)}
          </div>

          <div className = 'heroImageContainer'>
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
            <Login checkUsername = {this.checkUsername} invalidUsername = {this.state.invalidUsername} newUser={this.newUser} invalidPasswordAttempt={this.state.invalidPasswordAttempt} validate={this.validateUser} handleUserWantsHome={this.handleUserWantsLogin} userWantsLogin={this.state.userWantsLogin} className = 'loginForm' />
          </div>
          )
      }
  }
}

export default App;