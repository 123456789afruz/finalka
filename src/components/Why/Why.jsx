import React from 'react'
import s from './Why.module.scss'
import CardWhy from '../CardWhy/CardWhy'

const Why = () => {
  return (
    <>
      <section className={s.why}>
        <div className="container">
            <h3 className={s.title}>WHY CHOOSE US</h3>
            <h1>Empowering Your Virtual Reality Experience</h1>
            <div className={s.wrapper}>
                <CardWhy icon='/why-icon1.png' name='Expertise' text='Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service'/>
                <CardWhy icon='/why-icon2.png' name='Customization' text='Every client is unique, and we believe every VR experience should be too. We will work with you to create a customized solution that meets your specific needs and goals'/>
                <CardWhy icon='/why-icon3.png' name='Service' text='We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you are satisfied with every aspect of your VR experience.'/>
                
            </div>
        </div>
      </section>
    </>
  )
}

export default Why
