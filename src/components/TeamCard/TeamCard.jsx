import React from 'react'
import s from './TeamCard.module.scss'

const TeamCard = ({name, job, img}) => {
  return (
    <>
      <div className={s.teamcard}>
          <div className={s.name}>
            <h3>{name}</h3>
            <p>{job}</p>
          </div>
            <img src={img} alt="" />
      </div>
    </>
  )
}

export default TeamCard
