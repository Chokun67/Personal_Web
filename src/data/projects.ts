import socialMediaImage from '@/assets/image/projects/nest.png';
import expertSystemImage from '@/assets/image/projects/medical.png';
import springEcomImage from '@/assets/image/projects/spring.png';
import reservationImage from '@/assets/image/projects/reservation.png';
import rewardAppImage from '@/assets/image/projects/rewardpoint.png';
import catverse from '@/assets/image/projects/catverse.png'
import exp from '@/assets/image/projects/exp.png'
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
        image: socialMediaImage,
        link: 'https://github.com/Chokun67/Nest-ORM-POST_USER',
    },
    {
        id: 'reservation-bar',
        title: 'Reservation Bar',
        description:
            'Frontend for table reservation platform. Customers and store managers have separate interfaces.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
        image: reservationImage,
        link: 'https://github.com/Chokun67/React-ReservationBar',
    },
    {
        id: 'reward-shopping-app',
        title: 'Reward Point Shopping App',
        description: 
        'Developed a Flutter-based mobile shopping app with point accumulation, redemption, cart functionality, and store location display using Flutter Map.',
        tech: ['Flutter', 'Point System', 'Flutter Map'],
        image: rewardAppImage,
        link: 'https://github.com/Chokun67/zeencamp_v2',
    },
    {
        id: 'mern-expert-system',
        title: 'Medical Expert System',
        description:
            'Expert system using the MERN stack with an inference engine. Styled using Tailwind CSS.',
        tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS'],
        image: expertSystemImage,
        link: 'https://github.com/Chokun67/MERN-KnowledgeBase',
    },
    {
        id: 'spring-ecommerce',
        title: 'E-Commerce Platform with Java',
        description:
            'Built using Java Spring Boot. Secured APIs with JWT. Integrated PostgreSQL with JPA.',
        tech: ['Java', 'Spring Boot', 'JWT', 'PostgreSQL', 'JPA'],
        image: springEcomImage,
        link: 'https://github.com/Chokun67/JavaSpring_ecommerce',
    },
    {
        id: 'catverse-runner',
        title: 'Catverse Runner Game',
        description:
            '2D endless runner game developed with Flutter and Flame engine. Published on Google Play Store.',
        tech: ['Flutter', 'Flame Engine', 'Game Dev', 'Google Play'],
        image: catverse,
        link: 'https://play.google.com/store/apps/details?id=com.choDev.CatRunner',
    },
    
];
