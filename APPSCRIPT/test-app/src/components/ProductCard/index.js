import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Import heart and shopping cart icons
import './index.css';

const ProductCard = ({ image, title, price }) => {
  const [liked, setLiked] = useState(false);
  const [inCart, setInCart] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className='price-and-buttons'>
      <p>${price}</p>
      <div>
      <button onClick={toggleLike}>
        <FaHeart color={liked ? 'red' : 'black'} /> {/* Use FaHeart icon and set color based on liked state */}
      </button>
      <button onClick={toggleCart}>
        <FaShoppingCart color={inCart ? 'red' : 'black'} /> {/* Use FaShoppingCart icon and set color based on inCart state */}
      </button>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;