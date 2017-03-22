import React from 'react';

var BestValueWineEntry = ({bestValueWine}) => (
  <div>
    <div>{bestValueWine.name}</div>
    <div>{bestValueWine.year}</div>
    <div>{bestValueWine.price}</div>
  </div>
);

export default BestValueWineEntry;
