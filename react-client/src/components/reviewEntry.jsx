import React from 'react';

var ReviewEntry = ({review}) => (
  <div>
    {/* insert image of user
    */}
    <div>
      {review.product}
    </div>
    <div>
      {review.rating}
    </div>
    <div>
      {review.content}
    </div>
  </div>
)

export default ReviewEntry;
