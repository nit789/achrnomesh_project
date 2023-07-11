import React, { useEffect, useState } from "react";
import "../App.css";
import image1 from "../images/bottlein.png";
import image2 from "../images/bottleout.png";
import cart from "../images/Cart.png";
const Home = () => {
  const [check, setCheck] = useState(false);

  const handleEnter = () => {
    setCheck(true);
  };
  const handleLeave = () => {
    setCheck(false);
  };
  console.log(check);
  const disableBottleCapCss = check ? "bottle-cap" : "bottle-cap-initial ";
  const disableBottleCss = check ? "bottle" : "bottle-initial";
  const disableMessageBorderCss = check
    ? "message-border"
    : "message-border-initial";

  const disableMessageCss = check ? "message" : "";
  const disableMessageInnerCss = check ? "message-inner" : " ";

  const disableKnowMoreCss = check ? "know-more" : " ";
  const disableKnowMoreButtonCss = check ? "know-more-button" : " ";

  return (
    <>
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="nav-images"
      >
        <div className={` ${disableBottleCapCss}  `}>
          <img src={image2}></img>
        </div>
        <div className={` ${disableBottleCss} `}>
          <img src={image1}></img>
        </div>
        <div className={` ${disableMessageBorderCss} `}>
          <div className={` ${disableMessageCss}`}>
            {check && `Self Cleaning bottle In 60 Seconds`}
          </div>
          <div className={` ${disableMessageInnerCss}  `}>
            {check &&
              ` Hit refresh with the intelligently clean bottle built for adventure.`}
          </div>
        </div>
        <button className={`${disableKnowMoreCss} `}>
          <div className={` ${disableKnowMoreButtonCss} `}>
            {check && `KNOW MORE`}
          </div>
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
