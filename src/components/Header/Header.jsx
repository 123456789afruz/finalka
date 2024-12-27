import React, { useState } from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {

  const [active, setActive] = useState(false)


  const toggleBurger = () => {
        setActive(!active)
  }


  return (
    <>
      <header className={s.header}>
        <div className="container">
            <nav className={s.nav}>
                <img className={s.logo} src="/header__logo.svg" alt="" />
                <div className={`${s.menu} ${active ? s.active : ''}`}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/'}>About us</Link>
                    <Link to={'/'}>Service</Link>
                    <Link to={'/'}>Page <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3.68789L0 0.687891L0.5375 0.150391L3 2.62539L5.4625 0.16289L6 0.70039L3 3.68789Z" fill="white"/></svg></Link>
                    <Link to={'/'}>Blog <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3.68789L0 0.687891L0.5375 0.150391L3 2.62539L5.4625 0.16289L6 0.70039L3 3.68789Z" fill="white"/></svg></Link>

                <button>Contact us</button>
                </div>
                <img onClick={toggleBurger} src="/burger-menu.png" alt="" className={s.burger} />

            </nav>
        </div>
      </header>
    </>
  )
}

export default Header
