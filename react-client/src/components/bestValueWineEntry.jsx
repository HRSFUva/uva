import React from 'react';

var BestValueWineEntry = ({topWhite}) => (
 <div className='productEntryFlexbox'>
    <div className='entryFlexItem' >
      <h4>{topWhite.name}</h4>
      <p>Released: {topWhite.year}</p>
      <p> Best Price: ${topWhite.priceMin}</p>
    </div>
    <div className='entryFlexItem flexItemRight'>
      <p>Avg Rating: <h4 className='entryRating'>{topWhite.apiRating/20}</h4></p>
    </div>
   </div>
);

export default BestValueWineEntry;
