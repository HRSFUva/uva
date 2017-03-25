import React from 'react';

var TrendingWineEntry = ({trendingWine}) => (
   <div className='productEntryFlexbox'>
    <div className='entryFlexItem' >
      <h4>{trendingWine.name}</h4>
      <p>Released: {trendingWine.year}</p>
      <p> Best Price: ${trendingWine.price}</p>
    </div>
    <div className='entryFlexItem entryFlexItemRight'>
      <p >Avg Rating: <h4 className='entryRating'>4.7</h4></p>
    </div>
   </div>

);

export default TrendingWineEntry;
