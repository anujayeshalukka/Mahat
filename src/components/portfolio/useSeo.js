import { useEffect } from 'react';
import { SITE_URL } from '../../constants/contact';

/* Sets an attribute on an existing <head> tag and returns a function that restores it. */
const swapAttribute = (selector, attribute, value) => {
    const element = document.head.querySelector(selector);
    if (!element) return () => {};
    const previous = element.getAttribute(attribute);
    element.setAttribute(attribute, value);
    return () => element.setAttribute(attribute, previous);
};

/*
 * Per-page SEO for the portfolio routes.
 *
 * index.html already contains the homepage title, description, canonical and
 * social tags. This hook updates those same tags while a portfolio page is
 * open and puts the homepage values back when the page is left, so there is
 * never a duplicate canonical or description.
 */
const useSeo = ({ title, description, path, noindex = false }) => {
    useEffect(() => {
        const url = `${SITE_URL}${path}`;
        const previousTitle = document.title;
        document.title = title;

        const restore = [
            swapAttribute('meta[name="description"]', 'content', description),
            swapAttribute('link[rel="canonical"]', 'href', url),
            swapAttribute('meta[property="og:url"]', 'content', url),
            swapAttribute('meta[property="og:title"]', 'content', title),
            swapAttribute('meta[property="og:description"]', 'content', description),
            swapAttribute('meta[name="twitter:title"]', 'content', title),
            swapAttribute('meta[name="twitter:description"]', 'content', description),
        ];

        let robots = null;
        if (noindex) {
            robots = document.createElement('meta');
            robots.name = 'robots';
            robots.content = 'noindex, follow';
            document.head.appendChild(robots);
        }

        return () => {
            document.title = previousTitle;
            restore.forEach((undo) => undo());
            if (robots) robots.remove();
        };
    }, [title, description, path, noindex]);
};

export default useSeo;
