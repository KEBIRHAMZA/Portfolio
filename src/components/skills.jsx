import React, { useState, useEffect, useRef } from 'react';

const skillCategories = [
  { category: 'Front-End Development', skills: [
      { name: 'React.js', percentage: '85%', color: '#FF6464', dashArray: '85px, 100px' },
      { name: 'HTML', percentage: '90%', color: '#FF6464', dashArray: '90px, 100px' },
      { name: 'CSS', percentage: '80%', color: '#FF6464', dashArray: '80px, 100px' },
      { name: 'JavaScript', percentage: '80%', color: '#FF6464', dashArray: '80px, 100px' },
      { name: 'Bootstrap', percentage: '70%', color: '#FF6464', dashArray: '70px, 100px' },
      { name: 'Tailwind CSS', percentage: '75%', color: '#FF6464', dashArray: '75px, 100px' }
    ]
  },
  { category: 'Back-End Development', skills: [
      { name: 'Laravel', percentage: '80%', color: '#9272D4', dashArray: '80px, 100px' },
      { name: 'PHP', percentage: '85%', color: '#9272D4', dashArray: '85px, 100px' },
    ]
  },
  { category: 'Databases', skills: [
      { name: 'MySQL', percentage: '80%', color: '#5185D4', dashArray: '80px, 100px' },
      { name: 'MongoDB', percentage: '70%', color: '#5185D4', dashArray: '70px, 100px' }
    ]
  },
  { category: 'DevOps & Tools', skills: [
      { name: 'Git', percentage: '85%', color: '#CA56F2', dashArray: '85px, 100px' },
      { name: 'Jira', percentage: '70%', color: '#CA56F2', dashArray: '70px, 100px' },
      { name: 'Shell Scripting', percentage: '65%', color: '#CA56F2', dashArray: '65px, 100px' }
    ]
  },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const [animatedPercentages, setAnimatedPercentages] = useState({});
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      const intervals = {};

      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          const targetPercentage = parseInt(skill.percentage);
          let currentPercentage = 0;

          intervals[skill.name] = setInterval(() => {
            if (currentPercentage >= targetPercentage) {
              clearInterval(intervals[skill.name]);
            } else {
              currentPercentage += 1;
              setAnimatedPercentages(prev => ({
                ...prev,
                [skill.name]: `${currentPercentage}%`
              }));
            }
          }, 20); 
        });
      });

      return () => {
        Object.values(intervals).forEach(clearInterval);
      };
    }
  }, [visible]);

  return (
    <div id="skills" className="relative h-screen flex flex-col justify-center items-center dark:bg-gray-800 p-4">
      <div ref={ref} className="max-w-6xl mx-auto w-full overflow-hidden">
        <h1 className="text-4xl md:text-5xl text-center text-white font-bold mb-8">Technical Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-6">{category.category}</h2>
              {category.skills.map((skill, idx) => (
                <div key={idx} className="mb-6">
                  <div className="flex justify-between py-1">
                    <span className="text-base font-semibold text-white">{skill.name}</span>
                    <span className="text-base font-semibold text-white pr-5">
                      {animatedPercentages[skill.name] || '0%'}
                    </span>
                  </div>
                  <svg className="rc-progress-line w-full" viewBox="0 0 100 1" preserveAspectRatio="none">
                    <path
                      className="rc-progress-line-trail"
                      d="M 0.5,0.5 L 99.5,0.5"
                      strokeLinecap="round"
                      stroke="#D9D9D9"
                      strokeWidth="1"
                      fillOpacity="0"
                    ></path>
                    <path
                      className="rc-progress-line-path"
                      d="M 0.5,0.5 L 99.5,0.5"
                      strokeLinecap="round"
                      stroke={skill.color}
                      strokeWidth="1"
                      fillOpacity="0"
                      style={{
                        strokeDasharray: visible ? skill.dashArray : '0, 100px',
                        strokeDashoffset: '0px',
                        transition: 'stroke-dasharray 2s ease-out', 
                      }}
                    ></path>
                  </svg>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
