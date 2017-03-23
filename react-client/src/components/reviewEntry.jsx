import React from 'react';

var ReviewEntry = ({review}) => (
  <div className='reviewEntryFlexbox'>
    {/* insert image of user
    */}
    <div className='reviewEntryFlexItem'>
      <h3>{review.product}</h3>
      <h2>{review.rating} out of 5</h2>
    </div>
    <div className='reviewEntryFlexItem'>
      <h3>Review:</h3>
      <p>{review.content}</p>
    </div>
  </div>
)

export default ReviewEntry;
