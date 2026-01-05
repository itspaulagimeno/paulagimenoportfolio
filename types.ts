
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'Design' | 'Data' | 'Management';
}

export interface Message {
  role: 'user' | 'model' | 'system';
  content: string;
  isThinking?: boolean;
}
