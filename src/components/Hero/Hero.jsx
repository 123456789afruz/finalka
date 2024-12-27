import React from 'react'
import s from './Hero.module.scss'

const Hero = () => {
  return (
    <>
      <section className={s.hero}>
        <div className="container">
          <div className={s.wrap}>
          <h1 className={s.title}>About Us</h1>
            <p className={s.path}>Home <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.53135 4.5L1.03135 9L0.225098 8.19375L3.9376 4.5L0.243847 0.806251L1.0501 0L5.53135 4.5Z" fill="white" /></svg> <span>About us</span></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
