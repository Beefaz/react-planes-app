import React from 'react';
import {Col, Form, Button} from "react-bootstrap";


const SectionContent = {
    form: <Col md={6}>
        <Form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact-form"/>
            <Form.Group controlId="name">
                <Form.Control name="name" placeholder="Name"/>
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Control name="email" placeholder="E-mail"/>
            </Form.Group>

            <Form.Group controlId="subject">
                <Form.Control name="subject" placeholder="Subject"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="Message" name="message" rows={3}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Col>
};

export default SectionContent;