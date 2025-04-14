import React from 'react';
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
  return (
    <div className="homepage">
      <header className="hero-section">
        <h1>Welcome to Ideal Ice Cream</h1>
        <p>Taste the magic in every bite!</p>
        <button className="btn btn-primary mt-3">Explore Flavors</button>
      </header>

      <section className="features container mt-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <h3>Fresh Ingredients</h3>
            <p>We use only the best natural ingredients for rich flavors.</p>
          </div>
          <div className="col-md-4 text-center">
            <h3>Unique Recipes</h3>
            <p>Our secret recipes guarantee a heavenly experience!</p>
          </div>
          <div className="col-md-4 text-center">
            <h3>Happy Customers</h3>
            <p>Thousands of smiles and counting!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
