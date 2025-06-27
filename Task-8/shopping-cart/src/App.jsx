import React, { useState } from "react";
import { products } from "./data/products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import "./index.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className="container">
        <div className="products">
          {products.map((item) => (
            <Product key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
        <Cart cartItems={cart} />
      </div>
    </div>
  );
}

export default App;
