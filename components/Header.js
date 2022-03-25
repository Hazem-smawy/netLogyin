import {GoHeart, GoHome, GoSearch, GoThreeBars} from 'react-icons/go'
import headerStyles from '../styles/header.module.css'
import {RiCloseLine, RiHeart2Line, RiTimer2Line} from 'react-icons/ri'
import Image from 'next/image'
import {AiOutlineLogin,AiOutlineLogout} from 'react-icons/ai'
import { useState } from 'react'
const Header = () => {
    const [showBars,setShowBars] = useState(false);
  return (
    <>
        <div className={`${headerStyles.header} container`}>
            <div className={headerStyles.minu}>
                
                <div className={headerStyles.minuBar}>
                    <div>
                         <GoThreeBars onClick={()=>setShowBars(true)} className={`${headerStyles.icon} ${headerStyles.iconBar}`}/>
                         <div className={`${headerStyles.nav} ${showBars ?headerStyles.active:''}`}>
                            <ul>
                                <div className={headerStyles.userInfo}>
                                    
                                   <h2>User Info</h2>
                                </div>
                                <a>
                                    <GoHome className={headerStyles.icon}/>
                                    Home
                                </a>
                                <a>
                                    <AiOutlineLogin className={headerStyles.icon} />
                                    Sign In
                                </a>
                                <a>
                                    <AiOutlineLogout className={headerStyles.icon}/>
                                    Logout
                                </a>
                               

                            </ul>
                            <RiCloseLine onClick={()=>setShowBars(false)} className={headerStyles.closeIcon}/>
                         </div>
                    </div>
                    
                </div>
                <div className={headerStyles.logo}>
                    LoGyn
                </div>
            </div>

            <div className={headerStyles.favorite}>
                <RiHeart2Line className={headerStyles.icon} />
                <GoSearch  className={headerStyles.icon}/>
            </div>
        </div>
    </>
  )
}

export default Header