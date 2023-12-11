import vit from '../assets/images/vit.png';
import archies from '../assets/images/archies.webp';
import cpp from '../assets/icons/cpp.svg';
import python from '../assets/icons/python.svg';
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Programing Language",
    },
    {
        imageUrl: python,
        name: "python",
        type: "Programing Language",
    },
    
];

export const educations = [
    {
        title: "Bachelors of Technology",
        college_name: "Vellore Institute of Technology",
        icon: vit,
        iconBg: "#accbe1",
        date: "August 2021 - August 2025 (expected)",
        points: [
            "Currently maintaining an impressive CGPA of 8.82 in the Btech program in Information Technology branch.",
            "Acquired a comprehensive understanding of key subjects including OOPS, Web Development, DBMS, and DSA.",
            "Proficiently applied programming languages such as C++, Python, and Java to develop a diverse skill set in software development.",
            "Fostering a dynamic and adaptable approach to problem-solving within the realm of Information Technology.",
        ],
    },
    {
        title: "Higher Secondary Education",
        college_name: "Archies Higher Seconday School",
        icon: archies,
        iconBg: "#fbc3bc",
        date: "April 2019 - April 2020",
        points: [
            "Achieved an outstanding academic performance in 12th grade, securing an impressive 89% overall.",
            "Specialized in Physics, Chemistry, and Mathematics, showcasing a strong foundation in the core STEM disciplines.",
            "Demonstrated exceptional analytical and problem-solving skills through rigorous coursework in physics, chemistry, and mathematics.",
            "Developed a robust understanding of complex scientific concepts, fostering a keen ability to approach challenges with precision and logical reasoning.",

        ],
    },
    {
        title: "Secondary Education",
        college_name: "Archies Higher Seconday School",
        icon: archies,
        iconBg: "#fbc3bc",
        date: "April 2017 - April 2018",
        points: [
            "Attained a commendable academic achievement in 10th grade with an overall score of 86%.",
            "Exhibited proficiency in a diverse range of subjects, highlighting a well-rounded academic background.",
            "Demonstrated strong organizational and time-management skills through successful completion of coursework in various subjects.",
            "Established a solid academic foundation, showcasing adaptability and a commitment to excellence in diverse learning environments.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ShivendraTrivedi',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shivendra-trivedi-27b967218/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-green',
        name: 'Wildlife trading poaching',
        description: 'It is a Hackathon winning project developed with a team of 3 developers, providing the visual routes of illegal wildlife trading and many more things.',
        link: 'https://github.com/ShivendraTrivedi/Wildlife-trading-poaching',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'Job Finder',
        description: 'It is a frontend based project built using HTML, CSS and Javascript that provide candidates with features such as filter, sort, apply and many more',
        link: 'https://shivendratrivedi.github.io/Job-Portal/',
    },
    
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Blogger',
        description: 'Developed frontend of multi page blogging website with minimilistic design features having animations.',
        link: 'https://shivendratrivedi.github.io/Blog-Website/#',
    },
    
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'File compressor',
        description: 'Built a web based file compressor, allowing users to choose any file, compress it, and download it locally. ',
        link: 'https://github.com/ShivendraTrivedi/File-compressor',
    }
];