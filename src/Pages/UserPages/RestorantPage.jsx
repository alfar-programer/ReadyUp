// RestaurantPage.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { restaurantsData } from "../../Data/Data";
import { menuData } from "../../Data/MenuData";
import "../../Styles/RestaurantPage.css";

const RestaurantPage = () => {
  const { id } = useParams();
  const restaurant = restaurantsData.find(r => r.id === Number(id));
  const allItems = menuData.filter(item => item.restaurantId === Number(id));

  const [cart, setCart] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  if (!restaurant) {
    return <div className="restaurant-not-found">Restaurant not found</div>;
  }

  // Filter menu items by search term (name or description)
  const filteredItems = allItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Cart handlers
  const handleIncrease = (itemId) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const handleDecrease = (itemId) => {
    setCart(prev => {
      const current = prev[itemId] || 0;
      if (current <= 1) {
        const newCart = { ...prev };
        delete newCart[itemId];
        return newCart;
      } else {
        return { ...prev, [itemId]: current - 1 };
      }
    });
  };

  // Prepare cart items with full data
  const cartItems = Object.entries(cart).map(([itemId, quantity]) => {
    const item = menuData.find(i => i.id === Number(itemId));
    return { ...item, quantity };
  });

  // Checkout handler
  const handleCheckout = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const restaurantName = restaurant.name;
    const itemsSummary = cartItems.map(item => `${item.name} (x${item.quantity})`).join(', ');

    alert(`✅ Order Confirmed!\n\nRestaurant: ${restaurantName}\nItems: ${itemsSummary}\nTotal: EGP ${total}`);

    // Optional: clear cart after order
    // setCart({});
  };

  return (
    <section className="restaurant-page-main">
      <div className="maincontainer">
        {/* Header Section */}
        <div
  className="restaurant-header-bg"
  style={{
    backgroundImage: `url(${restaurant.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '60px 20px 40px',
    position: 'relative',
  }}
>
  <div className="header-overlay" style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Semi-transparent white overlay
    zIndex: 1,
  }}></div>

  <div className="header-content" style={{
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  }}>
    <div className="back-link">
      <Link to="/#restaurants">&larr; Back to restaurants</Link>
    </div>
    <h1 className="restaurant-name">{restaurant.name}</h1>
    <p className="cuisine-type">{restaurant.cuisine}</p>
    <p className="restaurant-stats">
      ⭐ {restaurant.rating} {restaurant.review} • {restaurant.time} • {restaurant.distance}
    </p>
  </div>
</div>

        {/* Main Content: Order Card + Menu */}
        <div className="restaurant-page-content">
          {/* Order Summary (Right Side) */}
          <div className="your-order-card">
            <h3>Your Order</h3>
            {cartItems.length > 0 ? (
              <>
                <div className="order-items-list">
                  {cartItems.map(item => (
                    <div key={item.id} className="order-item">
                      <div>
                        <span>{item.name}</span>
                        <span className="item-quantity">x{item.quantity}</span>
                      </div>
                      <span>EGP {item.price * item.quantity}</span>
                    </div>
                  ))}
                  <div className="order-total">
                    <strong>Total: EGP {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}</strong>
                  </div>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Checkout
                </button>
              </>
            ) : (
              <p className="empty-order">No items added yet</p>
            )}
          </div>

          {/* Menu Section (Left Side) */}
          <div className="menu-items-section">
            <div className="search-and-menuitems">
              <input
                type="text"
                placeholder="Search menu..."
                className="menu-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="menu-items-main">
              <h2>Menu</h2>
              <div className="menu-items-container">
                {filteredItems.length > 0 ? (
                  filteredItems.map(item => {
                    const quantity = cart[item.id] || 0;
                    return (
                      <div key={item.id} className="menu-item-card">
                        <div className="menu-item-info">
                          <h3 className="menu-item-name">{item.name}</h3>
                          <p className="menu-item-description">{item.description}</p>
                          <span className="menu-item-price">EGP {item.price}</span>
                        </div>

                        {quantity === 0 ? (
                          <button
                            className="add-to-order-btn"
                            onClick={() => handleIncrease(item.id)}
                          >
                            +
                          </button>
                        ) : (
                          <div className="quantity-controller">
                            <button
                              className="qty-btn minus"
                              onClick={() => handleDecrease(item.id)}
                            >
                              −
                            </button>
                            <span className="qty-value">{quantity}</span>
                            <button
                              className="qty-btn plus"
                              onClick={() => handleIncrease(item.id)}
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <p className="no-menu-items">
                    {searchTerm ? `No items match "${searchTerm}"` : 'No menu items available.'}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantPage;