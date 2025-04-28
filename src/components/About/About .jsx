import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={() => setPlayState(true)} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow Leaders Today</h2>
        <p> Multifaceted approach to developing individuals, often in organizations or educational settings, to become effective leaders in the future. This includes identifying potential leaders, providing them with training and development opportunities, and creating a culture that fosters leadership skills and growth. </p>
        <p>This program is crafted to empower participants with the knowledge, skills, and mindset needed to excel in leadership roles and make a lasting impact on their teams and organizations</p>
        <p>Emphasizing the importance of soft skills like communication, teamwork, and empathy, which are crucial for effective leadership.Developing individuals' ability to lead positive social change through community service, awareness campaigns, and non-profit internships.  </p>
      </div>

    </div>
  )
}

export default About 