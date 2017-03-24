import React from 'react';

var BestValueWineEntry = ({bestValueWine}) => (
  <div className='trendingEntry'>
    <div className='entryFlexItem'>
      <h4>{bestValueWine.name}</h4>
      <p>Released: {bestValueWine.year}</p>
      <p> Best Price: ${bestValueWine.price}</p>
    </div>
    <div className='entryFlexItem'>
      <p>Avg Rating: <h4 className='entryRating'>4.7</h4></p>
    </div>
  </div>
);

export default BestValueWineEntry;
