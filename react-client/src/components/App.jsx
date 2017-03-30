import React from 'react';
import Search from './searchBar.jsx';
import TopWine from './topWines.jsx';
import $ from 'jquery';
import Login from './loginForm.jsx';
import ProductList from './productList.jsx';
import TopBar from './TopBar.jsx';
import TopRedsList from './topRedsList.jsx';
import TopWhitesList from './topWhitesList.jsx';
import UvasChoiceWineList from './uvasChoiceWineList.jsx';
import ProductOverview from './productOverview.jsx';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      products: [],
      reviews: [],
      topReds: [],
      topWhites: [],
      topRated: [],
      uvasChoice: [],
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
      userWantsProductList: false,
      userClickedEntry: false,
      currentWine: null
    }

    this.search = this.search.bind(this);
    // this.handleUserWantsLogin = this.handleUserWantsLogin.bind(this);
    // this.validateUser = this.validateUser.bind(this);
    // this.newUser = this.newUser.bind(this);
    // this.handleUserWantsLogout = this.handleUserWantsLogout.bind(this);
    // this.checkUsername = this.checkUsername.bind(this);
    this.handleUserWantsHome = this.handleUserWantsHome.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.init = this.init.bind(this);
    this.handleUserWantsProductList = this.handleUserWantsProductList.bind(this);
    this.handleClickedProductEntry = this.handleClickedProductEntry.bind(this);
  }

  componentDidMount(){
    this.init();
  }

  handleUserWantsHome(event) {
    this.setState({
      userWantsHomePage: true,
      userHasSearched: false,
      userWantsLogin: false,
      userWantsProductList: false,
      userClickedEntry: false,
    })
  }


  handleUserWantsLogin(event) {
    this.setState({
      userWantsLogin: true,
      invalidPasswordAttempt: false,
      userWantsHomePage: false,
      userHasSearched: false,
      userWantsProductList: false,
    })
  }

  // handleUserWantsLogout(event) {
  //   this.setState({
  //     userLoggedIn: false,
  //     userWantsHomePage: true,
  //     userWantsProductList: false,
  //     userWantsLogin: false,
  //     username: '',
  //     userID: ''
  //   })
  // }

  handleUserWantsProductList(event){
    console.log('inside  product list handler')
    this.setState({
      userWantsProductList: !this.state.userWantsProductList,
    })
  }

  init(){
    var context = this;
    $.ajax({
      url: '/init',
      success: function (data) {
        context.setState({
          topReds: data.top10Reds,
          topWhites: data.top10Whites,
          topRated: data.topRated,
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
      url: '/reviews',
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
      url: '/review',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        review: review,
        rating: rating,
        name: name,
        username: this.state.username,
        product_id: product_id,
        time: Date
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

  // validateUser (username, password) {
  //   var context = this;

  //    $.ajax({
  //      url: '/login',
  //      type: 'POST',
  //      contentType: 'application/json',
  //      data: JSON.stringify({
  //        username: username,
  //        password: password
  //      }),
  //      success: function(data){
  //        if(data.length===0){
  //         console.log('zeroData');
  //         context.setState({
  //           invalidPasswordAttempt: true
  //         })
  //        } else {
  //          context.setState({
  //           userLoggedIn: !context.state.userLoggedIn,
  //           username: data[0].name,
  //           userID: data[0]._id,
  //           userWantsLogin: !context.state.userWantsLogin,
  //           invalidPasswordAttempt: false
  //          });
  //        }
  //      },
  //      error: function(err){
  //        console.log('error after validateUser', err);
  //      }
  //    })
  //  }

   // checkUsername (username) {
   //  var context = this;
   //  $.ajax({
   //    url: '/users/username',
   //    type: 'POST',
   //    contentType: 'application/json',
   //    data: JSON.stringify({
   //      username: username
   //    }),
   //    success: function(data){
   //      if(data.length > 0) {
   //        context.setState({
   //          invalidUsername: true
   //        })
   //      } else {
   //        context.setState({
   //          invalidUsername: false
   //        })
   //      }
   //    }
   //  })
   // }

   // newUser (username, password) {
   //  var context = this;
   //  $.ajax({
   //    url: '/signup',
   //    type: 'POST',
   //    contentType: 'application/json',
   //    data: JSON.stringify({
   //      username: username,
   //      password: password
   //    }),
   //    success: function(data) {
   //      console.log('success response from newUserAJAX', data)
   //      context.setState({
   //        userWantsHomePage: true,
   //        userWantsLogin: false,
   //        userWantsProductList: false,
   //        username: data.name,
   //        userID: data._id,
   //        userLoggedIn: true
   //      })
   //    },
   //    error: function(error) {
   //      console.log('error in adding user', error);
   //    }
   //  })
   // }

  search (query, price) {
    var context = this;
    var searchHistory = this.state.searchHistory;
    searchHistory[searchHistory.length] = query;
    console.log('serach histnig' , searchHistory);
    this.setState({
      searchHistory: searchHistory,
      userHasSearched: true,
      userWantsProductList: true,
      userWantsHomePage: false
    })
    console.log('query inside search', query);
    console.log('price inside search', price);
    $.ajax({
      url: '/search',
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

  handleClickedProductEntry(wine) {
    console.log('inside clicked product entry',wine);
    if (wine) {
      this.setState({
        userClickedEntry: true,
        currentWine: {
          wine: wine
        },
        userWantsHomePage: false
      })
    }
  }


  render (){
    var homepageWines = (<div className='topItemsWrapper'>
          <div className='trendingWineListWrapper'>
            <TopRedsList handleClickedProductEntry={this.handleClickedProductEntry} topReds = {this.state.topReds}/>
          </div>
          <div className='bestValueWineListWrapper'>
            <TopWhitesList handleClickedProductEntry={this.handleClickedProductEntry} topWhites={this.state.topWhites}/>
          </div>

          <div className='UvasChoiceWineListWrapper'>
            <UvasChoiceWineList handleClickedProductEntry={this.handleClickedProductEntry} topRated={this.state.topRated}/>
          </div>
        </div>);

    var topbar =   <TopBar username={this.state.username} userLoggedIn={this.state.userLoggedIn} handleUserWantsLogin={this.handleUserWantsLogin} userHasSearched={this.state.userHasSearched}/>;
    var search =  <div className = 'heroImageContainer'>
            <div className = 'heroContentWrapper'>
              <h2>Unbiased wine reviews</h2>
              <Search className ='SearchBar' search = {this.search}/>
            </div>
          </div>

    if(!this.state.userWantsLogin && !this.state.userHasSearched){
      return (
        <div className = 'container'>

          <div className = 'topBackgroundImageWrapper'>
            {topbar}
            <a href="/login/facebook">Sign Up or Login with Facebook</a>
            {search}
          </div>
        <div>


          {!this.state.userClickedEntry ?
            homepageWines : (<ProductOverview reviews={this.state.reviews} currentWine={this.state.currentWine} getReviews={this.getReviews} submitReview={this.submitReview}/>)
          }
        </div>
      </div>
    )} else if (this.state.userWantsLogin && !this.state.userHasSearched) {
        //To do: refactor handleUserWantsHome
        return (
          <div className = 'container'>
            <div className='heroFullPage'>
            {topbar}
              <div className = 'loginWrapper' >
                  
                  <Login checkUsername = {this.checkUsername} invalidUsername = {this.state.invalidUsername} newUser={this.newUser} invalidPasswordAttempt={this.state.invalidPasswordAttempt} validate={this.validateUser} handleUserWantsHome={this.handleUserWantsLogin} userWantsLogin={this.state.userWantsLogin} />
              </div>
            </div>
          </div>
          )
      } else if (this.state.userHasSearched) {
        return (

          <div className="container login">
            <div className = 'topBackgroundImageWrapper'>
              {topbar}
              {search}
            </div>

            <ProductList handleUserWantsProductList={this.handleUserWantsProductList} searchHistory={this.state.searchHistory} reviews={this.state.reviews} getReviews={this.getReviews} products={this.state.products} submitReview={this.submitReview} userHasSearched={this.state.userHasSearched} userWantsProductList={this.state.userWantsProductList}/>
          </div>
          )

    }
  }
}

export default App;
