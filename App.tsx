
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ChatBot from './components/ChatBot';
import { PROJECTS, SKILLS, PERSONAL_BIO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      <Header />
      
      <main>
        {/* Unique Narrative Intro */}
        <Hero />

        {/* The Manifesto / Philosophy Section */}
        <section className="py-24 md:py-40 bg-white px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto relative">
             <div className="absolute -left-20 top-0 text-[20vw] font-black text-gray-50 select-none -z-10 leading-none opacity-50">
               DESIGN
             </div>
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-7 space-y-10">
                   <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
                     Engineering rigor meets <br/> 
                     <span className="text-orange-700 italic font-serif">human-centric</span> empathy.
                   </h2>
                   <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium max-w-2xl">
                     I don't just design interfaces; I build systems. My background in Industrial Engineering allows me to dissect complex problems, while my UX expertise ensures the solution remains intuitive and delightful.
                   </p>
                </div>
                <div className="lg:col-span-5 pb-2">
                   <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100">
                      <p className="text-orange-900 font-bold uppercase tracking-widest text-xs mb-6">Core Methodology</p>
                      <ul className="space-y-4">
                        {['Systems Thinking', 'Data-Driven UX', 'Service Blueprints', 'Rapid Prototyping'].map(item => (
                          <li key={item} className="flex items-center gap-3 text-lg font-bold text-gray-800">
                            <span className="size-2 bg-orange-700 rounded-full"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Dynamic Project Grid */}
        <section id="work" className="py-24 bg-[#0d121b] text-white px-6 rounded-[3rem] md:rounded-[5rem] mx-4 md:mx-10 shadow-2xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">Case Studies</h2>
                <p className="text-gray-400 text-lg md:text-xl font-medium max-w-lg">
                  A curated selection of projects spanning digital products, service design, and engineering management.
                </p>
              </div>
              <div className="text-right">
                <span className="text-[8vw] font-black text-white/5 leading-none">2024</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
              {PROJECTS.map((project, idx) => (
                <div key={project.id} className={`${idx % 2 !== 0 ? 'md:mt-32' : ''}`}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Process / Skills Section */}
        <section id="process" className="py-24 md:py-48 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
               <div className="sticky top-32 space-y-8">
                  <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">My Toolstack & <br/><span className="text-orange-700 underline decoration-4 underline-offset-8">Approach</span></h2>
                  <p className="text-xl text-gray-500 font-medium">
                    I believe tools are secondary to the process. My workflow is anchored in research, validation, and iterative refinement.
                  </p>
                  <div className="pt-8 grid grid-cols-2 gap-6">
                     {SKILLS.slice(0, 4).map(skill => (
                       <div key={skill.name} className="space-y-2">
                          <p className="font-bold text-gray-900">{skill.name}</p>
                          <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                             <div className="h-full bg-orange-700" style={{ width: `${skill.level}%` }}></div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               
               <div className="space-y-12">
                  <div className="group p-10 bg-white border-2 border-gray-100 rounded-4xl hover:border-orange-700 transition-all duration-500 shadow-xl shadow-gray-200/20">
                     <span className="text-5xl font-black text-gray-100 group-hover:text-orange-700/10 transition-colors">01</span>
                     <h3 className="text-2xl font-bold mt-4 mb-3">Discovery & Research</h3>
                     <p className="text-gray-500 leading-relaxed font-medium">
                        Diving deep into stakeholder interviews, user behavior analysis, and technical constraints to define the real problem.
                     </p>
                  </div>
                  <div className="group p-10 bg-white border-2 border-gray-100 rounded-4xl hover:border-orange-700 transition-all duration-500 shadow-xl shadow-gray-200/20">
                     <span className="text-5xl font-black text-gray-100 group-hover:text-orange-700/10 transition-colors">02</span>
                     <h3 className="text-2xl font-bold mt-4 mb-3">Strategy & System Architecture</h3>
                     <p className="text-gray-500 leading-relaxed font-medium">
                        Mapping out the ecosystem using blueprints and user flows to ensure a cohesive experience across all touchpoints.
                     </p>
                  </div>
                  <div className="group p-10 bg-white border-2 border-gray-100 rounded-4xl hover:border-orange-700 transition-all duration-500 shadow-xl shadow-gray-200/20">
                     <span className="text-5xl font-black text-gray-100 group-hover:text-orange-700/10 transition-colors">03</span>
                     <h3 className="text-2xl font-bold mt-4 mb-3">Design & Prototyping</h3>
                     <p className="text-gray-500 leading-relaxed font-medium">
                        Bringing solutions to life through high-fidelity prototypes, rigorous testing, and pixel-perfect UI execution.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Personal Detail / About */}
        <section className="bg-gray-50 py-24 md:py-40 px-6 rounded-b-[3rem] md:rounded-b-[5rem]">
           <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">
              <div className="size-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                 <img src="https://picsum.photos/seed/paula_avatar/300/300" alt="Paula" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-extrabold tracking-tight">The person behind the design.</h2>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Based in Spain, working globally. I'm an avid learner of complex systems—from railway logistics to feline colony management. I believe everything is a design problem.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-12">
                  <div className="text-center">
                    <p className="text-4xl font-black text-orange-700">5+</p>
                    <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mt-1">Years Active</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-black text-orange-700">Spain</p>
                    <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mt-1">Home Base</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-black text-orange-700">∞</p>
                    <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mt-1">Curiosity</p>
                  </div>
              </div>
           </div>
        </section>

        {/* Bold Contact Finale */}
        <section id="contact" className="py-32 md:py-48 px-6 text-center overflow-hidden relative">
          <div className="absolute inset-0 bg-orange-700 -z-10 skew-y-3 origin-right scale-x-110 translate-y-20"></div>
          <div className="max-w-5xl mx-auto space-y-12 text-white">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
              Have a project <br/> in mind?
            </h2>
            <div className="space-y-8">
               <p className="text-xl md:text-3xl text-orange-100 font-medium opacity-90">
                 Let's create something meaningful together.
               </p>
               <div className="flex flex-wrap justify-center gap-6">
                 <a href="mailto:paula.gimeno@design.com" className="h-20 flex items-center justify-center px-12 bg-white text-orange-700 rounded-3xl text-2xl font-black hover:scale-105 transition-transform shadow-2xl active:scale-95">
                   Say Hello
                 </a>
               </div>
            </div>
            
            <div className="flex justify-center gap-12 pt-20">
              <a href="#" className="text-white font-bold uppercase tracking-widest text-sm hover:underline decoration-white/30 underline-offset-8 transition-all">LinkedIn</a>
              <a href="#" className="text-white font-bold uppercase tracking-widest text-sm hover:underline decoration-white/30 underline-offset-8 transition-all">Behance</a>
              <a href="#" className="text-white font-bold uppercase tracking-widest text-sm hover:underline decoration-white/30 underline-offset-8 transition-all">Email</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 text-center text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">
        Designed and engineered by Paula Gimeno &copy; 2024
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;
