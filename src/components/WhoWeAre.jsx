import React from 'react'
import './WhoWeAre.css'
import CardSwap, { Card } from './CardSwap'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const WhoWeAre = () => {
     useGSAP(() => {
      gsap.registerPlugin(useGSAP);
        gsap.registerPlugin(ScrollTrigger);

	gsap.fromTo('.whotitle',{opacity:0 ,y:10}, { opacity:1 , duration:1, scale:1 ,y:0 ,stagger:0.3 ,scrollTrigger:{trigger:'.whotitle',start:'bottom bottom'}}); 

},[]);
  return (
    <div className='Who'>
        <div className='whotitle'>
           <span><h1>Who We Are</h1></span> 
            <p>We are a team of passionate educators, innovators, and technologists dedicated to transforming the way students learn. Our mission is to simplify education through smart digital tools, personalized learning experiences, and interactive content that empower every learner to reach their fullest potential. With a deep belief in accessible and engaging education, we strive to bridge the gap between traditional learning and the modern digital world.</p>
        </div>
        
        <div style={{ height: '600px', position: 'relative' }}>
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
  >
    <Card>
      <img className='cardimg' src="https://lh3.googleusercontent.com/r_8KIo_ZSJfaPkXtevLGI1ukoAHTZTl2vVJUSmxT0LtkSrUekt4Gd0tZ6YXMb3qC_NHwJLIw9qsksGoqcwOjrxKXA-ibWnrcUdhf2BJEDXPgPesK97Q=w1440-v1-e30" alt="" />
    </Card>
    <Card>
      <img className='cardimg' src="https://www.responsiveclassroom.org/wp-content/uploads/2016/04/DSC_2388.jpg" alt="" />

    </Card>
    <Card>
      <img className='cardimg' src="https://cdn.prod.website-files.com/6744bdb342b0a7660e7b7c7d/67df6880a31cea90cb90b242_cf84a22d-2547-43c6-986d-58b35d944c7c_classroom-setup-ideas.jpeg" alt="" />
    </Card>
  </CardSwap>
</div>
    </div>
  )
}

export default WhoWeAre