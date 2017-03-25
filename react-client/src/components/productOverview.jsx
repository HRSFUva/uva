import React from 'react';
import ReviewList from './reviewList.jsx'

class ProductOverview extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userWantsWriteReview: false,
      userReview: '',
      userRating: '',
      successfulReview: false
    }
    this.handleUserWantsReview = this.handleUserWantsReview.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
  }

  componentDidMount(){
    this.props.getReviews(this.props.currentWine.wine._id);
  }
  handleUserWantsReview(event){
    this.setState({
      userWantsWriteReview: !this.state.userWantsWriteReview
    })
  }

  handleRatingChange(event){
    this.setState({
      userRating: event.target.value
    })
  }

  handleReviewChange(event){
    this.setState({
      userReview: event.target.value
    })
  }

  handleReviewSubmit(event) {
    if (this.state.userReview.length && this.state.userRating !== '') {
      this.props.submitReview (this.state.userReview, this.state.userRating, this.props.currentWine.wine);
      this.setState({
        userReview: '',
        userRating: '',
        userWantsWriteReview: false,
        successfulReview: true
      })
      this.componentDidMount();
    }
    event.preventDefault();
  }

  render(){
    if(!this.state.userWantsWriteReview) {

      return(
        <div className='container'>

          {/* high level product overview flexbox, description on left, calls to action on right */}
          <div className='productOverviewWrapper'>

            <div className='productName'>
              <h4>
                {this.props.currentWine.wine.name}
                <p>${this.props.currentWine.wine.priceMin}</p>
              </h4>
            </div>

            <div className="reviewButton">
              <input type="button" value="Write a review" onClick={this.handleUserWantsReview} className="productOverviewFlexitem" />
            </div>
            <div>
              {this.props.reviews.length === 0 &&
                <h4> Be the first to Review this Wine!</h4>
                }
            </div>


            <div className='productOverviewHighlightWrapper'>

              <div className='productFlexbox'>

                <div className='productFlexItem'>
                <h4>
                  Name:
                </h4>
                <p> {this.props.currentWine.wine.name}</p><br />
                  <h4>
                    Region:
                  </h4>
                  <p>
                    {this.props.currentWine.wine.region}
                  </p><br/>
                  <h4>
                    Origin:
                  </h4>
                  <p>
                    {this.props.currentWine.wine.origin}
                  </p><br/>
                  <h4>
                    Category:
                  </h4>
                  <p>
                    {this.props.currentWine.wine.type}
                  </p><br/>
                </div>

                <div className='productFlexItem'>
                  <h4>
                    Avg Rating:
                  </h4>
                  <p>
                    {this.props.currentWine.wine.apiRating/20}
                  </p><br/>
                  <h4>
                    Best Price:
                  </h4>
                  <p>
                    ${this.props.currentWine.wine.priceMin}
                  </p>
                </div>

              </div>

            </div>

          </div>
          <ReviewList reviews={this.props.reviews}/>

        </div>
      )
    } else {
      {/* USER CLICKED FOR REVIEW, REDIRECT TO REVIEW PAGE */}

      return(
        <div className='container'>
          <div className='reviewWrapper'>
            <h3>Write a Review</h3>
            <h4>{this.props.currentWine.wine.name}</h4>
            <form className='reviewForm' onSubmit={this.handleReviewSubmit}>
              <input className='reviewFormField' type='text' value={this.state.userReview} onChange={this.handleReviewChange} placeholder='Thanks for offering your input for the community! We really appreciate the effort our members make in helping keeping other wine lovers informed and happy. Thanks again for being awesome, and as a gentle reminder, please adhere to the community guidelines in writing your review.'/><br/>
              <h4>Rating: </h4>
              <input type='button' value={1} onClick={this.handleRatingChange}/>
              <input type='button' value={2} onClick={this.handleRatingChange}/>
              <input type='button' value={3} onClick={this.handleRatingChange}/>
              <input type='button' value={4} onClick={this.handleRatingChange}/>
              <input type='button' value={5} onClick={this.handleRatingChange}/>
              <span></span>
              <input className='submitReview' type='submit' value='Submit' />
            </form>
          </div>
        </div>
      )
    }
  }
}

export default ProductOverview;
            {/*
            <div className='vineyardInfo'>
              <h4> Vineyard:</h4>
              <p>{this.props.product.Vineyard.Name}</p>
              <h4>Appellation:</h4>
              <p> {this.props.product.Appellation.Name}</p>
              <h4>Region:</h4>
              <p> {this.props.product.Appellation.Region.Name}</p>

            </div> */}
