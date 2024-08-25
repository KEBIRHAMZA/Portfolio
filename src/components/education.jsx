import React, { useEffect, useRef, useState } from 'react';
import gatsby from "../images/Gatsby_Logo.png";
import mathscan from "../images/mathscan.png";

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col justify-center bg-gray-900 dark:bg-gray-200 overflow-hidden"
      ref={timelineRef}
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-16 md:space-y-0">

          <div className="flex-1">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 dark:text-gray-800">Experience</h3>
            </div>
            <div className="relative">
              <div className={`relative pl-8 sm:pl-32 py-6 group ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
                <div className="font-medium text-indigo-300 mb-1 sm:mb-0">Front End Developer</div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-gray-100 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Mar 2024</time>
                  <div className="text-xl font-bold text-gray-400">MATHSCAN SARL, Rabat, Maroc</div>
                </div>
                <div className="text-gray-200">Implementation of a Multilingual Landing Page using GATSBY.JS framework based on REACT.JS technology. Using Tailwind CSS for design and layout.</div>
              </div>
            </div>

            <div className={`flex justify-center space-x-12 mt-16 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
              <div className="flex flex-col items-center">
                <img src={gatsby} alt="Logo 1" className="h-24 w-auto md:h-32" />
              </div>
              <div className="flex flex-col items-center">
                <img src={mathscan} alt="Logo 2" className="h-24 w-auto md:h-32" />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 dark:text-gray-800">My Educational Journey</h3>
            </div>
            <div className="relative">
              <div className={`relative pl-8 sm:pl-32 py-6 group ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
                <div className="font-medium text-indigo-300 mb-1 sm:mb-0">Institut Spécialisé de Technologie Appliquée NTIC</div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-gray-100 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2022 - 2024</time>
                  <div className="text-xl font-bold text-gray-400">BAB TIZIMI, Meknes, Morocco</div>
                </div>
                <div className="text-gray-200">At the Institut Spécialisé de Technologie Appliquée NTIC, I honed my skills in IT, with a focus on software development, network management, and digital technologies.</div>
              </div>

              <div className={`relative pl-8 sm:pl-32 py-6 group ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
                <div className="font-medium text-indigo-300 mb-1 sm:mb-0">Baccalauréat in Physical Sciences</div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-gray-100 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2020 - 2021</time>
                  <div className="text-xl font-bold text-gray-400">OMAR IBN KHATAB, Meknes, Morocco</div>
                </div>
                <div className="text-gray-200">I pursued a Baccalauréat in Physical Sciences, focusing on the fundamentals of physics and related scientific disciplines.</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Timeline;
