import React from 'react';

var TopRedsEntry = ({topRed}) => (
   <div className='productEntryFlexbox'>
    <div className='entryFlexItem' >
      <h4>{topRed.name}</h4>
      <p>Released: {topRed.year}</p>
      <p> Best Price: ${topRed.priceMin}</p>
    </div>
    <div className='entryFlexItem flexItemRight'>
      <p>Avg Rating: <h4 className='entryRating'>{topRed.apiRating/20}</h4></p>
    </div>
   </div>

);

export default TopRedsEntry;
