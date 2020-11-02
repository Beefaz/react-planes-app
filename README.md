React web app

temp link: https://festive-euler-86d3c9.netlify.app/

libraries: react-bootstrap, react-router-dom, react-owl carousel

states, hooks, jsx

item content loaded from src/constants/PlaneData.jsx

to add new item, add item folder to src/planes, top img folder, otherimg folder, fill with images, extend object in PlaneData.jsx (works as local api...).

sections are loaded by order in item object.

object composition: state - section without name, video - section with iframe, all other object names will create sections with names as provided object names.