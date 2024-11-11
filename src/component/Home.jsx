import React from 'react'
import '../App.css'
import profileLogo from '../assets/profile-logo.png'
import approchLogo from '../assets/approch-logo.png'
import placementLogo from '../assets/placement-logo.png'
import projectLogo from '../assets/project-logo.png'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-container1">
        <h1>We just don’t train,</h1>
        <h1 className="career">We transform the careers</h1>
        <p>
          <strong>Innomatics Research Labs</strong> is a pioneer in{" "}
          <strong>“Transforming Careers and Lives”</strong> of individuals in
          the Digital Space by catering advanced training on{" "}
          <strong>
            <span>NASSCOM Future skills prime Certified Data Science</span>,
            Python, Predictive Analytics Modeler, Machine Learning, Artificial
            Intelligence (AI), <span>Full-stack web development</span>, Amazon
            Web Services (AWS), DevOps, Microsoft Azure, Big data Analytics,
            <span>Digital Marketing</span>, and Career Launching program
          </strong>{" "}
          for students who are willing to showcase their skills in the
          competitive job market with valuable credentials, and also can
          complete courses with a certificate.
        </p>
        <h3>NASSCOM Futureskills Prime Registered Business Partner</h3>
        <p>
          As an authorized “Training Partner with NASSCOM Futureskills Prime,”
          we strive to make individuals learn not just algorithms but also case
          studies and challenges derived from businesses. To improve the
          effectiveness and productivity of our trainee{" "}
          <strong>hackathons, workshops,</strong> and <strong>meetups</strong>{" "}
          are conducted on a timely basis. Having a dedicated
          <strong>placement vertical</strong>, which helps trainees conquer the
          business world, solves the complexities. Innomatics research labs are
          supporting <strong>over 100 companies</strong> in finding the best
          candidate, which can upskill the business requirements and foster
          growth.
        </p>
        <h3>Best Edtech company</h3>
        <p>
          Recognized and rewarded by <strong>Times Of India</strong> as the Best
          Training Institute in Hyderabad for Data Science & Digital Marketing
          Training. With relentless hard work, sophisticated equipment, advanced
          classrooms, cutting-edge training methodologies, practical training
          approach, and making individuals skillful. We have trained and placed{" "}
          <strong>10000</strong> students with a track record of{" "}
          <strong>350+</strong> batches, <strong>200+</strong> Hackathons,
          <strong>150+</strong> Industry Experts, <strong>500+</strong>{" "}
          Webinars, and <strong>500+</strong> Hiring Partners.
        </p>
      </div>
      <div className="home-container2">
        <h1>What we are?</h1>
        <div className="box-container">
          <div className="box">
            <img src={profileLogo} alt="icon" />
            <h3>Global Leaders in training</h3>
            <p>
              We have trainers hailing from the fortune companies who understand
              the real-time business cases and can train individuals based on
              them.
            </p>
          </div>
          <div className="box">
            <img src={projectLogo} alt="icon" />
            <h3>Hands-on projects & Internship</h3>
            <p>
              We have trainers hailing from the fortune companies who understand
              the real-time business cases and can train individuals based on
              them.
            </p>
          </div>
          <div className="box">
            <img src={approchLogo} alt="icon" />
            <h3>Practical oriented approach</h3>
            <p>
              Our training methodology isn’t confined to theoretical one; We
              have an exposure towards the real-time industry training by
              industry experts professionals.
            </p>
          </div>
          <div className="box">
            <img src={placementLogo} alt="icon" />
            <h3>100% Placement Assistance</h3>
            <p>
              We promise Career Transformation; Having collaborations with
              top-notch companies and a dedicated placement vertical to help
              trainees aspire to aspirations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home