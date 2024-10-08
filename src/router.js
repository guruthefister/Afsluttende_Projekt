import { renderHome } from './pages/index.js'
import { renderAbout } from './pages/about.js'
import { renderContact } from './pages/contact.js'
import { renderCoding } from './pages/coding.js'
import { renderFreetime } from './pages/freetime.js'
import { renderProjects } from './pages/projects.js'

export const route = (event) => {

    event && event.preventDefault();

    const href = event?.target?.href || window.location.pathname;
    window.history.pushState({}, "", href);

    handleLocation();
};

const routes = {
    "/": renderHome,
    "/about": renderAbout,
    "/contact": renderContact,
    "/coding": renderCoding,
    "/freetime": renderFreetime,
    "/projects": renderProjects,
    404: () => {
        const mpage = document.querySelector('#mainpage');
        mpage.innerHTML = "<h2>666</h2>";
    }
};

export const handleLocation = async () => {

    const path = window.location.pathname;
    const route = routes[path] || routes[404];

    if (typeof route == 'function') await route();
};

window.onpopstate = handleLocation;

document.addEventListener("DOMContentLoaded", () => {
    handleLocation();
});

window.route = route;
