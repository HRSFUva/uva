import React from 'react';
import productOverview from './productOverview.jsx';
import reviewList from './reviewList.jsx';


var productEntry = ({product}) => (
  <div>
    {/* insert image of product
    */}
    <div>{product.name}</div>
    <div>{product.rating}</div>
    <div>{product.description}</div>
  </div>
);

export default productOverview;


export default productEntry;
