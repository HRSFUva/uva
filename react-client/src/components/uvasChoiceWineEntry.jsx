import React from 'react';

var UvasChoiceWineEntry = ({topRated}) => (
  <div className='productEntryFlexbox'>
   <div className='entryFlexItem' >
     <h4>{topRated.name}</h4>
     <p>Released: {topRated.year}</p>
     <p> Best Price: ${topRated.priceMin}</p>
   </div>
   <div className='entryFlexItem flexItemRight'>
     <p>Avg Rating: <h4 className='entryRating'>{topRated.apiRating/20}</h4></p>
   </div>
  </div>
);

export default UvasChoiceWineEntry;
