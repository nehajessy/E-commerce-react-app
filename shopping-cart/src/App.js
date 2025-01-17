import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 999, image: "/images/laptop.jpg" },
    { id: 2, name: "Wireless Headphones", price: 199, image: "/images/wireless headphones.jpeg.jpg" },
    { id: 3, name: "Smartphone", price: 799, image: "/images/smartphone.png" },
    { id: 4, name: "AirPods Pro", price: 249, image: "/images/airpods.jpeg.jpg" },
  ];
  

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  // Handle the buy action
  const handleBuy = () => {
    alert("Thank you for your purchase!");
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Cart</h2>
      <div className="cart">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <p>Total: ${total}</p>
            <button onClick={handleBuy}>Buy Now</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;