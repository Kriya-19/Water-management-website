import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>Water Management System</h1>
        <p>
          Efficient solutions for water
          conservation and smart usage.
        </p>
        <button className="cta-button">
          Learn More
        </button>
      </header>

      <section className="content">
        <h2>Why Water Management Matters?</h2>
        <p>
          Water conservation is essential for
          sustainable living. Our platform helps
          you track, analyze, and optimize water
          usage.
        </p>

        <div className="media-space">
          [Add Images/Videos Here]
        </div>
      </section>
    </div>
  );
}

export default Home;
