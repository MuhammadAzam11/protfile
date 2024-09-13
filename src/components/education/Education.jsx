import React, { useEffect, useRef } from 'react'
import './Education.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import EducationCard from './educationcard/EducationCard';
import { EDUCATION } from '../../utils/Data';
import Slider from 'react-slick';
import Aos from 'aos';
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    Aos.init()
    
  }, [])
  const sliderRef=useRef();
  const settings={
    dots:false,
    infinite:true,
    speed:500,
    slideToShow:2,
    slideToScroll:1,
    arrows:false,
    responsive:[
      {
        breakpoint:769,
        settings:{
          slideToShow:1,
         slideToScroll:1,
        },
      },
    ],
  };
  const sliderRight=()=>{
    sliderRef.current.slickNext();
  };
  const sliderLeft=()=>{
    sliderRef.current.slickPrev();
  };
  
  return (
    <section className='education-contanier' id='Education'>
      <h5>Education</h5>
      <div className='education-content'>
        <div className='arrow-right' onClick={sliderRight}>
          <span><IoIosArrowForward /> </span>
        </div>
        <div className='arrow-left' onClick={sliderLeft}>
          <span><IoIosArrowBack /></span>
        </div>
        <div
            data-aos="flip-left"
          data-aos-duration="1000"
          >
        <Slider ref={sliderRef} {...settings}>
        {EDUCATION.map((item) => (
          <EducationCard key={item.title} details={item} />
        ))}
        </Slider>
        </div>
      </div>
    </section>
  )
}

export default Education