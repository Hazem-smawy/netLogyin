import React from 'react'
import adminStyles from '../styles/Admin/login.module.css'
const Login = () => {
  return (
    <div className={adminStyles.login}>
        <form>
            <input type='text' />
            <input type='password'/>
        </form>
    </div>
  )
}

export default Login