import React from "react";
import cardStyles from "../styles/card.module.css";
import { data } from "../data";
import { BsArrowLeft } from "react-icons/bs";
import CardItem from "../components/CardItem";
import { useRouter } from "next/router";
const CardPage = () => {
  const { push } = useRouter();
  return (
    <div className={cardStyles.cardContainer}>
      <div className={cardStyles.cardTitle}>
        <BsArrowLeft
          onClick={() => push("/")}
          className={cardStyles.arrowIcon}
        />
        <p>Your Card</p>
      </div>
      <div className={cardStyles.itemContainer}>
        {data.map((item) => (
          <CardItem key={item.id} data={item} />
        ))}
      </div>
      <div className={cardStyles.summery}>
        <div className={cardStyles.total}>
          <h3>Total:</h3>
          <h3>$ 10939</h3>
        </div>
        <div className={cardStyles.btn}>
          <span>
            <BsArrowLeft className={cardStyles.btnIcon} />
          </span>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
