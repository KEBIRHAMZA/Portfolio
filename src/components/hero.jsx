import React from 'react';
import hamza from '../images/kebir.jpeg'
import { useEffect } from 'react';
import Typed from 'typed.js';


const Hero = () => {

    useEffect(() => {
        const options = {
          strings: ['', 'FullStack Developer,', 'Frontend Developer,', 'Backend Developer,'],
          typeSpeed: 100,
          backSpeed: 60,
          loop: true,
        };
    
        const typed = new Typed('.typing', options);
    
        return () => {
          typed.destroy();
        };
      }, []);

    return (
        <div className="w-full h-full bg-gray-900 dark:bg-gray-200">
        <div className="h-screen w-full mx-auto py-20 xl:px-16 xs:px-8 flex md:flex-row xs:flex-col gap-4 justify-center items-center pb-10 pt-4">
          <div className="w-full">
            <img className="rounded-full md:max-w-[70%] sm:max-w-[50%] xs:max-w-[60%] mx-auto" src={hamza} alt="My Image" />
          </div>
          <div className="w-full flex flex-col justify-center gap-4 text-white dark:text-gray-800 md:mt-0 sm:mt-8 xs:mt-4">
            <h1 className="text-4xl font-semibold font-serif">Hello, I'm KEBIR Hamza</h1>
            <h3 className="capitalize text-rose-400">i'm <span className="typing text-green-500 dark:text-green-700">fullstack developer</span></h3>
            <p>full-stack developer Laravel, ReactJs</p>
            <div className="sm:mt-4 xs:mt-2">
              <button className="px-6 py-1 bg-rose-500 text-white rounded-sm">Get In Touch</button>
            </div>
          </div>
        </div>
      </div>

    );
}

export default Hero;
