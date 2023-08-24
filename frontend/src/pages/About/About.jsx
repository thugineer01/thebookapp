import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='About'>
      <button className="about-button"></button>

      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Thugineer's BookHub</h2>
            <p className='fs-17'>
              Welcome to Thugineer's BookHub, your go-to destination for discovering the latest and greatest in the world of fun literature books.

              <h2>Who is Thugineer?</h2>

              Hi there! I'm Thugineer, an avid book enthusiast and full-stack developer, the driving force behind this book recommendation platform. My love for reading has inspired me to create a space where fellow bookworms can come together to explore, share, and discuss their favorite books.

              <h2>My Mission</h2>

              At BookHub, our mission is simple yet profound: To foster a community of book lovers. The joy of reading should be celebrated, and that's exactly what we aim to do here.

              <h2>What We Offer</h2>

              <ul>
                <li>Discover Books: Explore a vast collection of books across various genres. Whether you're into thrilling mysteries, heartwarming romances, or mind-bending sci-fi, you'll find something that piques your interest.</li>
              </ul>

              Ready to embark on a literary journey with us? Join BookHub today, and let's dive into the fascinating world of books together.Happy Reading !!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
