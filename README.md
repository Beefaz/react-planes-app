React web app

todo: 35 pages for each available item (currently 10+);
todo?: 3D inventory carousel?

temp link: https://festive-euler-86d3c9.netlify.app/

libraries: react-bootstrap, react-router-dom, react-alice-carousel

states, hooks, jsx, minor inline params, js object styling.

Links and navbar items generate dynamically from src/constants/Links.jsx

Carousel items generate dynamically from src/constants/MainCarouselIems.jsx

Everything else iss loaded from src/planes/ and src/planes/PlaneData.jsx

src/planes/PlaneData.jsx CONTENT object sequence defines order of sections loaded,

object names (*_video, *_list, *_table, *_unnamed) within CONTENT defines the section type for render.

current SEO rating (Lighthouse web tool - web.dev/measure): performance 90/100, accessibility 92/100, best practices 100/100, SEO 100/100.
