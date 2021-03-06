import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import MainCarousel from "./components/mainPage/MainCarousel";
import Section from "./components/section/Section";
import InventoryCarousel from "./components/mainPage/InventoryCarousel";
import ItemPage from "./components/itemPage/ItemPage";
import {ITEMS} from "./planes/PlaneData";


const App = () => {
    const [scrollTarget, setScrollTarget] = useState('');
    useEffect(() => {
        if (scrollTarget !== '') {document.getElementById(scrollTarget).scrollIntoView({behavior:"smooth"})}
        setScrollTarget('');
    },[scrollTarget, setScrollTarget]);

    return <div>
            <Router>
                <NavBar scrollTarget={scrollTarget} setScrollTarget={setScrollTarget} id='navbar'/>
                <Switch>
                    <Route exact path='/'>
                        <MainCarousel id='home'/>
                        <Section sectionName={'About us'} id='aboutUs'/>
                        <Section sectionName={'Adventure Flights'} id='adventureFlights'/>
                        <Section sectionName={'Services'} id='services'/>
                        <InventoryCarousel id='inventory'
                                           items={ITEMS}
                        />
                    </Route>
                    {ITEMS.map((item, index) => (
                        <Route exact path={"/item/" + item.NAME.replace(/\s/g, "")}
                               key={'route'.concat(index.toString())}>
                            <ItemPage item={item}/>
                        </Route>
                    ),)}
                    <Route path='/*'>
                        <Section style={{position: 'relative', top:'48px'}} sectionName={'OOPS, AN ERROR OCCURRED, TRY LINKS ABOVE'}/>
                    </Route>
                </Switch>
                <Section sectionName={'Contact us'} id='contacts' form={true}/>
            </Router>
        </div>
};

export default App;
