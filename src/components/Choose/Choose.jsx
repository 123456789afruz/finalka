import React, { useState } from 'react';
import s from './Choose.module.scss';

const Choose = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleInfo = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const infoSections = [
    {
      title: 'Passionate and Experienced Team',
      description:
        'We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.',
      icon: '/icon-1_choose.svg',
    },
    {
      title: 'Cutting-Edge Technology',
      description:
        'We use the latest VR technologies to ensure that our clients receive the most advanced and immersive experiences available. From hardware to software, we stay at the forefront of innovation.',
      icon: '/icon-1_choose.svg',
    },
    {
      title: 'Tailored Solutions',
      description:
        'We understand that every project is unique, and we work closely with our clients to create customized VR solutions that meet their specific needs and goals.',
      icon: '/icon-1_choose.svg',
    },
  ];

  return (
    <>
      <section className={s.choose}>
        <div className="container">
          <div className={s.wrapper}>
            <img className={s.main} src="/img-1_choose.png" alt="VR showcase" />
            <div className={s.content}>
              <h2 className={s.title}>WHY CHOOSE US</h2>
              <h1>Why Choose Us for Your VR Needs</h1>
              {infoSections.map((info, index) => (
                <div className={s.info} key={index}>
                  <div className={s.name} onClick={() => toggleInfo(index)}>
                    <h3>{info.title}</h3>
                    <img src={info.icon} alt={`${info.title} icon`} />
                  </div>
                  <div
                    className={`${s.description} ${
                      activeIndex === index ? s.active : ''
                    }`}
                  >
                    <p>{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
