import React from 'react'
import './App.scss'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Learn from './components/Learn/Learn'
import Why from './components/Why/Why'
import Choose from './components/Choose/Choose'
import Team from './components/Team/Team'
import Partners from './components/Partners/Partners'

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Learn/>
      <Why/>
      <Choose/>
      <Team/>
      <Partners/>
    </>
  )
}

export default App
