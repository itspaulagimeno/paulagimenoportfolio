
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group cursor-pointer flex flex-col gap-6">
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-700/10">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10"></div>
      </div>
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold group-hover:text-orange-700 transition-colors">{project.title}</h3>
        <p className="text-gray-500 leading-relaxed line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
