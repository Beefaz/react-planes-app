import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import MainCarousel from "./components/mainPage/MainCarousel";
import Section from "./components/section/Section";
import InventoryCarousel from "./components/mainPage/InventoryCarousel";
import ItemPage from "./components/itemPage/ItemPage";
import {ITEMS} from "./constants/PlaneData";
import SectionContent from "./components/contactForm/ContactForm";


const App = () => {
    const [scrollTarget, setScrollTarget] = React.useState('home');

    useEffect(() => {
        if (scrollTarget !== 'home') {document.getElementById(scrollTarget).scrollIntoView({behavior:"smooth"})}
    });

    return (
        <div>
            <Router>
                <NavBar scrollTarget={scrollTarget} setScrollTarget={setScrollTarget}/>
                <Switch>
                    <Route exact path='/'>
                        <MainCarousel id='home'/>
                        <Section sectionName={'About us'} id='aboutUs'/>
                        <Section sectionName={'Adventure Flights'} id='adventureFlights'/>
                        <Section sectionName={'Services'} id='services'/>
                        <InventoryCarousel id='inventory'
                                           items={ITEMS}
                                           cardSize={300}
                        />
                    </Route>
                    {ITEMS.map((item, index) => (
                        <Route exact path={"/item/" + item.NAME.replace(/\s/g, "")}
                               key={'route'.concat(index.toString())}>
                            <ItemPage item={item}/>
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
            {console.log(scrollTarget)}
        </div>
    );
};

export default App;
