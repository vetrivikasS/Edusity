import React, { Component, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'

import Title from './components/Title/Title'
import About from './components/About/About '
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Email/Contact'

import Videoplayer from './components/videoplayer/Videoplayer'
import Programs from './components/programs/Programs'
import Footer from './components/Lower/footer'





const App = () => {

const [playState, setPlayState] =useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Studend Says '/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch '/>
        <Contact/>
        <Footer/>
      </div>
        <Videoplayer playState={playState} setPlayState ={setPlayState} />
        
    </div>
  )
}

export default App
