import React from 'react'
import s from './Learn.module.scss'

const Learn = () => {
  return (
    <>
      <section className={s.learn}>
        <div className="container">
            <div className={s.wrapper}>
                <div className={s.box}>
                    <h3>ABOUT US</h3>
                    <h2>Bringing Your Vision to Life: Learn About VRNas</h2>
                    <p>VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light. Our team consists of experienced VR developers, designers, and technicians who are passionate about VR and dedicated to delivering the highest quality work. We use the latest VR hardware and software to create immersive, interactive experiences that are tailored to your specific needs. From initial consultation to final delivery, we are committed to providing exceptional customer service. Our goal is to ensure that you are completely satisfied with every aspect of your VR experience.</p>
                </div>

                <div className={s.img}>
                <img className={s.main} src="/learn-img1.png" alt="" />
                <img className={s.video} src="/video-l.png" alt="" />
                </div>

                
            </div>
        </div>
      </section>
    </>
  )
}

export default Learn
