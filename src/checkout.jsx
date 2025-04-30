import { useState } from "react";
import { useNavigate } from "react-router-dom";

const clothingItems = [
    { id: 1, name: "Satin Thong Panties, 2 packs pink", price: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9n_6Lh6tRw2Ioa18ecX2koCVPYpaMD4ZtgA&s" },
    { id: 2, name: "Smart and Sexy Lace g-string, 6 packs blue/red", price: 10, image: "https://www.fredericks.com/cdn/shop/files/F033-0047.TEAL_02.jpg?v=1713472750&width=4000" },
    { id: 3, name: "6 Pack Giselle G String Panties Bundle B", price: 6, image: "https://kissandtell.com.my/cdn/shop/files/82_c5896f6f-3fa1-49ea-8098-abfb3612db66_800x.png?v=1690547554" },
  ];
``  

function Checkout() {

    const navigate = useNavigate();
     // State to manage the cart items
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Checkout process
  const handleCheckout = () => {
    navigate("checkout")
    // Handle checkout logic here (e.g., navigate to a payment gateway)
  };


    return (
        <div className="checkout-page">
          <img src="https://play-lh.googleusercontent.com/SaAApLbrhZtg63AQfgfvzTVqN65kVcVbwg5FY1ERpeb0k1cSpw7KBHoeP6dQft1szw=w416-h235-rw" alt="" width="200"/>
          <p>Flanel Co. clothing store</p>

         <div className="ship">
            <h5>delivery to:</h5>
            <p>Grace Angel Miller</p>
         </div>
    
          {/* Display Clothing Items */}
          <h2 className="topper"> Picked Items</h2>
          <div className="items-list">
            {clothingItems.map(item => (
              <div key={item.id} className="item-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={() => addToCart(item)} className="spec">Add to Cart</button>
              </div>
            ))}
          </div>
    
          {/* Display Cart */}
          {cart.length > 0 && (
            <div className="cart-section">
              <h2>Your Cart</h2>
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                ))}
              </div>
    
              <div className="cart-summary">
                <p>Total Price: ${calculateTotal()}</p>
                <button onClick={handleCheckout}>Proceed to Checkout</button>
              </div>
            </div>
          )}
    
          {/* Display message when cart is empty */}
          {cart.length === 0 && <p>Your cart is empty. Please add items to your cart.</p>}
        </div>
      );
}

export default Checkout;