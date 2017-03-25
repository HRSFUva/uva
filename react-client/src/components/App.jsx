import React from 'react';
import Search from './searchBar.jsx';
import TopWine from './topWines.jsx';
import $ from 'jquery';
import Login from './loginForm.jsx';
import ProductList from './productList.jsx';
import TopBar from './TopBar.jsx';
import TrendingWineList from './trendingWineList.jsx';
import BestValueWineList from './bestValueWineList.jsx';
import UvasChoiceWineList from './uvasChoiceWineList.jsx';

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
        rating: 8,
        username: 'fred' },
      { title: 'speedy',
        context: 'it was ok',
        rating: 7,
        username: 'beth' },
      { title: 'speedy',
        context: 'it was awesome',
        rating: 9,
        username: 'ted' },
      { title: 'speedy',
        context: 'it was terrible',
        rating: 6,
        username: 'mark' }
      ],
      topReds: [],
      topWhites: [],
      topRated: [],
      uvasChoice: [],
      trending: [],
      searchQuery: '',
      searchHistory: [],
      userHasSearched: false,
      userWantsLogin: false,
      userLoggedIn: false,
      userWantsHomePage: true,
      username: '',
      userID: '',
      invalidPasswordAttempt: false,
      invalidUsername: false,
      userWantsSignUp: false
    }
    this.search = this.search.bind(this);
    this.handleUserWantsLogin = this.handleUserWantsLogin.bind(this);
    this.validateUser = this.validateUser.bind(this);
    this.newUser = this.newUser.bind(this);
    this.handleUserWantsLogout = this.handleUserWantsLogout.bind(this);
    this.checkUsername = this.checkUsername.bind(this);
    this.handleUserWantsHome = this.handleUserWantsHome.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.init = this.init.bind(this);
  }

  componentDidMount(){
    console.log('didmount')
    this.init();
  }

  handleUserWantsHome(event) {
    this.setState({
      userWantsHomePage: true,
      userHasSearched: false,
      userWantsLogin: false
    })
  }

  handleUserWantsLogin(event) {
    this.setState({
      userWantsLogin: !this.state.userWantsLogin,
      invalidPasswordAttempt: false,
      userWantsHomePage: false,
      userHasSearched: false
    })
  }

  handleUserWantsLogout(event) {
    this.setState({
      userLoggedIn: false,
      username: '',
      userID: ''
    })
  }

  init(){
    var context = this;
    console.log('boom');
    $.ajax({
      url: 'http://localhost:3000/init',
      contentType: 'application/json',
      success: function (data) {
        console.log('successful initial response', data);
        context.setState({
          topReds: data.top10Reds,
          topWhites: data.top10Whites,
          topRated: data.topRated,
          trending: data.trending,
          uvasChoice: data.uvasChoice
        })
      },
      error: function(error) {
        console.log('error inside init duuudeeee', error)
      }
    })
  }

  getReviews(product_id){
    var context = this;
    console.log('this is the key', product_id)
    $.ajax({
      url: 'http://localhost:3000/reviews',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        product_id: product_id
      }),
      success: function(reviews){
        context.setState({
          reviews: reviews
        })
      },
      error: function(error){
        console.log('error after getting reviews AJAX', error)
      }
    })
  }

  submitReview (review, rating, wine) {
    var context = this;
    console.log('wine', wine);
    var product_id = wine._id;
    var product = wine.name;

    $.ajax({
      url: 'http://localhost:3000/review',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        review: review,
        rating: rating,
        name: name,
        username: this.state.username,
        product_id: product_id
      }),
      success: function(data) {
        //TODO: provide user feedback upon successful review
        console.log('Received success submitReview AJAX', data)
      },
      error: function(error) {
        console.log('Error submitReview AJAX', error)
      }
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

  search (query, price) {
    var context = this;
    this.setState({
      searchedHistory: this.state.searchHistory.splice(1, 0, query)
    })
    console.log('query inside search', query);
    console.log('price inside search', price);
    $.ajax({
      url: 'http://localhost:3000/search',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        search: query,
        price: price
      }),
      success: function(data) {
        console.log('success res from searchAJAX', data);
        if (data.length > 0) {
          context.setState({
            products: data,
            userHasSearched: true
          })
        }
      },
      error: function(err) {
        console.log(err)
      }
    })
  }


  render (){
    if(!this.state.userWantsLogin && !this.state.userHasSearched){
      return (
        <div className = 'container'>
        <div className = 'topBackgroundImageWrapper'>
          <TopBar username={this.state.username} userLoggedIn={this.state.userLoggedIn} handleUserWantsLogin={this.handleUserWantsLogin} handleUserWantsHome={this.handleUserWantsHome} handleUserWantsLogout={this.handleUserWantsLogout}/>

          <div className = 'heroImageContainer'>
            <div className = 'heroContentWrapper'>
              <h2>Unbiased wine reviews</h2>
              <Search className ='SearchBar' search = {this.search}/>
            </div>
          </div>
        </div>
        <div className='topItemsWrapper'>
          <div className='trendingWineListWrapper'>
            <TrendingWineList topReds = {this.state.topReds}/>
          </div>

          <div className='bestValueWineListWrapper'>
            <BestValueWineList topWhites={this.state.topWhites}/>
          </div>

          <div className='UvasChoiceWineListWrapper'>
            <UvasChoiceWineList topRated={this.state.topWhites}/>
          </div>
        </div>


      </div>
    )} else if (this.state.userWantsLogin && !this.state.userHasSearched) {
        //To do: refactor handleUserWantsHome
        return (
          <div className = 'container'>

            <div className = 'loginWrapper'>
              <Login checkUsername = {this.checkUsername} invalidUsername = {this.state.invalidUsername} newUser={this.newUser} invalidPasswordAttempt={this.state.invalidPasswordAttempt} validate={this.validateUser} handleUserWantsHome={this.handleUserWantsLogin} userWantsLogin={this.state.userWantsLogin} userWantsSignUp={this.state.userWantsSignUp} className = 'loginForm' />
            </div>
          </div>
          )
      } else if (this.state.userHasSearched) {
        return (
          <div className="container">
          <div className = 'topBackgroundImageWrapper'>

            <TopBar username={this.state.username} userLoggedIn={this.state.userLoggedIn} handleUserWantsHome={this.handleUserWantsHome} handleUserWantsLogout={this.handleUserWantsLogout} handleUserWantsLogin={this.handleUserWantsLogin}/>
            <div className = 'heroImageContainer'>
              <div className = 'heroContentWrapper'>
                <h2>Unbiased wine reviews</h2>
                <Search className ='SearchBar' search = {this.search}/>
              </div>
            </div>
            </div>
            <ProductList searchHistory={this.state.searchHistory} reviews={this.state.reviews} getReviews={this.getReviews} products={this.state.products} submitReview={this.submitReview}/>
          </div>
          )
      }
  }
}

export default App;
