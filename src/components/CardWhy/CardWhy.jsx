import React from 'react'
import s from './CardWhy.module.scss'

const CardWhy = ({icon, name, text}) => {
  return (
    <>
      <div className={s.card}>
        <div className={s.wrap}>
            <img src={icon} alt="" />
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default CardWhy
