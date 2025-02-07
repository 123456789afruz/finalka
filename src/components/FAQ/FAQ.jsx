import React, { useState } from 'react';
import s from './FAQ.module.scss';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is virtual reality?',
      answer: 'Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment...'
    },
    {
      question: 'What types of VR services do you offer?',
      answer: 'VR Game Development, VR App Development, 3D Modeling & Animation, 360° Video Production, UI/UX for VR and more.'
    },
    {
      question: 'How much does your VR services cost?',
      answer: 'The price depends on the model and brand of the product. Our products cost from $500 to $30,000 and more.'
    },
    {
      question: 'What equipment do I need to use your VR services?',
      answer: 'For VR Gaming & Applications: VR Headset – Meta Quest 3, HTC Vive, PlayStation VR2, or Valve Index; VR-Ready PC (if required)...'
    },
    {
      question: 'Can I try out your VR services before I commit?',
      answer: 'Yes, sure. You can always try out our products and services. We have an area for testing devices that you like...'
    }
  ];

  return (
    <section className={s.faq}>
      <div className="container">
        <div className={s.title}>
          <h3>FAQ</h3>
          <h1>Frequently Asked Questions</h1>
          <p>At VRNas, we want to make sure that you have all the information you need to make informed decisions about our VR services...</p>
        </div>
        <div className={s.grid}>
          {faqData.map((item, index) => (
            <div className={s.box} key={index}>
              <div className={s.question} onClick={() => toggleAnswer(index)}>
                <h3>{item.question}</h3>
                <img src="/icon-1_choose.svg" alt="Toggle answer" style={{ cursor: 'pointer' }} />
              </div>
              <div className={s.answer} style={{
                maxHeight: openIndex === index ? '200px' : '0px',
                opacity: openIndex === index ? '1' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease, opacity 0.3s ease'
              }}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
