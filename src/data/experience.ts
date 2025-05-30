import { Briefcase, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  icon: LucideIcon;
  achievements?: string[];
  technologies?: string[];
}


export const experienceItems: ExperienceItem[] = [
  {
    id: 'freelance-jan-2025',
    title: 'Freelance - Mobile Developer',
    company: '',
    period: 'Jan - Feb 2025',
    description: 'Developed a step tracking mobile app using Flutter with background execution and Firebase integration.',
    achievements: [
      'Implemented Bloc for state management',
      'Enabled background execution for step tracking',
      'Integrated Firebase for activity data storage'
    ],
    technologies: ['Flutter', 'Bloc', 'Firebase'],
    icon: Smartphone,
  },
  {
    id: 'internship-cdg-2024',
    title: 'Internship - Web & Mobile Developer',
    company: 'CDG Group',
    period: 'Jun - Dec 2024',
    description: 'Worked on both web and mobile platforms with modern frameworks and backend development.',
    achievements: [
      'Developed a responsive web application using Vue.js and Vuetify',
      'Upgraded and optimized Flutter applications to the latest stable version',
      'Contributed backend features using NestJS'
    ],
    technologies: ['Vue.js', 'Vuetify', 'Flutter', 'NestJS'],
    icon: Briefcase,
  },
  {
    id: 'freelance-july-2024',
    title: 'Freelance - Mobile Developer',
    company: '',
    period: 'July - Nov 2024',
    description: 'Built a mobile app for spinal posture monitoring with Bluetooth sensor and real-time data handling.',
    achievements: [
      'Developed cross-platform app for posture monitoring',
      'Used Riverpod for scalable state management',
      'Integrated real-time Bluetooth sensor data',
      'Stored data with Firestore'
    ],
    technologies: ['Flutter', 'Riverpod', 'Firestore', 'Bluetooth'],
    icon: Smartphone,
  }
];