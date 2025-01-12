import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [rating, setRating] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Feedback submitted:', { name, email, message, subject, rating, subscribe });
  };

  return (
    <Container className="mt-5 mb-5">
      <h1>Contact Page</h1>
      <p>Get in touch with us through this page.</p>

      <h3 className="mt-5">Steps to Contact Us</h3>
      <ol>
        <li>Fill out the contact form.</li>
        <li>Submit the form.</li>
        <li>Wait for our response.</li>
      </ol>


      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="subject">
          <Form.Label>Subject:</Form.Label>
          <Form.Control
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="rating">
          <Form.Label>Rating:</Form.Label>
          <Form.Select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="">Select a rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="subscribe">
          <Form.Check
            type="checkbox"
            label="Subscribe to newsletter"
            checked={subscribe}
            onChange={(e) => setSubscribe(e.target.checked)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;