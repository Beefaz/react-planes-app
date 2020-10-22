import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import MainCarousel from "./components/mainPage/MainCarousel";
import Section from "./components/section/Section";
import Inventory from "./components/mainPage/Inventory";
import ItemPage from "./components/itemPage/ItemPage";
import {ITEMS} from "./planes/FolderList";
import {Form, Button} from "react-bootstrap"


const App = () => {
    const sectionContent = {
        form:
            <Form name="contact" method="post" data-netlify onSubmit="submit">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    };
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
                        <Inventory id='inventory' items={ITEMS}/>
                    </Route>

                    {ITEMS.map((item, index) => (
                        <Route exact path={"/item/" + item.NAME.replace(/\s/g, "")}
                               key={index}>
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
                <Section sectionName={'Contact us'} id='contacts' sectionContent={sectionContent.form}/>
            </Router>
        </div>
    );
};

export default App;
