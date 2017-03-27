import React from 'react';

var UvasChoiceWineEntry = (props) => (
  <div className='productEntryFlexbox'>
   <div className='entryFlexItem' >
     <h4>{props.topRated.name}</h4>
     <p>Released: {props.topRated.year}</p>
     <p> Best Price: ${props.topRated.priceMin}</p>
   </div>
   <div className='entryFlexItem flexItemRight'>
     <p>Avg Rating: <h4 className='entryRating'>{props.topRated.apiRating/20}</h4></p>
   </div>
  </div>
);

export default UvasChoiceWineEntry;
