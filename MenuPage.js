import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const MenuPage = ({ addToCart }) => {
  const iceCreamItems = [
    { id: 1, name: "Vanilla Dream", description: "Classic vanilla ice cream made with real vanilla beans.", price: "360", image: "https://images.pexels.com/photos/11161261/pexels-photo-11161261.jpeg?auto=compress&cs=tinysrgb&h=800" },
    { id: 2, name: "Chocolate Heaven", description: "Rich and creamy chocolate ice cream that melts in your mouth.", price: "415", image: "https://images.pexels.com/photos/3883858/pexels-photo-3883858.jpeg?auto=compress&cs=tinysrgb&h=800" },
    { id: 3, name: "Strawberry Delight", description: "Fresh strawberry ice cream with chunks of real strawberries.", price: "390", image: "https://images.pexels.com/photos/7518552/pexels-photo-7518552.jpeg?auto=compress&cs=tinysrgb&h=800" },
    { id: 4, name: "Mint Chip", description: "Cool mint ice cream with delightful chocolate chips.", price: "410", image: "https://images.pexels.com/photos/29851712/pexels-photo-29851712.jpeg?auto=compress&cs=tinysrgb&h=800" },
    { id: 5, name: "Cookie Dough", description: "Vanilla ice cream loaded with chunks of cookie dough.", price: "450", image: "https://images.pexels.com/photos/6431604/pexels-photo-6431604.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 6, name: "Rocky Road", description: "Chocolate ice cream with almonds and marshmallow swirls.", price: "460", image: "https://images.pexels.com/photos/5060383/pexels-photo-5060383.jpeg?auto=compress&cs=tinysrgb&h=800" },
    { id: 7, name: "Coffee Fix", description: "Smooth coffee ice cream for coffee lovers.", price: "400", image: "https://images.pexels.com/photos/3151778/pexels-photo-3151778.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 8, name: "Pistachio Passion", description: "Nutty and creamy pistachio ice cream with a hint of salt.", price: "480", image: "https://images.pexels.com/photos/3770058/pexels-photo-3770058.jpeg?auto=compress&cs=tinysrgb&h=800" },
    { id: 9, name: "Mango Sorbet", description: "Refreshing and dairy-free mango sorbet with tropical flair.", price: "354", image: "https://images.pexels.com/photos/28347061/pexels-photo-28347061/free-photo-of-a-scoop-of-ice-cream-sits-on-a-table-next-to-a-magazine.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ];

  const handleOrder = (item) => {
    addToCart({ ...item, size: "Regular", flavor: "Classic" });
  };


return (
  <Container className="mt-5">
    <h2 className="text-center mb-4">Our Ice Cream Menu</h2>
    <Row>
      {iceCreamItems.map(item => (
        <Col key={item.id} md={4} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src={item.image} className="ice-cream-image" />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <div className="mt-auto">
                <h6 className="text-primary">₹{item.price}</h6>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="mt-2"
                  onClick={() => handleOrder(item)}
                >
                  Order Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);
};

export default MenuPage;