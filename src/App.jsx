import React from 'react'
import './App.scss'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Learn from './components/Learn/Learn'
import Why from './components/Why/Why'

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Learn/>
      <Why/>
    </>
  )
}

export default App
