import Image from 'next/image'
import { RiHeart2Fill, RiHeart2Line } from 'react-icons/ri'
import prodStyles from '../styles/products.module.css'
import { useState } from 'react'
import Link from 'next/link'
const ProductItem = ({product}) => {
  
    const [love,setLove] = useState(true)
    const {url,price,title} = product;
  return (
    <div className={prodStyles.productItem}>
        <div className={prodStyles.productImage}>
            <Link href='/productPage/[id]' as={`/productPage/${product.id}`}>
                <a>
                <Image src={url} alt={title} />
                </a>
            </Link>
        </div>
        <div className={prodStyles.details}>
            <div className={prodStyles.priceLove}>
                <h3>$ {price}</h3>
                {
                    love ?<RiHeart2Line onClick={()=>setLove(false)}  className={prodStyles.heartIcon}/>:
                    <RiHeart2Fill onClick={()=>setLove(true)}  className={prodStyles.heartIconFall}/>
                }
            </div>
            <div className={prodStyles.productTitle}>
                {title.length > 20 ?title.substr(0,20) +"..." :title }
            </div>
        </div>
    </div>
  )
}

export default ProductItem