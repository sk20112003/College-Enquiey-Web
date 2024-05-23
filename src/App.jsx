import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Contact/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/Video/Video'
const App = () => {
  const [playstate, setplaystate]=useState(false);

  return(
  <div>
    <Navbar />
    <Hero />
    <div className="container">
      <Title subTitle='our program' Title='what we offer' />
      <Programs />
      <About setplaystate={setplaystate}/>
      <Title subTitle='Gallery' Title='Campus Photos' />
      <Campus />
      <Title subTitle='Contact Us' Title='Get in Touch'/>
      <Contact/>
      <Footer/>
 
    </div>

<Video playstate={playstate} setplaystate={setplaystate}/>
  </div>
)
  }
export default App

