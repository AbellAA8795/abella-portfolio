import { projectsData } from "../data/projectsData.js";
import laptop from "../assets/laptop.gif";
import "./index.css";
import { usePageTransition } from '../hooks/usePageTransition.js'

function Development({
  coverImage,
  projectName,
  projectDescriptionShort,
  onLearnMore,
}) {
  return (
    <div className="grid-item">
      <div
        style={{ backgroundImage: `url(${coverImage})` }}
        className="picture-container"
      ></div>
      <h2 style={{ textAlign: "center", fontSize: "1.15rem" }}>
        {projectName}
      </h2>
      <p style={{ fontSize: "1rem" }}>{projectDescriptionShort}</p>

      {projectName === "POS-Tea Point of Sale System for Milktea Shop" ? (
        <a href="https://08abellagabriel.wixsite.com/pos-tea" target="_blank"><button  className="learn-more-button">Visit Site</button></a>
      ) : (
        <button className="learn-more-button" onClick={onLearnMore}>
          Learn More
        </button>
      )}
    </div>
  );
}

export function About({ onSelectProject }) {

    const isVisible = usePageTransition();
  return (
    <div className={`about-wrapper page-transition ${isVisible ? 'visible' : ''}`}>
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
          src={laptop}
          alt="Laptop"
        />
        <h1>Projects</h1>
        <p>Here are some of my projects.</p>
      </div>

      <div style={{ margin: "50px 0" }} className="development-count">
        <div className="container-projects container-projects-1">
          <h2>5</h2>
          <p>Projects</p>
        </div>
        <div className="container-projects container-projects-2">
          <h2>20</h2>
          <p>Repositories</p>
        </div>
        <div className="container-projects container-projects-3">
          <h2>67</h2>
          <p>Contributions</p>
        </div>
      </div>

      <h2 style={{ marginBottom: "20px" }}>Development Projects</h2>
      <div className="grid-container-about">
        {projectsData.map((item) => (
          <Development
            key={item.id}
            coverImage={item.coverImage}
            projectName={item.projectName}
            projectDescriptionShort={item.projectDescriptionShort}
            onLearnMore={() => onSelectProject(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
