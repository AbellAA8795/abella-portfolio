
import topResult from '../assets/mindfull_Images/top10results.jpg'
import promptcoach from '../assets/mindfull_Images/promptcoach.png'
import wellness from '../assets/mindfull_Images/Wellness.png'
import video from '../assets/mindfull_Images/mindfullvideo.mp4'
import appointment1 from '../assets/Appointment/1.png'
import appointment2 from '../assets/Appointment/2.png'
import appointment3 from '../assets/Appointment/3.png'
import appointment4 from '../assets/Appointment/4.png'
import appointment5 from '../assets/Appointment/5.png'
import appointmentPic from '../assets/Appointment_System.jpg'
import pos from '../assets/POS.jpg'
import casinoPic from '../assets/Casino_Game.jpg'
import studentEvalPic from '../assets/Student_Evaluation_System.jpg'
import mindfullPic from '../assets/Mindfull_Dashboard.jpg'
import casinoPic1 from '../assets/casino_images/casino_game1.png'
import casinoPic2 from '../assets/casino_images/casino_game2.png'
import casinoPic3 from '../assets/casino_images/casino_game3.png'
import set1 from '../assets/set/set_picture.png'
import set2 from '../assets/set/set_picture2.png'
import set3 from '../assets/set/set_picture3.png'
import set4 from '../assets/set/set_picture4.png'
import set5 from '../assets/set/set_picture5.png'
import set6 from '../assets/set/set_picture6.png'

export const projectsData = [
    {
        coverImage: appointmentPic,
        projectName: 'Appointment Management System',
        projectDescriptionShort: 'A Web Application made for a Clinic Appointment Management System using PHP',
        projectDescription: `This project was made to comply the requirements for our subject in Web Programming, Advance Database and Integrative Programming. The project was made using PHP, MySQL, HTML, CSS, and JavaScript. The project was made to help the clinic to manage their appointments and to help the patients to book their appointments online.`,
        id: '1',
        documentation: [appointment1,appointment2,appointment3,appointment4,appointment5],
        video: ''
    },
    {
        coverImage: pos,
        projectName: 'POS-Tea Point of Sale System for Milktea Shop',
        projectDescriptionShort: 'It is a tool for both the owner and other staff involved in Milk Tea Shop management.',
        projectDescription: 'The project was made to help the users to recommend some activities during the Chinese Newyear celebration. Aside from activities, the website also provides information about their Fortunes and ChineseZodiac Sign. The project was made using PHP, MySQL, HTML, CSS, and JavaScript.',
        id: '2',
        documentation: [],
        video: ''
    },
    {
        coverImage: casinoPic,
        projectName: 'Casino Management Game System',
        projectDescriptionShort: 'A Web Application made for a Casino Management Game System using PHP',
        projectDescription: 'This project was made to help the users to manage their own casino business. This would allow the business to track their games, players, and profits. The project was made using PHP, MariaDB, HTML, CSS, and JavaScript.',
        id: '3',
        documentation: [casinoPic1,casinoPic2,casinoPic3],
        video: ''
    },
    {
        coverImage: studentEvalPic,
        projectName: 'Student Evaluations for Teachers System',
        projectDescriptionShort: 'A System for evaluating student performance by teachers',
        projectDescription: 'This project was made to help improve the evaluation process for teachers. The project was made for Pamantasan ng Lungsod ng Pasig, to help improve and fix the process for the current evaluation system. The project was made using VB.net, Python, and MSSQL.',
        id: '4',
        documentation: [set1,set2,set3,set4,set5,set6],
        video: ''
    },
    {
        coverImage: mindfullPic,
        projectName: 'Mindfull AI Website Application',
        projectDescriptionShort: 'Mindfull is an AI Website that focuses on sustainability.',
        projectDescription: `Mindfull is an AI Website that focuses on sustainability.
        This project was made for the NextGen StartUp Challenge 2026 hackathon in MAPUA Makati branch. Our team StillWater secured the Top 10 Finalist position in the hackathon and was able to move to the next round which is presenting our idea. Unfortunately, the development of this project was stop because the team were not able to advance to top 5. As one of the members of the team, I'm grateful for the experience and the opportunity to work with such a talented group of individuals.Below this, were the documentations of the project such as the design, the announcement, and the video presentation of the project. For the development of the project, we used React, Tailwind, OpenAI API for the AI features, Python for the backend and Supabase for the database.`,
        id: '5',
        documentation: [topResult, mindfullPic, promptcoach,wellness],
        video: video
    }
];