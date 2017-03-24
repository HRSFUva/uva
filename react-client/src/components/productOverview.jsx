import React from 'react';
import ReviewList from './reviewList.jsx'

class ProductOverview extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userWantsWriteReview: false,
      userReview: '',
      userRating: '',
      successfulReview: false,
      reviews: [
        {
          product: 'super wine',
          rating: 5,
          content: 'best wine ever!',
          id: 1
        },
        {
          product: 'super wine',
          rating: 5,
          content: 'best wine ever!',
          id: 2
        },
        {
          product: 'super wine',
          rating: 5,
          content: 'best wine ever!',
          id: 3
        }
      ]
    }
    this.handleUserWantsReview = this.handleUserWantsReview.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
  }

  componentDidMount(){
    this.props.getReviews(this.props.product.Id);
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
      console.log('Inside handleReviewSubmit function', this.state.userReview);
      console.log('Inside handleReviewSubmit function', this.state.userRating);
      this.props.submitReview (this.state.userReview, this.state.userRating, this.props.product.Id);
      this.setState({
        userReview: '',
        userRating: '',
        userWantsWriteReview: false,
        successfulReview: true
      })
    }
    event.preventDefault();
  }

  render(){
    if(!this.state.userWantsWriteReview) {

      return(
        <div className='container'>

          {/* high level product overview flexbox, description on left, calls to action on right */}
          <div className='productOverviewWrapper'>
            <div className="productOverviewFlexbox">
              <h3 className="productOverviewFlexitem">
                {this.props.product.Name}<br/>
                {this.props.product.PriceMin}
              </h3>
              <input type="button" value="Write a review" onClick={this.handleUserWantsReview} className="productOverviewFlexitem" />
            </div>

            {/* mid level product desc on left, dynamically generated user content on right */}
            <div className='productOverviewMidFlexbox'>
              <div className='productOverviewMidFlexitem'>
                <h3> Vineyard:</h3><h4>{this.props.product.Vineyard.Name}</h4>
                <h4>Appellation:</h4><p> {this.props.product.Appellation.Name}</p>
                <h4>Region:</h4><p> {this.props.product.Appellation.Region.Name}</p>
              </div>
              <div className='productOverviewMidFlexitem'>
                dynamically generated user content <br/>
                dynamically generated user content <br/>
                dynamically generated user content
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
            <h4>{this.props.product.Name}</h4>
            <form className='reviewForm' onSubmit={this.handleReviewSubmit}>
              <input className='reviewFormField' type='text' value={this.state.userReview} onChange={this.handleReviewChange} placeholder='Thanks for offering your input for the community! We really appreciate the effort our members make in helping keeping other wine lovers informed and happy. Thanks again for being awesome, and as a gentle reminder, please adhere to the community guidelines in writing your review.'/><br/>
              <h4>Rating: </h4>
              <input type='button' value={1} onClick={this.handleRatingChange}/>
              <input type='button' value={2} onClick={this.handleRatingChange}/>
              <input type='button' value={3} onClick={this.handleRatingChange}/>
              <input type='button' value={4} onClick={this.handleRatingChange}/>
              <input type='button' value={5} onClick={this.handleRatingChange}/>
              <span></span>
              <input type='submit' value='Submit' />
            </form>
          </div>
        </div>
      )
    }
  }
}

export default ProductOverview;
