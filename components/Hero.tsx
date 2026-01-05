
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-40 pb-24 md:pt-64 md:pb-40 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 size-[800px] bg-orange-50 rounded-full -z-10 blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-orange-700 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full">
                Available for projects
              </span>
              <h1 className="text-6xl md:text-[8vw] font-black leading-[0.9] tracking-tighter text-gray-900 uppercase">
                Product <br/>
                <span className="text-orange-700">Engineer</span> <br/>
                & UX Expert
              </h1>
            </div>
            
            <p className="text-xl md:text-3xl text-gray-500 font-medium leading-relaxed max-w-2xl">
              I bridges the gap between technical engineering and human-centered design to build better systems for the real world.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a href="#work" className="group flex items-center gap-4 text-2xl font-black uppercase tracking-tight">
                <span className="size-16 bg-orange-700 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shadow-orange-700/20">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </span>
                See my work
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 relative">
             <div className="aspect-[3/4] rounded-4xl bg-gray-100 overflow-hidden shadow-2xl relative rotate-3 hover:rotate-0 transition-transform duration-700 group">
                <img 
                  src="https://picsum.photos/seed/paula_hero/800/1000" 
                  alt="Paula Gimeno" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent"></div>
             </div>
             {/* Dynamic badge */}
             <div className="absolute -bottom-8 -left-8 size-40 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center p-4 border border-gray-100 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full text-orange-700 fill-current">
                   <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                   <text className="text-[12px] font-black uppercase tracking-widest">
                      <textPath xlinkHref="#circlePath"> Paula Gimeno • Design Engineer • </textPath>
                   </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                   <svg className="size-8 text-orange-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
