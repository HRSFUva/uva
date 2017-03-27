import React from 'react';

var ReviewEntry = ({review}) => (

  <div className='reviewEntryWrapper'>
    <div className='reviewEntryFlexbox'>
      <div className='reviewEntryFlexItem'>
        <h4>Rated {review.rating} out of 5 by {(review.username === '') ? 'anonymous' : review.username} {review.time ? 'on {review.time}' : ''}
        </h4>
        <p className='reviewContext'>
          {review.content}
        </p>
      </div>
    </div>
    <hr/>
  </div>
)

export default ReviewEntry;
