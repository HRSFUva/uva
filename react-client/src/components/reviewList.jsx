import React from 'react';
import ReviewEntry from './reviewEntry.jsx';

var ReviewList = ({reviews}) => (
  <div>
    <ul className="reviewList">
    {reviews.map((review) =>
      <li key={review._id}><ReviewEntry review={review}/></li>
    )}
    </ul>
  </div>
);

export default ReviewList;
