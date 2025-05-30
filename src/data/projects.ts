export interface ProjectItem {
    id: string;
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
}

export const projects: ProjectItem[] = [
    {
        id: 'social-media-app',
        title: 'Social Media Management App',
        description:
            'Backend built with Nest.js and Passport.js for authentication. Used Sequelize ORM and Swagger for API documentation. Mobile frontend created using Flutter with Bloc.',
        tech: ['NestJS', 'Passport.js', 'Sequelize', 'Flutter', 'Bloc'],
        image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437f1?w=400&h=250&fit=crop',
        link: '#',
    },
    {
        id: 'mern-expert-system',
        title: 'Medical Expert System',
        description:
            'Expert system using the MERN stack with an inference engine. Styled using Tailwind CSS.',
        tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1618005198919-3c7b598d9893?w=400&h=250&fit=crop',
        link: '#',
    },
    {
        id: 'spring-ecommerce',
        title: 'E-Commerce Platform with Java',
        description:
            'Built using Java Spring Boot. Secured APIs with JWT. Integrated PostgreSQL with JPA.',
        tech: ['Java', 'Spring Boot', 'JWT', 'PostgreSQL', 'JPA'],
        image: 'https://images.unsplash.com/photo-1549921296-3a6b4c8e96d4?w=400&h=250&fit=crop',
        link: '#',
    },
    {
        id: 'catverse-runner',
        title: 'Catverse Runner Game',
        description:
            '2D endless runner game developed with Flutter and Flame engine. Published on Google Play Store.',
        tech: ['Flutter', 'Flame Engine', 'Game Dev', 'Google Play'],
        image: 'https://images.unsplash.com/photo-1610904041859-985a510b9f8e?w=400&h=250&fit=crop',
        link: 'https://play.google.com/store/apps/details?id=com.choDev.CatRunner',
    },
    {
        id: 'reservation-bar',
        title: 'Reservation Bar',
        description:
            'Frontend for table reservation platform. Customers and store managers have separate interfaces.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8cfa?w=400&h=250&fit=crop',
        link: '#',
    },
    {
        id: 'reward-shopping-app',
        title: 'Reward Point Shopping App',
        description: 
        'Developed a Flutter-based mobile shopping app with point accumulation, redemption, cart functionality, and store location display using Flutter Map.',
        tech: ['Flutter', 'Point System', 'Flutter Map'],
        image: 'https://images.unsplash.com/photo-1580894908361-96719503343d?w=400&h=250&fit=crop',
        link: '#',
    },
];
