import { useState, useEffect } from 'react';

export function usePageTransition() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(false); // reset in case the component re-mounts with new props (e.g. Project page)

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 50); // tiny delay so the browser registers the initial "hidden" state before transitioning

        return () => clearTimeout(timer); // cleanup if the component unmounts early
    }, []);

    return isVisible;
}