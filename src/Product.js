import React, { useState } from 'react';

const Product = ({ onProductSubmit }) => {
  const [productInfo, setProductInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onProductSubmit(productInfo);
    setProductInfo('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Product:
          <input
            type="text"
            value={productInfo}
            onChange={(e) => setProductInfo(e.target.value)}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Product;
