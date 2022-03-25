import React from 'react'
import {  BsArrowLeft } from 'react-icons/bs'
import ProductItem from './ProductItem'
import prodStyles from '../styles/products.module.css'
import { AiOutlineDown } from 'react-icons/ai'
import { useRouter } from 'next/router'
const ProductsList = ({data}) => {
    const {push} = useRouter();

  return (
    <div>
        <div className={prodStyles.catTitle}>
            <BsArrowLeft onClick={()=> push('/categoriesPage')} className={prodStyles.arrowIcon}/>
            <p>TITEL OF CATEGORIES</p>
        </div>
        <div className={prodStyles.selectBox}>
           <span>Latest</span>
            <span><AiOutlineDown className={prodStyles.down} /></span>
        </div>
        <p className={prodStyles.productsPara}>
            All You Need is Here 
        </p>
        <div className={prodStyles.productsContainer}>
            {
                data.map(product=>(
                    <ProductItem key={product.id} product={product} />
                ))
            }
        </div>
    </div>
  )
}

export default ProductsList