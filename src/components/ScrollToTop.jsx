import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router';

// Start each newly opened page at the top; leave back/forward scroll restoration alone.
const ScrollToTop = () => {
    const { pathname } = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        if (navigationType !== 'POP') {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
    }, [pathname, navigationType]);

    return null;
};

export default ScrollToTop;
