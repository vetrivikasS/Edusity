import React, { Component, useState } from 'react'
import Navbar from './components/navbar/index'
import Hero from './components/Hero/index'

import Title from './components/Title/Title'
import About from './components/About/index'
import Campus from './components/Campus/index'
import Testimonials from './components/Testimonials/index'
import Contact from './components/Email/Contact'


import Programs from './components/programs/index'
import Footer from './components/Lower/footer'
import Videoplayer from './components/Playbutton/videoplayer'





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
