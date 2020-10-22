React web app

temp link: https://festive-euler-86d3c9.netlify.app/

libraries: npm react-bootstrap, npm react-owl carousel

states, hooks, jsx

item content loaded by https://github.com/Beefaz/react-planes-app/blob/master/src/planes/FolderList.jsx

to add new item, add item folder, top img folder, otherimg folder, txt files you wish to be displayed

extend object in FolderList.jsx with same style as included, but change the folder names.

paragraphs are created from item .txt files, images - from topimg and otherimg folders for each according item folder.

Solution to make loader function dynamic not available yet, as it gets reference, not a string. Also all refs are compiled as file bundle to media folder in browser. Same file names might cause problems. TODO after project is fully launched.