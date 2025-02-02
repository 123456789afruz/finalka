import React, { useState } from 'react';
import s from './Team.module.scss';
import TeamCard from '../TeamCard/TeamCard';

const initialTeam = [
  { name: 'Bondan Prabowo', job: 'CEO', img: '/team1.png' },
  { name: 'Bayu Aji', job: 'VR Development', img: '/team2.png' },
  { name: 'Agung Brandon', job: 'VR Artist', img: '/team3.png' },
  { name: 'Aril Laso', job: 'UI / UX Designer', img: '/team4.png' }
];

const Team = () => {
  const [teamMembers, setTeamMembers] = useState(initialTeam);
  const [hasAdded, setHasAdded] = useState(false);

  const toggleMembers = () => {
    if (hasAdded) {
      setTeamMembers(initialTeam);
    } else {
      const newMembers = Array(16).fill(null).map((_, index) => ({
        name: `New Member ${index + 1}`,
        job: 'New Role',
        img: `/team${(index % 4) + 1}.png`
      }));
      setTeamMembers([...teamMembers, ...newMembers]);
    }
    setHasAdded(!hasAdded);
  };

  return (
    <section className={s.team}>
      <div className="container">
        <div className={s.title}>
          <div>
            <h3 className={s.subtitle}>OUR TEAM</h3>
            <h1>Our Professionals Team</h1>
          </div>
          
        </div>
        <div className={s.wrapper} >
          {teamMembers.map((member, index) => (
            <TeamCard key={index} name={member.name} job={member.job} img={member.img} />
          ))}
        </div>
        <button className={s.view} onClick={toggleMembers}>{hasAdded ? 'HIDE' : 'SEE ALL'}</button>
      </div>
    </section>
  );
};

export default Team;
