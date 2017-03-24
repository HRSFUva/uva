import React from 'react';

var ReviewEntry = ({review}) => (

  <div className='reviewEntryFlexbox'>

    <div className='reviewEntryFlexItem'>
      <h4>User:
        <p className='reviewUsername'>{(review.username === '') ? 'anonymous' : review.username}</p>
      </h4>
      <h4>Review:
        <p className='reviewContext'>{review.context}</p>
      </h4>
      <h4>{(review.rating)/2} out of 5</h4>
    </div>

  </div>
)

export default ReviewEntry;
