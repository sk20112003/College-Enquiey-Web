import React from 'react'
import'./About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setplaystate}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{
          setplaystate(true)
        }}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's leader Today</h2>
        <p>In most of the world, a college may be a high school or secondary school, a college of further education, a training institution that awards trade qualifications, a higher-education provider that does not have university</p>
        <p>Education is the transmission of knowledge, skills, and character traits and comes in many forms. Formal education happens in a complex institutional framework, like public schools. Non-formal education is also structured  </p>
       <p>The main academic field investigating education is called education studies. It examines what education is, what aims and effects it has, and how to improve it. Education studies has many subfields, like philosophy, </p>
      </div>
    </div>
  )
}

export default About
