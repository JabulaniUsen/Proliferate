// Hero.js
import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Swiper from 'react-id-swiper';
import 'swiper/css/bundle';

import sliderImage1 from '../../../Assets/slide1.png'
import sliderImage2 from '../../../Assets/Slide2.png'
import sliderImage3 from '../../../Assets/slide3.png'
import bgImg1 from '../../../Assets/none.png'
import bgImg2 from '../../../Assets/Ellipse.png'

const slides = [
  { 
    id: 1, 
    heading: "Unlock Your Potential with Proliferate",
    subheading: "Your Path to Personalized Learning",
    description: 'Welcome to Proliferate, your gateway to a world of knowledge. Our platform connects you with experienced tutors, interactive virtual classrooms, and a diverse range of subjects to empower your learning journey.',
    button: "Get Started Today",
    backgroundColor: "#F0F9F8",
    textColor: "#000",
    textColor2: "#5D5A6F",
    image: sliderImage1,
    bg: bgImg1
  },
  { 
    id: 2, 
    heading: "Experience Excellence in Education",
    subheading: "Expert Tutors, Personalized Guidance",
    description: "At Proliferate, our experienced tutors are committed to your success. Whether it's test preparation, subject mastery, or personal growth, our tutors are here to provide personalized guidance for your educational journey." ,
    button: "Meet Our Tutors",
    backgroundColor: "#186bad",
    textColor: "#ffff",
    image: sliderImage2,
    bg: bgImg2
  },
  { 
    id: 3, 
    heading: "Unlock Your Potential with Proliferate",
    subheading: "Your Path to Personalized Learning",
    description: 'Welcome to Proliferate, your gateway to a world of knowledge. Our platform connects you with experienced tutors, interactive virtual classrooms, and a diverse range of subjects to empower your learning journey.' ,
    button: "Explore Our Subjects",
    backgroundColor: "#186bad",
    textColor: "#ffff",
    image: sliderImage3,
    bgMain: bgImg2
  },
];

function Hero() {
  const [index, setIndex] = React.useState(0);
  const swiperRef = useRef(null);

  const props = useSpring({
    opacity: 1,
    transform: `translateX(${-index * 100}%)`,
  });

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="poppins slider-container">
      <Swiper ref={swiperRef} loop>
        {slides.map((slide) => (

            <div key={slide.id} className=" h-[100vh] px-10 lg:px-28 py-20 flex  lg:justify-between justify-center flex-col lg:flex-row"  style={{ backgroundColor: slide.backgroundColor, }}>
              <div className="slide w-[100%] lg:w-[60%]" style={{  color: slide.textColor }}>
                <h2 className='text-[#D23323] my-8 bg-white p-2 rounded-lg w-[178px] shadow-xl'>Never Stop Learning</h2>
                <h1 className='font-bold text-4xl leading-snug my-0'>{slide.heading}</h1>
                <h2 className='text-2xl font-semibold mb-5 mt-2' style={{  color: slide.textColor2 }}>{slide.subheading}</h2>
                <p className='font-light w-[500px]' style={{  color: slide.textColor2 }}>{slide.description}</p>
                {/* <button>{slide.button}</button> */}
              </div>

              <div className="bg-img relative lg:w-[50%] w-[80%]"  style={{ backgroundImage: slide.bg }}>
                <img src={slide.bg} className='absolute left-[-60px] top-[-90px]' alt="" />
                <img src={slide.image} className='absolute top-0' alt="" />
              </div>

            </div>
        ))}
      </Swiper>
      {/* <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button> */}
    </div>
  );
}

export default Hero;
