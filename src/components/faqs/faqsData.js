import {
    FaClock,
    FaUserCheck,
    FaShieldAlt,
    FaGraduationCap,
    FaBook,
    FaUsers,
    FaCalendarAlt,
    FaFileAlt,
    FaUniversity
} from 'react-icons/fa';

// Export icons as named exports for components to use
export {
    FaClock,
    FaUserCheck,
    FaShieldAlt,
    FaGraduationCap,
    FaBook,
    FaUsers,
    FaCalendarAlt,
    FaFileAlt,
    FaUniversity
};

// Data without JSX - just string references
export const faqs = [
    {
        id: 1,
        question: "What are the school hours and academic calendar?",
        answer: "School hours are from 8:00 AM to 2:30 PM, Monday through Friday. The academic year runs from August to June, with winter and spring breaks. Detailed academic calendars are available on our parent portal.",
        icon: "FaClock",
        category: "General"
    },
    {
        id: 2,
        question: "What is the admission process and required documents?",
        answer: "Our admission process includes application submission, entrance assessment, parent interview, and document verification. Required documents include birth certificate, previous school records, vaccination records, and parent identification.",
        icon: "FaUserCheck",
        category: "Admissions"
    },
    {
        id: 3,
        question: "What safety and security measures are in place?",
        answer: "We have 24/7 security personnel, CCTV surveillance, secure entry systems, emergency response protocols, regular safety drills, and strict visitor management policies to ensure student safety at all times.",
        icon: "FaShieldAlt",
        category: "Safety"
    },
    {
        id: 4,
        question: "What is the student-teacher ratio?",
        answer: "We maintain a healthy student-teacher ratio of 15:1 in primary classes and 20:1 in secondary classes, ensuring personalized attention and quality education for every student.",
        icon: "FaUsers",
        category: "Academics"
    },
    {
        id: 5,
        question: "Are scholarships or financial aid available?",
        answer: "Yes, we offer merit-based scholarships and need-based financial aid programs. Applications are reviewed annually, and details are available through our admissions office.",
        icon: "FaGraduationCap",
        category: "Admissions"
    },
    {
        id: 6,
        question: "What extracurricular activities are offered?",
        answer: "We offer a wide range of extracurricular activities including sports, music, arts, drama, debate, robotics, coding clubs, community service, and various student-led initiatives.",
        icon: "FaBook",
        category: "Activities"
    },
    {
        id: 7,
        question: "How is academic progress communicated to parents?",
        answer: "We communicate through quarterly report cards, parent-teacher conferences, monthly progress reports, digital parent portal access, and regular email updates on student performance.",
        icon: "FaFileAlt",
        category: "Communication"
    },
    {
        id: 8,
        question: "What are the transportation facilities?",
        answer: "We provide safe and reliable transportation services with GPS-tracked buses, trained drivers and attendants, pick-up/drop-off points across the city, and strict safety protocols.",
        icon: "FaUniversity",
        category: "Facilities"
    },
    {
        id: 9,
        question: "Is there a school uniform policy?",
        answer: "Yes, we have a designated school uniform for all students. Uniform details, including seasonal variations and purchase information, are provided during admission.",
        icon: "FaCalendarAlt",
        category: "General"
    },
    {
        id: 10,
        question: "What technology resources are available to students?",
        answer: "Our campus features computer labs, smart classrooms, high-speed internet, digital libraries, educational software subscriptions, and a 1:1 device program for higher grades.",
        icon: "FaGraduationCap",
        category: "Facilities"
    },
    {
        id: 11,
        question: "How does the school support students with special needs?",
        answer: "We have a dedicated special education department with trained staff, individualized education plans, learning support, counseling services, and accommodations as needed.",
        icon: "FaUserCheck",
        category: "Support"
    },
    {
        id: 12,
        question: "What is the school's homework policy?",
        answer: "Homework is designed to reinforce classroom learning with age-appropriate assignments. We follow guidelines ensuring homework is meaningful, manageable, and supports learning objectives.",
        icon: "FaBook",
        category: "Academics"
    },
    {
        id: 13,
        question: "How can parents get involved in school activities?",
        answer: "Parents can join the Parent-Teacher Association, volunteer for events, participate in workshops, attend school functions, and contribute through various committees and initiatives.",
        icon: "FaUsers",
        category: "Community"
    },
    {
        id: 14,
        question: "What health and medical facilities are available?",
        answer: "We have a fully-equipped medical room with a qualified nurse, first aid training for staff, regular health check-ups, and protocols for managing illnesses and emergencies.",
        icon: "FaShieldAlt",
        category: "Health"
    },
    {
        id: 15,
        question: "What is the procedure for early pickup or late arrival?",
        answer: "Parents must notify the school office in advance for early pickups. For late arrivals, students should report to the office with a valid reason note from parents.",
        icon: "FaClock",
        category: "Procedures"
    }
];

export const categories = [
    "All",
    "General",
    "Admissions",
    "Academics",
    "Safety",
    "Facilities",
    "Activities",
    "Support"
];

export const contactInfo = [
    {
        icon: 'phone',
        title: "Call Us",
        detail: "+92 300 123 4567",
        description: "Available 8 AM - 4 PM, Monday to Friday"
    },
    {
        icon: 'mail',
        title: "Email Us",
        detail: "info@alipublicschool.edu.pk",
        description: "Response within 24 hours"
    },
    {
        icon: 'clock',
        title: "Visit Office",
        detail: "University Town, Peshawar",
        description: "Appointments recommended"
    }
];

// Icon mapping object
export const iconMap = {
    FaClock: FaClock,
    FaUserCheck: FaUserCheck,
    FaShieldAlt: FaShieldAlt,
    FaGraduationCap: FaGraduationCap,
    FaBook: FaBook,
    FaUsers: FaUsers,
    FaCalendarAlt: FaCalendarAlt,
    FaFileAlt: FaFileAlt,
    FaUniversity: FaUniversity
};