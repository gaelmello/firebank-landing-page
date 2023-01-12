import React from 'react'
import styles from '../styles'
import discount from '../assets/discount.svg'
import GetStarted from './GetStarted'
import smartphones from '../assets/smartphones.svg'
import Typed from 'typed.js';
import { useEffect, useRef } from "react";
import Bounce from 'react-reveal/Bounce';

const Hero = () => {

      const heroTitle = useRef(null)

      useEffect(() => {
          const typed = new Typed(heroTitle.current, {
            strings: [`Generation`],
            startDelay: 500,
            typeSpeed: 150,
            backSpeed: 150,
            backDelay: 5000,
            smartBackspace: false,
            loop: true,
            showCursor: true,
          });
      
          // Destropying
          return () => {
            typed.destroy();
          };
        }, []);

    return (
        <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 '>
                    <img src={discount} alt="discount" className='w-[35px] h-[35px]'/>
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className='text-white'>20%</span> Discount For{" "}
                        <span className='text-white'>1 Month</span> Account
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-auto">

                    {/* gradient start */}
                    <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                    <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
                    {/* gradient end */}

                    <h1 className="flex-1 font-poppins font-semibold ss:text-[65px] text-[45px] text-white ss:leading-[100.8px] leading-[75px] ">
                        The Next <br/>{" "}
                        <span className="text-gradient" ref={heroTitle}></span>{" "}
                    </h1>
                    <Bounce>

                        <div className="ss:flex hidden md:mr-4 mr-0 ml-[345px] absolute">
                            <GetStarted />
                        </div>
                    </Bounce>
                </div>

                <h1 className='flex-1 font-poppins font-semibold ss:text-[65px] text-[45px] text-white ss:leading-[100.8px] leading-[75px] w-full'>
                    Payment Method...
                </h1>

                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Our team of experts uses a methodology to identify the credit cards
                    most likely to fit your needs. We examine annual percentage rates,
                    annual fees.
                </p>

            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative animate__animated animate__shakeY animate__infinite`}>
                <img src={smartphones} alt="smartphones" className='lg:w-[65%] lg:h-[100%] sm:w-[45%] relative z-[5]'/>
            
                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}

            </div>
            <Bounce>

                <div className={`ss:hidden ${styles.flexCenter}`}>
                    <GetStarted/>
                </div>
            </Bounce>
        </section>
)}

export default Hero