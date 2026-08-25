import { useState, useEffect, useRef } from 'react';
import './navigation.css';

export function Navigation({ activePage, onNavigate }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

    const navRefs = useRef({}); // stores a ref to each <li> keyed by page name

    const pages = [
        { key: 'home', label: 'Home' },
        { key: 'about', label: 'Projects' },
        { key: 'achievements', label: 'Achievements' },
    ];

    // --- Scroll listener: toggle floating glass nav ---
    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 20);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // --- Measure active nav item position, move the underline there ---
    useEffect(() => {
        function updateIndicator() {
            const activeEl = navRefs.current[activePage];
            if (activeEl) {
                setIndicatorStyle({
                    left: activeEl.offsetLeft,
                    width: activeEl.offsetWidth,
                });
            }
        }

        updateIndicator();
        window.addEventListener('resize', updateIndicator);
        return () => window.removeEventListener('resize', updateIndicator);
    }, [activePage, isMenuOpen]); // re-measure if menu opens (mobile layout shifts positions)

    const handleNavigate = (page) => {
        onNavigate(page);
        setIsMenuOpen(false);
    };

    return (
        <div className={`navigation-container ${isScrolled ? 'scrolled' : ''}`}>
            <div className='left-navigation'>
                <h2>Abella.</h2>
            </div>

            <button
                className={`hamburger ${isMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`right-navigation ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    {pages.map((page) => (
                        <li
                            key={page.key}
                            ref={(el) => (navRefs.current[page.key] = el)}
                            className={activePage === page.key ? 'active' : ''}
                            onClick={() => handleNavigate(page.key)}
                        >
                            {page.label}
                        </li>
                    ))}
                    {/* underline indicator - only visible/meaningful on desktop row layout */}
                    <span
                        className="nav-indicator"
                        style={{ left: `${indicatorStyle.left}px`, width: `${indicatorStyle.width}px` }}
                    ></span>
                </ul>
            </div>
        </div>
    )
}