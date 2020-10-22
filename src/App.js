import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import MainCarousel from "./components/mainPage/MainCarousel";
import AboutUs from "./components/mainPage/AboutUs";
import Inventory from "./components/mainPage/Inventory";
import ItemPage from "./components/itemPage/ItemPage";
import {ITEMS} from "./planes/FolderList";

const App = () => {
    return (
        <div>
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path={'/'}>
                        <MainCarousel id='home'/>
                        <AboutUs id='aboutUs'/>
                        <Inventory id='inventory' items={ITEMS}/>
                    </Route>
                    {ITEMS.map((item, index) => (
                        <Route exact path={"/item/"+item.NAME.replace(/\s/g, "")}
                               key={index}>
                            <ItemPage item={item}/>
                        </Route>
                    ),)}
                    <Route path='/*'>
                        <div>ERROR</div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
