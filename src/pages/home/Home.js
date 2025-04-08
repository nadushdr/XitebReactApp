import React from "react";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import AddBoxIcon from "@mui/icons-material/AddBox";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="featured">
          <div className="left">
            <div className="text-area">
              <h6>LOGISTICS</h6>
              <h1 className="best-shipping">Best Shipping</h1>
              <h1 className="partner">Partner</h1>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                rutrum dui. Cras condimentum nec tortor sed imperdiet. Vivamus
                vel mauris turpis. Morbi sollicitudin elit vitae lectus interdum
                efficitur.
              </p>
              <button className="btn-discover">DISCOVER HERE</button>
            </div>
          </div>
          <div className="right">
            <img
              src="/imgs/featured.png"
              className="featured-img"
              alt="featured"
            />
          </div>
        </div>

        <div className="welcome">
          <div className="left">
            <img
              src="/imgs/welcome.png"
              className="welcome-img"
              alt="welcome"
            />
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

        <div className="services">
          <h5>Real Solution, Real Fast!</h5>
          <h1>Best Global Logistics Solutions.</h1>

          <div className="card-container">
            <div className="card">
              <img src="/imgs/ship.jpg" />
              <div className="text-area">
                <h2>Air Freight Services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac rutrum dui.
                </p>
                <button>
                  <ArrowCircleRightIcon />
                  Read More
                </button>
              </div>
            </div>
            <div className="card">
              <img src="/imgs/plane.jpg" />
              <div className="text-area">
                <h2>Air Freight Services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac rutrum dui.
                </p>
                <button>
                  <ArrowCircleRightIcon /> Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="stats">
          <img src="/imgs/stats.png" className="stats-img" alt="stats" />
        </div>

        <div className="testimonials">
          <div className="left">
            <h1>TRUSTED CLIENTS</h1>
            <h3>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h3>
            <div className="box">
              <p className="review">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                rutrum dui. Cras condimentum nec tortor sed imperdiet. Vivamus
                vel mauris turpis. Morbi sollicitudin elit vitae lectus interdum
                efficitur.
              </p>
            </div>
            <h5 className="name">JOHN DOE</h5>
            <p className="position">Managing Director</p>
          </div>
          <div className="right">
            <h1>WHY CHOOSE US</h1>
            <h3>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h3>

            <div className="box">
              <div className="fact">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <AddBoxIcon />
              </div>
              <div className="fact">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <AddBoxIcon />
              </div>
              <div className="fact">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <AddBoxIcon />
              </div>
              <div className="fact">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <AddBoxIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="client">
          <img src="/imgs/client.png" className="client-img" alt="client" />
        </div>

        <div className="news">
          <h1>LATEST NEWS</h1>
          <h5>INTEGER CONGUE ELIT</h5>

          <div className="card-container">
            <div className="card">
              <img src="/imgs/news1.jpg" />
              <div className="text-area">
                <h2>Air Freight Services</h2>
                <div className="insight">
                  <p>Admin</p>
                  <QuestionAnswerIcon />
                  <p>15</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac rutrum dui.
                </p>
              </div>
            </div>
            <div className="card">
              <img src="/imgs/news2.jpg" />
              <div className="text-area">
                <h2>Air Freight Services</h2>
                <div className="insight">
                  <p>Admin</p>
                  <QuestionAnswerIcon />
                  <p>15</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac rutrum dui.
                </p>
              </div>
            </div>
            <div className="card">
              <img src="/imgs/news3.jpg" />
              <div className="text-area">
                <h2>Air Freight Services</h2>
                <div className="insight">
                  <p>Admin</p>
                  <QuestionAnswerIcon />
                  <p>15</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac rutrum dui.
                </p>
              </div>
            </div>
            <div className="card">
              <img src="/imgs/news4.jpg" />
              <div className="text-area">
                <h2>Air Freight Services</h2>
                <div className="insight">
                  <p>Admin</p>
                  <QuestionAnswerIcon />
                  <p>15</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac rutrum dui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
