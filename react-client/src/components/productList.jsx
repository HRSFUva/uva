import React from 'react';
import ProductEntry from './ProductEntry.jsx';

import reviewEntry from './reviewEntry.jsx';

var ProductList = ({products}) => (
  <div>
    <ul>
      {products.map(product =>
        <li key={product.id}><ProductEntry product={product}/></li>
      )}
    </ul>
  </div>
);

export default ProductList;
