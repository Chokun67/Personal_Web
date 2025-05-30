export interface SkillItem {
  name: string;
  iconUrl: string;
}

export interface SkillCard {
  title: string;
  icon: string; // อาจพิจารณาใช้ enum ก็ได้
  skills: SkillItem[];
}

export const skillCards: SkillCard[] = [
  {
    title: 'Frontend',
    icon: 'frontend',
    skills: [
      { name: 'React', iconUrl: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Next.js', iconUrl: 'https://cdn.simpleicons.org/nextdotjs/000000' },
      { name: 'Vue', iconUrl: 'https://cdn.simpleicons.org/vuedotjs/42B883' },
    ],
  },
  {
    title: 'Backend',
    icon: 'backend',
    skills: [
      { name: 'Node.js', iconUrl: 'https://cdn.simpleicons.org/nodedotjs/339933' },
      { name: 'NestJS', iconUrl: 'https://cdn.simpleicons.org/nestjs/E0234E' },
      { name: 'Spring Boot', iconUrl: 'https://cdn.simpleicons.org/springboot/6DB33F' },
    ],
  },
  {
    title: 'Mobile',
    icon: 'mobile',
    skills: [
      { name: 'React Native', iconUrl: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Flutter', iconUrl: 'https://cdn.simpleicons.org/flutter/02569B' },
      { name: 'Kotlin', iconUrl: 'https://cdn.simpleicons.org/kotlin/7F52FF' },
      { name: 'Swift', iconUrl: 'https://cdn.simpleicons.org/swift/FA7343' },
    ],
  },
  {
    title: 'Tools & Tech',
    icon: 'tools',
    skills: [
      { name: 'Git', iconUrl: 'https://cdn.simpleicons.org/git/F05032' },
      { name: 'Docker', iconUrl: 'https://cdn.simpleicons.org/docker/2496ED' },
      { name: 'Figma', iconUrl: 'https://cdn.simpleicons.org/figma/F24E1E' },
      { name: 'Postman', iconUrl: 'https://cdn.simpleicons.org/postman/FF6C37' },
      { name: 'Jenkins', iconUrl: 'https://cdn.simpleicons.org/jenkins/D24939' },
      { name: 'Vercel', iconUrl: 'https://cdn.simpleicons.org/vercel/000000' },
    ],
  },
]
