import React from 'react';
// import productOverview from './productOverview.jsx';
// import reviewList from './reviewList.jsx';


var ProductEntry = ({product}) => (
  <div className="productEntry">
    <div className="productEntryFlexbox">
      <img className="productEntryFlexItem" src={product.Labels[0].Url} />
      <h4 className="productEntryFlexItem productEntryFlexItemCenter" >{product.Name} MSRP: {product.PriceRetail}, Low Price: {product.PriceMin}
      </h4>
      <h4 className="productEntryFlexItem" >{product.Vineyard.Name}
      </h4>
    </div>

  </div>
);

export default ProductEntry;
  // <div className="productEntry">
  //   <h4>
  //     <span className="productName">{product.Name}</span>
  //   </h4>
  //   <p>
  //     <span className="productDescription">{product.Description}</span>
  //   </p>
  //   <h4>
  //     <span className="productRating">{product.Rating}</span>
  //   </h4>
  // </div>
