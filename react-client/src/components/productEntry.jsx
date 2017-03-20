import React from 'react';
// import productOverview from './productOverview.jsx';
// import reviewList from './reviewList.jsx';


var ProductEntry = ({product}) => (
  <div className="productEntry">
    {/* insert image of product
    */}
    <div className="productName">{product.Name}</div>
    <div className="productRating">{product.Rating}</div>
    <div className="productDescription">{product.Description}</div>
    {/* hello */}
  </div>
);

export default ProductEntry;
