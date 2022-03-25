import React from 'react'
import homeStyles from '../styles/homeimage.module.css'
import {data} from '../data'
import Image from 'next/image'
const HomeImage = () => {

  return (
    <div className={homeStyles.home}>
        <div className={homeStyles.largeImage}>
            <Image src={data[2].url}  alt={data[2].title}/>
        </div>
        <div className={homeStyles.smallImages}>
            <div className={homeStyles.small}>
            <Image src={data[3].url}  alt={data[2].title}/>
            </div>
            <div className={homeStyles.small}>
            <Image src={data[4].url}  alt={data[2].title}/>
            </div>
        </div>

    </div>
  )
}

export default HomeImage