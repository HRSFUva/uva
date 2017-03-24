import React from 'react';

var UvasChoiceWineEntry = ({uvasChoiceWine}) => (
  <div className='trendingEntry'>
    <div className='entryFlexItem'>
      <h4>{uvasChoiceWine.name}</h4>
      <p>Released: {uvasChoiceWine.year}</p>
      <p> Best Price: ${uvasChoiceWine.price}</p>
    </div>
    <div className='entryFlexItem'>
      <p>Avg Rating: <h4 className='entryRating'>4.7</h4></p>
    </div>
  </div>
);

export default UvasChoiceWineEntry;
