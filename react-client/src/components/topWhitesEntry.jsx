import React from 'react';

var TopWhitesEntry = (props) => (
 <div className='productEntryFlexbox' onClick={() => { props.handleClickedProductEntry(props.topWhite)}}>
   <div className='entryFlexItem' >
     <h4>{props.topWhite.name}</h4>
     <p>Released: {props.topWhite.year}</p>
     <p> Best Price: ${props.topWhite.priceMin}</p>
   </div>
   <div className='entryFlexItem flexItemRight'>
     <p>Avg Rating: <h4 className='entryRating'>{props.topWhite.apiRating/20}</h4></p>
   </div>
 </div>
);

export default TopWhitesEntry;
