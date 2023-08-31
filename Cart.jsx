import React from 'react';;
import ProductItem from '../components/ProductItem';
import react, {useState, useEffect} from 'react'
import grad1 from '../assets/Graduation/grad1.jpg'
import grad2 from '../assets/Graduation/grad2.jpg'
import grad3 from '../assets/Graduation/grad3.jpg'

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your Flask API when the component mounts
    fetch('http://127.0.0.1:5000/prouducts')
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data.prouducts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);



  // Function to add an item to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    product.image = getImageForProduct(product.id);
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const getImageForProduct = (productId) => {
    switch (productId) {
      case 1:
        return grad1;
      case 2:
        return grad2;
      case 3:
        return grad3;
      default:
        return null; // Return a default image or handle missing images
    }
  };


  return (
    <div className="mt-20" >
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-info">
            <span>{item.name}</span>
            <span>Price: ${item.price}</span>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </li>
        ))}
      </ul>

      <h2>Available Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>Price: ${product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Cart;