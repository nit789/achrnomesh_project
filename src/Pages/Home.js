import React from "react";
import "../App.css";
import image1 from "../images/bottlein.png";
import image2 from "../images/bottleout.png";
import cart from "../images/Cart.png";
const Home = () => {
  return (
    <>
      <div className="nav-images">
        <div className="bottle-cap">
          <img src={image2}></img>
        </div>
        <div className="bottle">
          <img src={image1}></img>
        </div>
        <div className=" message-border">
          <div className="message">Self Cleaning bottle In 60 Seconds</div>
          <div className="message-inner">
            Hit refresh with the intelligently clean bottle built for adventure.
          </div>
        </div>
        <button className="know-more">
          <div className="know-more-button">KNOW MORE</div>
        </button>
        <button className="add-to-cart">
          <div className="cart-button">
            <img src={cart}></img>Add to Cart
          </div>
        </button>
      </div>
    </>
  );
};
export default Home;
