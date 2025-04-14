import React from "react";
import { Button, Form } from "react-bootstrap";

export default function Cart({ cart, increment, decrement, removeFromCart, updateCustomization }) {
  const parsePrice = (price) => {
    const priceWithoutSymbol = price.replace("₹", ""); 
    const parsedPrice = parseFloat(priceWithoutSymbol);  
    console.log("Parsed Price:", parsedPrice);  
    return parsedPrice;
  };

  const calculateTotal = () => {
    const total = cart.reduce((sum, item) => {
      const itemPrice = parsePrice(item.price);
      const itemTotal = itemPrice * item.quantity;
      console.log(`Item Total for ${item.name}: ₹${itemTotal}`);  
      return sum + itemTotal;
    }, 0);
    console.log("Total Price:", total);  
    return total.toFixed(2); 
  };

  
  const handleCustomizationChange = (id, field, value) => {
    updateCustomization(id, field, value);
  };

  return (
    <div className="mt-5">
      <h2>🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id + item.size + item.flavor}
            className="d-flex align-items-center justify-content-between border p-2 rounded mb-2"
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                width={60}
                height={60}
                className="rounded"
                style={{ objectFit: "cover" }}
              />
              <div>
                <strong>{item.name}</strong><br />
                <small>Size: </small>
                <Form.Control
                  as="select"
                  value={item.size}
                  onChange={(e) => handleCustomizationChange(item.id, 'size', e.target.value)}
                  size="sm"
                  className="d-inline w-auto"
                >
                  <option value="Regular">Regular</option>
                  <option value="Large">Large</option>
                  <option value="Small">Small</option>
                </Form.Control>
                <br />
                <small>Flavor: </small>
                <Form.Control
                  as="select"
                  value={item.flavor}
                  onChange={(e) => handleCustomizationChange(item.id, 'flavor', e.target.value)}
                  size="sm"
                  className="d-inline w-auto"
                >
                  <option value="Classic">Classic</option>
                  <option value="Vanilla">Vanilla</option>
                  <option value="Chocolate">Chocolate</option>
                </Form.Control>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2">
              <Button variant="light" onClick={() => decrement(item.id)}>-</Button>
              <span>{item.quantity}</span>
              <Button variant="light" onClick={() => increment(item.id)}>+</Button>
            </div>

            <div className="d-flex align-items-center gap-2">
              <div>₹{parsePrice(item.price) * item.quantity}</div> {/* Price calculation */}
              <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <h4 className="mt-3">Total: ₹{calculateTotal()}</h4>
      )}
    </div>
  );
}
