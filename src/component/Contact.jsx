import React from 'react'
import contactLogo from "../assets/contact-logo.png"

const Contact = () => {
  return (
    <div className="contact-container">
      <img src={contactLogo} alt="" />
      <div className="contact-details">
        <p>
          We are ready to help you. <br /> For immediate inquiry or joining,
          please call us.. <br /> Hyderabad:<span>+91-9951666670</span>, Pune:{" "}
          <span>+91-9951666671</span>
        </p>
        <div className="contact-info">
          <h2>Contact Information:</h2>
          <div className='loc-details'>
            <div className="location">
              <h3>
                <i
                  className="fa-solid fa-location-dot"
                  style={{ marginRight: "25px", color: "red" }}
                ></i>
                Kukatpally — Hyderabad
              </h3>
              <p className="para">
                #205, 2nd Floor, Fortune Signature, Near JNTU Metro Station,
                Kukatpally, Hyderabad, Telangana 500085
              </p>
            </div>
            <div className="location">
              <h3>
                <i
                  className="fa-solid fa-location-dot"
                  style={{ marginRight: "25px", color: "red" }}
                ></i>
                Pune:
              </h3>
              <p className="para">
                2nd Floor, Sai Sayaji Apartment, 201,(P, Paud Rd, beside VANAZ
                Metro, above Bata showrrom, Ramkrishna Paramhans Nagar, Kothrud,
                Pune, Maharashtra 411038
              </p>
            </div>
            <div className="location">
              <h3>
                <i
                  className="fa-solid fa-phone"
                  style={{ marginRight: "20px", color: "red" }}
                ></i>
                Phone/Whatsapp:
              </h3>
              <p className="para">
                +91-9951666670 / +91-6304126766 / +91-9347804375
              </p>
            </div>
            <div className="email">
              <p className="para1">
                <i
                  className="fa-solid fa-envelope"
                  style={{
                    marginRight: "20px",
                    color: "red",
                    fontSize: "22px",
                  }}
                ></i>
                <strong className="strong">For Course details:</strong>{" "}
                info@innomatics.in <br />
                <strong className="strong">For Careers:</strong>{" "}
                hr@innomatics.in <br />
                <strong className="strong">For Franchise:</strong>{" "}
                Viswanth.nayathani@innomatics.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact