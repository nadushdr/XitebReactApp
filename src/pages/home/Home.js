import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="featured">
        <div className="left">
          <div className="text-area">
            <h6>LOGISTICS</h6>
            <h1 className="best-shipping">Best Shipping</h1>
            <h1 className="partner">Partner</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
              rutrum dui. Cras condimentum nec tortor sed imperdiet. Vivamus vel
              mauris turpis. Morbi sollicitudin elit vitae lectus interdum
              efficitur.
            </p>
            <button className="btn-discover">DISCOVER HERE</button>
          </div>
        </div>
        <div className="right">
          <img
            src="/imgs/featured.jpg"
            className="featured-img"
            alt="featured"
          />
        </div>
      </div>

      <div className="welcome">
        <div className="left">
          <img src="/imgs/welcome.png" className="welcome-img" alt="welcome" />
        </div>
        <div className="right">
          <h2 className="title-top">TransMax Logistics</h2>
          <h2 className="title-bottom">
            Around <span className="world">the World</span>
          </h2>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
            rutrum dui. Cras condimentum nec tortor sed imperdiet. Vivamus vel
            mauris turpis. Morbi sollicitudin elit vitae lectus interdum
            efficitur.
          </p>
          <Link className="about-link">MORE ABOUT US</Link>
        </div>
      </div>

      <div className="stats">
        <img src="/imgs/stats.png" className="stats-img" alt="stats" />
      </div>

      <div className="testimonials">
        <img src="/imgs/t-left.png" className="t-left-img" alt="testimonials" />
        <img
          src="/imgs/t-right.png"
          className="t-right-img"
          alt="testimonials"
        />
      </div>

      <div className="client">
        <img src="/imgs/client.png" className="client-img" alt="client" />
      </div>
    </div>
  );
};

export default Home;
