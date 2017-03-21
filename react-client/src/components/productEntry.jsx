import React from 'react';
// import productOverview from './productOverview.jsx';
// import reviewList from './reviewList.jsx';


var ProductEntry = ({product}) => (
  <div className="productEntry">
    <h4>
      <span className="productName">{product.Name}</span>
    </h4>
    <p>
      <span className="productDescription">{product.Description}</span>
    </p>
    <h4>
      <span className="productRating">{product.Rating}</span>
    </h4>
  </div>
);

export default ProductEntry;
