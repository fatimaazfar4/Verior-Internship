import React from 'react';

const Product = ({ item, addToCart }) => {
  return (
    <div className="product">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default Product;
