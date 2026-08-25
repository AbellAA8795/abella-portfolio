import { projectsData } from '../data/projectsData.js'
import { usePageTransition } from '../hooks/usePageTransition.js'
import './project.css'

function ProjectInformation({ projectName, projectDescription, documentation, video }) {
    return (
        <div className="project-card">
            <h3>{projectName}</h3>
            
            <p>{projectDescription}</p>
            {video && (
                <video controls src={video} className="project-video" />
            )}

            <h1 style={{ marginTop: '20px' }}>Images</h1>
            {documentation && documentation.length > 0 && (
                <div className="documentation-grid">
                    {documentation.map((doc, index) => (
                        <img key={index} src={doc.url || doc} alt={doc.name || `${projectName} screenshot ${index + 1}`} />
                    ))}
                </div>
            )}
        </div>
    );
}

export function Project({ projectId, onNavigate }) {
    const project = projectsData.find((item) => item.id === projectId);
    const isVisible = usePageTransition();


     if (!project) {
        return (
            <div className={`project-wrapper page-transition ${isVisible ? 'visible' : ''}`}>
                <p>Project not found.</p>
                <button onClick={() => onNavigate('about')}>Back to Projects</button>
            </div>
        );
    }

    return (
        <div className={`project-wrapper page-transition ${isVisible ? 'visible' : ''}`}>
            <button className="back-button" onClick={() => onNavigate('about')}>&larr; Back to Projects</button>
            <ProjectInformation
                coverImage={project.coverImage}
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                documentation={project.documentation}
                video={project.video}
            />
        </div>
    );
}