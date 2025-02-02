import React from 'react'
import s from './Partners.module.scss'

const Partners = () => {
  return (
    <>
      <section className={s.partners}>
        <div className="container">
            <div className={s.wrapper}>
                <h3>Our Trusted Partners</h3>
                <h1>Discover the Companies We Work With</h1>
                <img src="/img-partners.png" alt="" />
            </div>
        </div>
      </section>
    </>
  )
}

export default Partners
