import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import addStyles from "../styles/addtocard.module.css";
import Link from 'next/link'
const AddToCard = () => {
  return (
    <Link href='/CardPage'>
      <a>
        <div className={addStyles.addBox}>
          <FaShoppingBag className={addStyles.addIcon} />
        </div>
      </a>
    </Link>
  );
};

export default AddToCard;
