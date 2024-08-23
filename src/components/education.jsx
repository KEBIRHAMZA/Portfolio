import React from 'react';

const Timeline = () => {
  return (
    <section id="education" className="relative min-h-screen flex flex-col justify-center bg-gray-900 dark:bg-gray-200 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-100 dark:text-gray-800">My Educational Journey</h2>
        </div>

        <div className="flex flex-col justify-center divide-y divide-gray-200 [&>*]:py-16">

          <div className="w-full max-w-3xl mx-auto">
            {/* Vertical Timeline #1 */}
            <div className="-my-6">

              {/* Item #1 */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                {/* Purple label */}
                <div className="font-medium text-indigo-300 mb-1 sm:mb-0">Institut Spécialisé de Technologie Appliquée NTIC</div>
                {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-gray-100 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2022 - 2024</time>
                  <div className="text-xl font-bold text-gray-400">BAB TIZIMI , Meknes, Morocco</div>
                </div>
                {/* Content */}
                <div className="text-gray-200">At the Institut Spécialisé de Technologie Appliquée NTIC, I honed my skills in IT, with a focus on software development, network management, and digital technologies. This program provided me with a solid foundation in practical and theoretical aspects of technology, preparing me for a successful career in the field.</div>
              </div>
              
              {/* Item #2 */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                {/* Purple label */}
                <div className="font-medium text-indigo-300 mb-1 sm:mb-0">Baccalauréat in Physical Sciences</div>
                {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-gray-100 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2020 - 2021</time>
                  <div className="text-xl font-bold text-gray-400">OMAR IBN KHATAB, Meknes, Morocco</div>
                </div>
                {/* Content */}
                <div className="text-gray-200">I pursued a Baccalauréat in Physical Sciences, focusing on the fundamentals of physics and related scientific disciplines. This program provided a comprehensive understanding of physical principles and their applications, laying a strong foundation for further studies and professional growth in the scientific and technological fields.</div>
              </div>

            </div>
            {/* End: Vertical Timeline #1 */}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;
