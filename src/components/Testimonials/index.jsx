import React, { useRef } from 'react'
import './Testimonial.css'
import Next_icon from '../../assets/next-icon.png'
import Back_icon from '../../assets/back-icon.png'
import User_1 from '../../assets/user-1.png'
import User_2 from '../../assets/user-2.png'
import User_3 from '../../assets/user-3.png'
import User_4 from '../../assets/user-4.png'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;


const SlideForward = ()=>{
    if(tx > -50){
        tx -=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

}
const SlideBackward = ()=>{
    if(tx < 0){
        tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

}


  return (
    <div className='testimonials'>
       <img src={Next_icon} alt="" className='next-btn' onClick={SlideForward}/>
       <img src={Back_icon} alt="" className='back-btn' onClick={SlideBackward} />
       <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={User_1} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursure my degree at Edustiy was one of the best decision I've ever made.The supportive community ,state-of-the-art facilities,and commitement to academic excellence have truly exceded my expections.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={User_2} alt="" />
                        <div>
                            <h3>Vetrivikas</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursure my degree at Edustiy was one of the best decision I've ever made.The supportive community ,state-of-the-art facilities,and commitement to academic excellence have truly exceded my expections.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={User_3} alt="" />
                        <div>
                            <h3>Keerthana</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursure my degree at Edustiy was one of the best decision I've ever made.The supportive community ,state-of-the-art facilities,and commitement to academic excellence have truly exceded my expections.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={User_4} alt="" />
                        <div>
                            <h3>AjayAkash</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursure my degree at Edustiy was one of the best decision I've ever made.The supportive community ,state-of-the-art facilities,and commitement to academic excellence have truly exceded my expections.</p>
                </div>
            </li>
        </ul>
       </div>
    </div>
  )
}

export default Testimonials