import React from 'react';

var UvasChoiceWineEntry = ({uvasChoiceWine}) => (
  <div>
    <div>{uvasChoiceWine.name}</div>
    <div>{uvasChoiceWine.year}</div>
    <div>{uvasChoiceWine.price}</div>
  </div>
);

export default UvasChoiceWineEntry;
