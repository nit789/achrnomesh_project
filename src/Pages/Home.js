import React, { useEffect, useState } from "react";
import "../App.css";
import image1 from "../images/bottlein.png";
import image2 from "../images/bottleout.png";
import cart from "../images/Cart.png";
const Home = () => {
  const [isHover, setisHover] = useState(false);

  const handleEnter = () => {
    setisHover(true);
  };
  const handleLeave = () => {
    setisHover(false);
  };

  const disableBottleCapCss = isHover ? "bottle-cap" : "bottle-cap-initial ";
  const disableBottleCss = isHover ? "bottle" : "bottle-initial";
  const disableMessageBorderCss = isHover
    ? "message-border"
    : "message-border-initial";

  const disableMessageCss = isHover ? "message" : "";
  const disableMessageInnerCss = isHover ? "message-inner" : " ";

  const disableKnowMoreCss = isHover ? "know-more" : " ";
  const disableKnowMoreButtonCss = isHover ? "know-more-button" : " ";

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
            {isHover && `Self Cleaning bottle In 60 Seconds`}
          </div>
          <div className={` ${disableMessageInnerCss}  `}>
            {isHover &&` Hit refresh with the intelligently clean bottle built for adventure.`}
          </div>
        </div>
        <button className={`${disableKnowMoreCss} `}>
          <div className={` ${disableKnowMoreButtonCss} `}>  {isHover && `KNOW MORE`}</div>
        </button>
      
      </div>
      <button className="add-to-cart">
          <div className="cart-button">
            <img src={cart}></img>Add to Cart
          </div>
        </button>
    </>
  );
};
export default Home;
