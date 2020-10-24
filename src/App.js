import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import MainCarousel from "./components/mainPage/MainCarousel";
import Section from "./components/section/Section";
import InventoryCarousel from "./components/mainPage/InventoryCarousel";
import ItemPage from "./components/itemPage/ItemPage";
import {ITEMS} from "./planes/DATA";
import SectionContent from "./components/contactForm/ContactForm";


const App = () => {

    return (
        <div>
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path='/'>
                        <MainCarousel id='home'/>
                        <Section sectionName={'About us'} id='aboutUs'/>
                        <Section sectionName={'Adventure Flights'} id='adventureFlights'/>
                        <Section sectionName={'Services'} id='services'/>
                        <InventoryCarousel id='inventory' items={ITEMS} cardSize={300}/>
                    </Route>
                    {ITEMS.map((item, index) => (
                        <Route exact path={"/item/" + item.NAME.replace(/\s/g, "")}
                               key={'route'.concat(index.toString())}>
                            <ItemPage item={item} onLoad={() => {
                                window.scrollTo({top: 0, behavior: 'auto'})
                            }}/>
                        </Route>
                    ),)}
                    <Route exact path='/#services'>
                    </Route>
                    <Route path='/*'>
                        <div>ERROR</div>
                    </Route>
                </Switch>
                <Section sectionName={'Contact us'} id='contacts' sectionContent={SectionContent.form}/>
            </Router>
        </div>
    );
};

export default App;
