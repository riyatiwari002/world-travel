import "./Contact.css";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    // Dynamically render Turnstile captcha when script is loaded
    const interval = setInterval(() => {
      if (window.turnstile && document.getElementById("cf-turnstile")) {
        window.turnstile.render("#cf-turnstile", {
          sitekey: "0x4AAAAAAB5D72Pi4WNnCwX8", // ← apni real Cloudflare site key yahan daalo
          callback: (tokenValue) => {
            console.log("Captcha Solved:", tokenValue);
            setToken(tokenValue);
            setVerified(true);
          },
        });
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleContinue = (e) => {
    e.preventDefault(); // prevent default form submission
    if (verified) {
      alert("✅ Captcha Verified! Continue Success.");
    } else {
      alert("❌ Please verify you are human first!");
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact">
        <div className="content">
          <h1>CONTACT</h1>
          <p>Send me your questions, comments, or suggestions</p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="summary">
        <h1>Get In Touch</h1>
        <h3>Contact Form</h3>
        <p>Send me your questions, comments, or suggestions!</p>
        <p>
          If you'd like to work with me or you have a question or comment, you
          <br />
          can contact me using the form below. You can also find{" "}
          <span>
            more info
            <br />
            about me here.
          </span>
        </p>
        <p>
          Sometimes I'm busy traveling, but I try to respond to any messages!
        </p>
      </div>

      {/* Form Section */}
      <div className="form">
        <form onSubmit={handleContinue}>
          <div className="captcha">
            

            <div
              id="cf-turnstile"
              
            ></div>

            {verified ? (
              <div className="verify">
                ✅ Captcha Solved Successfully! <br />
              </div>
            ) : (
              <div className="verify-error">
                ❌ Please verify you are human
              </div>
            )}

            {/* Continue Button */}
           <button
  className="btn"
  style={{
    background: verified ? "#28a745" : "#999",
    cursor: verified ? "pointer" : "not-allowed"
  }}
>
  Submit
</button>

          </div>
         <div className="info">
           <div>
          <label htmlFor="name">Your Name  </label>
            <input type="text" id="name" autoFocus/>
          </div>
          <div>
          <label htmlFor="email">Your Email  </label>
            <input type="email" id="email" autoFocus/>
          </div>
          <div>
          <label htmlFor="sub">Subject </label>
            <input type="text" id="sub" autoFocus/>
          </div>
          <div>
          <label htmlFor="msg">Your Message  </label>
           <textarea name="text" id="msg" rows={5} cols={50}></textarea>
          </div>
          <div>
            <button className="sub-btn">SUBMIT</button>
          </div>
         </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
