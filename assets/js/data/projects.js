/**
 * Projects Data
 * All portfolio projects and case studies
 * Add new projects by adding objects to the array
 * Update status, links, and descriptions here
 */

export const projectsData = [
  {
    id: 1,
    title: 'College Showcase',
    description: 'A clean, responsive site for college information with smooth navigation and clear CTAs.',
    image: 'assets/img/work1.jpg',
    tags: ['HTML', 'CSS', 'JS'],
    liveUrl: 'https://clg.swaraj.ai.in',
    featured: true
  },
  {
    id: 2,
    title: 'To-do Lab',
    description: 'A simple productivity tool built to stay lightweight and mobile-friendly.',
    image: 'assets/img/work2.png',
    tags: ['Vanilla JS', 'LocalStorage'],
    liveUrl: 'https://lab.swaraj.ai.in/to-do-list/',
    featured: true
  },
  {
    id: 3,
    title: 'Weather API',
    description: 'Fetches live weather data with a clean UI and clear state handling.',
    image: 'assets/img/work3.png',
    tags: ['API', 'Async JS'],
    liveUrl: 'https://lab.swaraj.ai.in/Weather-api/',
    featured: true
  },
  {
    id: 4,
    title: 'Next Up',
    description: 'New experiments in UI/UX and campaigns are on the way.',
    image: 'assets/img/soon.jpg',
    tags: ['Design', 'Build'],
    liveUrl: null,
    featured: false,
    comingSoon: true
  }
];
