import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import AnimationData from '../images/animation1.json';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <div
            id="about"
            className="relative bg-gray-900 text-white overflow-hidden mt-16"
            ref={aboutRef}
        >
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <div className="pt-1" />
                    <main
                        className={`mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ${
                            isVisible ? 'slide-in-left' : 'opacity-0'
                        }`}
                    >
                        <div className="sm:text-center lg:text-left">
                            <h2 className="my-6 text-2xl tracking-tight font-extrabold text-white sm:text-3xl md:text-4xl">
                                About me
                            </h2>
                            <p>
                                I’m Hamza Kebir, a passionate Full Stack Web Developer specializing in React.js and Laravel. With a strong background in building responsive and efficient web applications, I’m driven by a love for innovation and solving complex challenges. I’m always eager to expand my skills and take on new projects that push the boundaries of what’s possible in web development. Outside of coding, I enjoy staying updated on the latest tech trends and exploring creative solutions to everyday problems.
                            </p>
                        </div>
                    </main>
                </div>
            </div>
            <div
                className={`lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ${
                    isVisible ? 'slide-in-right' : 'opacity-0'
                }`}
            >
                <Lottie
                    animationData={AnimationData}
                    className="h-72 w-full object-cover object-top sm:h-80 md:h-96 lg:w-full lg:h-full"
                />
            </div>
        </div>
    );
};

export default About;
