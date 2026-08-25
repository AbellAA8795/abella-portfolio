import { useState } from 'react'
import { Navigation } from './navigations/navigation.jsx'
import { Home } from './pages/home.jsx'
import { About } from './pages/about.jsx'
import { Achievements } from './pages/achievements.jsx'
import { Project } from './pages/projects.jsx'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  function handleSelectProject(id) {
    setSelectedProjectId(id);
    setActivePage('project');
  }

  function renderPage() {
    switch (activePage) {
      case 'home': return <Home />;
      case 'about': return <About onSelectProject={handleSelectProject} />;
      case 'achievements': return <Achievements onSelectProject={handleSelectProject}/>;
      case 'project': return <Project projectId={selectedProjectId} onNavigate={setActivePage} />;
      default: return null;
    }
  }

  return (
    <>
      <Navigation activePage={activePage} onNavigate={setActivePage} />
      <main>{renderPage()}</main>
    </>
  )
}

export default App