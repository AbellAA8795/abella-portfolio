import { useState } from "react";
import trophy from '../assets/trophy.gif'
import "./index.css";
import { usePageTransition } from '../hooks/usePageTransition.js'

function Development({ projectName, projectDescription }) {
  return (
    <div className="grid-item-achievements">
      <h2 style={{ textAlign: "center", fontSize: "1.15rem" }}>
        {projectName}
      </h2>
      <p style={{ fontSize: "1rem" }}>{projectDescription}</p>
    </div>
  );
}

function AcademicAward({
  academicAwardName,
  academicAwardDescription,
  academicAwardSchool,
}) {
  return (
    <div className="grid-item-achievements">
      <h2 style={{ textAlign: "center", fontSize: "1.15rem" }}>
        {academicAwardName}
      </h2>
      <p style={{ fontSize: "1rem" }}>{academicAwardDescription}</p>
      <p style={{ fontSize: "0.9rem", color: "gray" }}>{academicAwardSchool}</p>
    </div>
  );
}

function Hackathon({ hackathonName, hackthonGroupName, hackathonPlacement, onLearnMore }) {
  return (
    <div className="grid-item-achievements">
      <h2 style={{ textAlign: "center", fontSize: "1.15rem" }}>
        {hackathonName}
      </h2>
      <p style={{ fontSize: "1rem" }}>{hackthonGroupName}</p>
      <p style={{ fontSize: "0.9rem", color: "gray" }}>{hackathonPlacement}</p>
      <button className="learn-more-button" onClick={onLearnMore}>Learn More</button>
    </div>
  );
}

export function Achievements({ onSelectProject }) {
  const isVisible = usePageTransition();

  const [currentAchievement, setCurrentAchievement] = useState([
    {
      achievementName:
        "Startup Spark: Learning the Mindset of future Innovators",
      achievementDescription: "Date: 2026-06-11",
      id: "1",
    },
    {
      achievementName:
        "Sexual Orientation, Gender Identity and Expression (SOGIE) Seminar",
      achievementDescription: "Date: 2025-09-29",
      id: "2",
    },
  ]);

  const [currentAcademicAward, setCurrentAcademicAward] = useState([
    {
      academicAwardName: "Deans Lister",
      academicAwardDescription: "2nd Semester, SY 2025-2026",
      academicAwardSchool: "Pamantasan ng Lungsod ng Pasig",
      id: "1",
    },
    {
      academicAwardName: "Deans Lister",
      academicAwardDescription: "2nd Semester, SY 2024-2025",
      academicAwardSchool: "Pamantasan ng Lungsod ng Pasig",
      id: "2",
    },
    {
      academicAwardName: "With Honors",
      academicAwardDescription: "12th Grade Senior Highschool, SY 2023-2024",
      academicAwardSchool: "Rizal High School",
      id: "3",
    },
  ]);

  const [currentHackathon, setCurrentHackathon] = useState([
    {
      hackathonName: "NextGen Start-Up-Challenge 2026",
      hackthonGroupName: "Date: 2026-05-27",
      hackathonPlacement: "Top 10 Finalist",
      id: "1",
      relatedProjectId: "5", // id of the Mindfull project in projectsData.js
    },
  ]);

  return (
    <div className={`achievements-wrapper page-transition ${isVisible ? 'visible' : ''}`}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
          flexDirection: "column",
        }}
        className="banner"
      >
        <img
          style={{ width: "20%", height: "auto" }}
          src={trophy}
          alt="Trophy"
        />
        <h1>Achievements</h1>
        <p>Here are some of my accomplishments.</p>
      </div>

      <div style={{ margin: "50px 0" }} className="development-count">
        <div className="container-projects">
          <h2>1</h2>
          <p>Hackathons</p>
        </div>
        <div className="container-projects">
          <h2>2</h2>
          <p>Seminars Attended</p>
        </div>
        <div className="container-projects">
          <h2>3</h2>
          <p>Academic Awards</p>
        </div>
      </div>

      <h2 style={{ marginBottom: "10px" }}>Hackathons</h2>
      <div className="grid-container-achievements">
        {currentHackathon.map((hackathon) => (
          <Hackathon
            key={hackathon.id}
            hackathonName={hackathon.hackathonName}
            hackthonGroupName={hackathon.hackthonGroupName}
            hackathonPlacement={hackathon.hackathonPlacement}
            onLearnMore={() => onSelectProject(hackathon.relatedProjectId)}
          />
        ))}
      </div>

      <h2 style={{ marginBottom: "10px" }}>Seminars Attended</h2>
      <div className="grid-container-achievements">
        {currentAchievement.map((achievement) => (
          <Development
            key={achievement.id}
            projectName={achievement.achievementName}
            projectDescription={achievement.achievementDescription}
          />
        ))}
      </div>

      <h2 style={{ marginBottom: "10px" }}>Academic Awards</h2>
      <div className="grid-container-achievements">
        {currentAcademicAward.map((award) => (
          <AcademicAward
            key={award.id}
            academicAwardName={award.academicAwardName}
            academicAwardDescription={award.academicAwardDescription}
            academicAwardSchool={award.academicAwardSchool}
          />
        ))}
      </div>
    </div>
  );
}