import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function OffersPage() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Special Offers at Ideal Ice Cream</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>20% Off Your First Order!</Card.Title>
              <Card.Text>
                New customers can enjoy 20% off on their first ice cream order. Use code <strong>FIRST20</strong> at checkout.
              </Card.Text>
              <Button variant="primary">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Refer a Friend, Get a Free Scoop!</Card.Title>
              <Card.Text>
                Invite a friend to join the Ideal Ice Cream family, and you'll both get a free scoop on your next order! Share your referral link now.
              </Card.Text>
              <Button variant="primary">Get Your Referral Link</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Buy One, Get One Free on Wednesdays!</Card.Title>
              <Card.Text>
                Every Wednesday, buy any ice cream and get another one absolutely free! No promo code needed. Just visit us on Wednesdays.
              </Card.Text>
              <Button variant="primary">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-center mt-5">
        <h4>Join the Ideal Ice Cream Family!</h4>
        <p>Sign up today and be the first to know about our latest offers, new flavors, and exclusive discounts.</p>
        <Button variant="success">Sign Up</Button>
      </div>
    </Container>
  );
}

export default OffersPage;
