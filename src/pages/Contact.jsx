import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../styles/contact-us.css"; 

const Contact = () => {
  return (
    <Container className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <Row>
        <Col lg="6" md="12" className="contact-form-col">
          <Form className="contact-form">
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Your Name" required />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Your Email" required />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="textarea" name="message" id="message" placeholder="Your Message" required />
            </FormGroup>
            <Button className="submit-btn">Send Message</Button>
          </Form>
        </Col>

        <Col lg="6" md="12" className="contact-info-col">
          <h5 className="contact-info-title">Get in Touch</h5>
          <p>If you have any questions, feel free to reach out to us through this form or connect with us on social media.</p>
          <h5 className="contact-info-title">Follow Us</h5>
          <ul className="contact-social-links">
            <li>
              <a href="https://www.facebook.com/yourprofile">
                <i className="ri-facebook-line"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://github.com/ayatallan">
                <i className="ri-github-line"></i> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/yourprofile">
                <i className="ri-instagram-line"></i> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yourprofile/">
                <i className="ri-linkedin-line"></i> LinkedIn
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg="12">
          <h5 className="newsletter-title">Subscribe to Our Newsletter</h5>
          <p>Stay updated with our latest collections and offers.</p>
          <div className="newsletter">
            <Input type="email" placeholder="Enter your email" />
            <span className="newsletter-btn">
              <i className="ri-send-plane-line"></i>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
