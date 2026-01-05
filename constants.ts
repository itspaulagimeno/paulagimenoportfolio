
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'leroy-merlin',
    title: 'Leroy Merlin UX/UI',
    category: 'Digital Product',
    description: 'Interface redesign, information architecture, and user validation focused on home improvement services.',
    image: 'https://picsum.photos/seed/leroy/800/600',
    tags: ['UX/UI', 'User Validation', 'Figma']
  },
  {
    id: 'avanza-zaragoza',
    title: 'Avanza Mobile App',
    category: 'Mobile Design',
    description: 'UX/UI redesign including benchmark analysis, user flows, and a high-fidelity navigable prototype.',
    image: 'https://picsum.photos/seed/avanza/800/600',
    tags: ['Mobile App', 'Prototyping', 'User Research']
  },
  {
    id: 'feline-colonies',
    title: 'Feline Colonies Management',
    category: 'Service Design',
    description: 'Complete service design involving stakeholder research, co-creation, and digital product proposal for municipal services.',
    image: 'https://picsum.photos/seed/cats/800/600',
    tags: ['Service Design', 'Stakeholders', 'Co-creation']
  },
  {
    id: 'railway-pm',
    title: 'Railway Systems PM',
    category: 'Engineering',
    description: 'Project management for railway systems, handling document control, versioning, and cross-team coordination.',
    image: 'https://picsum.photos/seed/train/800/600',
    tags: ['Project Management', 'Engineering', 'Systems']
  }
];

export const SKILLS: Skill[] = [
  { name: 'Figma', level: 95, category: 'Design' },
  { name: 'Adobe Creative Suite', level: 90, category: 'Design' },
  { name: 'User Research', level: 85, category: 'Design' },
  { name: 'Service Blueprinting', level: 90, category: 'Design' },
  { name: 'Excel / Google Sheets', level: 95, category: 'Data' },
  { name: 'KPI Dashboards', level: 85, category: 'Data' },
  { name: 'Design Thinking', level: 95, category: 'Management' },
  { name: 'Agile Methodologies', level: 80, category: 'Management' }
];

export const PERSONAL_BIO = `Paula Gimeno is an Industrial Design and Product Development Engineer specialized in Service Design and UX. She possesses a hybrid profile that integrates technical engineering, data analysis, and strategic design methodologies. With experience in complex sectors like Railway and Urban Services, she bridges the gap between engineering rigor and user-centric creativity.`;
