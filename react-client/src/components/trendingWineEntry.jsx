import React from 'react';

var TrendingWineEntry = ({trendingWine}) => (
  <div>
    <div>{trendingWine.name}</div>
    <div>{trendingWine.year}</div>
    <div>{trendingWine.price}</div>
  </div>
);

export default TrendingWineEntry;
