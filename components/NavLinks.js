import navStyles from '../styles/navlink.module.css'
import Link from 'next/link'
import {useRouter} from  'next/router'
const NavLinks = () => {
  const {asPath} = useRouter();
 
  return (
    <div className={navStyles.navlink}>
      <ul>
        <Link href='/'>
          <a className={`${asPath === '/' && navStyles.active}`}>
            HOME
          </a>
        </Link>
        <Link href='/categoriesPage'>
          <a className={`${asPath === '/categoriesPage' && navStyles.active}`}>
            CATEGORIS
          </a>
        </Link>
        <Link href='/'>
          <a>
            BRAND
          </a>
        </Link>
      </ul>
    </div>
  )
}

export default NavLinks