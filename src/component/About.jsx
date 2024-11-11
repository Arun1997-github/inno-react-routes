import React from 'react'
import innomaticsLogo from "../assets/innomatics-logo.png";

const About = () => {
  return (
    <div className="about-container">
      <img src={innomaticsLogo} alt="innomatics-logo" />
      <div className="about-para">
        <p>
          <strong>Innomatics Research Labs</strong> is a pioneer in{" "}
          <strong>“Transforming Careers and Lives”</strong> of individuals in
          the Digital Space by catering advanced training on{" "}
          <strong>
            <span>NASSCOM Future skills prime Certified Data Science</span>,
            Python, Predictive Analytics Modeler, Machine Learning, Artificial
            Intelligence (AI), <span>Full-stack web development</span>, Amazon
            Web Services (AWS), DevOps, Microsoft Azure, Big data Analytics,
            <span>Digital Marketing</span>
          </strong>
          . We are passionate about bridging the gap between learning and
          real-time implementation, so empowering individuals to be
          industry-ready and help firms in reaping huge benefits is our primary
          goal
        </p>
      </div>
      <div className="vision">
        <h1>Vision</h1>
        <p>
          Our vision is to invade and make India a Hub for Artificial
          intelligence and analytics. Apart from being the most credible
          education institute for career transformation, we aim to become the
          best training institute with experts from different domains like
          Banking, Insurance, Retail, Health Care, and Manufacturing.
          Communicating with the industry experts and explaining the value data
          science brings to the Organization for better decision making;
          demonstrate how methodologies can be applied and optimize
          opportunities, innovate new and better tools.
        </p>
      </div>
      <div className="mission">
        <h1>Mission</h1>
        <p>
          We are established on a mission that encapsulates individuals in
          excelling through real-time approaches and the great promise to
          business in finding the best prospects who can set a benchmark to
          improve the quality of the businesses. With more than 40 affiliated
          trainers hailing from top-notch companies.
        </p>
        <br />
        <p>
          We provide the best learning experience in current trending
          technologies through facilitators who are continuous learners with the
          highest potential and empower others to do the same. Our practical
          approach encapsulates individuals in excelling through real-time
          strategies and the great promise to businesses in finding the best
          prospects who can set a benchmark to improve the quality of the
          businesses. The mission involves
        </p>
        <ol>
          <li>Developing the state-of-the-art benchmark in data science,</li>
          <li>
            Transforming all fields, professions, and sectors through the
            application of data science.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default About