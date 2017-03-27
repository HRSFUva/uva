import React from 'react';

var TopRedsEntry = (props) => (
   <div className='productEntryFlexbox' onClick={() => { props.handleClickedProductEntry(props.topRed) }}>
    <div className='entryFlexItem' >
      <h4>{props.topRed.name}</h4>
      <p>Released: {props.topRed.year}</p>
      <p> Best Price: ${props.topRed.priceMin}</p>
    </div>
    <div className='entryFlexItem flexItemRight'>
      <p>Avg Rating: </p>
      <h4 className='entryRating'>{props.topRed.apiRating/20}</h4>
    </div>
   </div>

);

export default TopRedsEntry;
