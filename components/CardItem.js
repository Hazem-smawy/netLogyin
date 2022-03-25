import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { FaMinus } from 'react-icons/fa'
import {TiDeleteOutline} from 'react-icons/ti'
import cardStyles from '../styles/card.module.css'
import Image from "next/image"
const CartItem = ({data}) => {
  const {url,price ,title} = data;
  return (
    <div className={cardStyles.cardItem}>
        <div className={cardStyles.imageBox}>
          <Image src={url} alt={title} className={cardStyles.img} />
        </div>
        <div className={cardStyles.info}>
          <h3 className={cardStyles.title}>
            {title}
          </h3>
          <h3 className={cardStyles.price}>
            $ {price}
          </h3>
          <div className={cardStyles.counter}>
            <p className={cardStyles.plus}>
              <span>+</span>
            </p>
            <p className={cardStyles.quantity}>
              <span  className={cardStyles.quantity}>
                1
              </span>
            </p>
            <p className={cardStyles.minus}>
              <span>-</span>
            </p>
          </div>
        </div>
        <div>
          <TiDeleteOutline  className={cardStyles.delete}/>
        </div>
    </div>
  )
}

export default CartItem