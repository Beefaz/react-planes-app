import React from 'react';
import NavBar from "./components/navbar/NavBar";
import MainCarousel from "./components/mainPage/MainCarousel";
import AboutUs from "./components/mainPage/AboutUs";
import Inventory from "./components/mainPage/Inventory";
import ItemPage from "./components/itemPage/ItemPage";

const App = () => {
    return (
        <div>
            <NavBar id='home'/>
            <MainCarousel/>
            <AboutUs id='aboutUs'/>
            <Inventory id='inventory'/>
            <ItemPage/>
        </div>
    );
};

export default App;
