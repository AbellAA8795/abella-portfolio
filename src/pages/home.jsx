import { usePageTransition } from '../hooks/usePageTransition.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePic from '../assets/profile-pic.jpg'
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import plplogo from '../assets/plplogo.jpg'
import rizallogo from '../assets/rizalhighlogo.jpg'
import palatiwlogo from '../assets/palatiwelem.jpg'
import './index.css'

function TechStackTable() {
    const stacks = [
        {
            title: 'Languages/Libraries',
            items: ['Javascript', 'Java', 'Python', 'React', 'Tailwind']
        },
        {
            title: 'DBMS',
            items: ['MySQL', 'MSSQL']
        },
        {
            title: 'Tools',
            items: ['Figma', 'Photoshop', 'Canva', 'Visual Studio Code']
        }
    ];

    return (
        <table className="tech-stack-table">
            <tbody>
                {stacks.map((row) => (
                    <tr key={row.title}>
                        <td className="tech-stack-title">{row.title}</td>
                        <td className="tech-stack-items">{row.items.join(', ')}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function EducationCard({ level, school, yearRange, logo }) {
    return (
        <div className="grid-item-education">
            <h3 style={{ textAlign: 'center', fontSize: '1.15rem' }}>{level}</h3>
            <img style={{height:'50px'}} src={logo}/>
            <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>{school}</p>
            <p style={{ fontSize: '0.9rem', color: 'gray' }}>{yearRange}</p>
        </div>
    );
}

function Education() {
    const educationData = [
        {
            level: 'College',
            school: 'Pamantasan ng Lungsod ng Pasig',
            logo: plplogo,
            yearRange: '2024 - Present',
            id: '1'
        },
        {
            level: 'Senior High School',
            school: 'Rizal High School',
            logo:rizallogo,
            yearRange: '2023 - 2024',
            id: '2'
        },
        {
            level: 'Elementary School',
            school: 'Palatiw Elementary School',
            logo:palatiwlogo,
            yearRange: '2017 - 2018',
            id: '3'
        }
    ];

    return (
        <div className="education-wrapper">
            <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Educational Background</h2>
            <div className="grid-container-education">
                {educationData.map((item) => (
                    <EducationCard
                        key={item.id}
                        level={item.level}
                        school={item.school}
                        yearRange={item.yearRange}
                        logo={item.logo}
                    />
                ))}
            </div>
        </div>
    );
}

export function Home() {
    const isVisible = usePageTransition();

    return (
        <div className={`grid-container page-transition ${isVisible ? 'visible' : ''}`}>
            <div className="profile">
                <div style={{ backgroundImage: `url(${profilePic})` }} className="profile-picture"></div>
                <div className="profile-description">
                    <h1 style={{ fontSize: '40px' }}>Hi There!</h1>
                    <p style={{ marginTop: '20px', fontSize: '20px' }}>My name is Gabriel Rey Abella, a BSIT 3rd year student in the Philippines.</p>

                    <a
                        href={`${import.meta.env.BASE_URL}cv.pdf`}
                        download="Gabriel_Rey_Abella_CV.pdf"
                        className="learn-more-button"
                    >
                        Download CV
                    </a>

                    <p style={{ marginTop: '30px', fontSize: '20px' }}>Socials</p>
                    <ul style={{ listStyle: 'none', display: 'inline-flex', gap: '20px', cursor: 'pointer' }}>
                        <li><a style={{ color: 'black' }} href="https://github.com/AbellAA8795"><FontAwesomeIcon style={{ width: '30px', height: '30px' }} icon={faGithub} /></a></li>
                        <li><a style={{ color: 'black' }} href="https://www.facebook.com/gabrielrey.abella.9"><FontAwesomeIcon style={{ width: '30px', height: '30px' }} icon={faFacebook} /></a></li>
                        <li><a style={{ color: 'black' }} href="https://www.linkedin.com/in/gabriel-rey-abella-870384189/"><FontAwesomeIcon style={{ width: '30px', height: '30px' }} icon={faLinkedin} /></a></li>
                    </ul>
                </div>
            </div>

          <Education />

            <div className="tech-stacks">
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Tech Stack</h2>
                <TechStackTable />
            </div>

            
        </div>
    )
}