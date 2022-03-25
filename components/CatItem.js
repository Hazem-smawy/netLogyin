import React from 'react'
import Image from 'next/image'
import catStyles from '../styles/categories.module.css'
const CatItem = ({url,title}) => {
  return (
    <div className={catStyles.catItemSecond}>
         <h3>{title}</h3>
        <Image className={catStyles.itemImage} src={url} alt={title} />
    </div>
  )
}

export default CatItem