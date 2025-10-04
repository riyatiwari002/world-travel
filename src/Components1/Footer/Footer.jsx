import "./Footer.css";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
const Footer = () => {
  const insta = [
    {
      img: "src/assets/hike7.jpg",
    },
    {
      img: "src/assets/desti1.jpg",
    },
    {
      img: "src/assets/blog3.jpg",
    },
    {
      img: "src/assets/desti9.jpg",
    },
    {
      img: "src/assets/hike12.jpg",
    },
    {
      img: "src/assets/blog9.jpg",
    },
  ];
  // =================== Social Media ===================
  const socialIcons = [
    { icons: <TiSocialFacebook />, title: "FACEBOOK" },
    { icons: <FaInstagram />, title: "INSTAGRAM" },
    { icons: <TfiYoutube />, title: "YOUTUBE" },
    { icons: <MdEmail />, title: "EMAIL" },
  ];

  return (
    <div>
      <div className="footer">
        <div className="footer-art1">
          <h1>GET IN TOUCH</h1>
          <p>
            Feel free to <span>contact me</span> if you have travel questions,
            comments, or suggestions.<br></br>
            I'll try to get back to you!
          </p>

          <img src="src/assets/teli1.png" alt="" />
        </div>
      </div>

      <div className="insta">
        <p>
          <FaInstagram className="insta-icon" /> INSTAGRAM
        </p>
      </div>

      <div className="post">
        {insta.map((item, i) => (
          <div key={i}>
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>

      <div className="news">
        <h2>Newsletter</h2>
        <p>
          Subscribe to my newsletter for the latest blog posts, tips, & travel
          guides.Let's stay updated!
        </p>
        <div className="email">
          <input type="email" placeholder="Email..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className="footer-art2">
        <div className="social-media">
          {socialIcons.map((icon, i) => (
            <div key={i}>
              <div className="icon ic">{icon.icons}</div>
            </div>
          ))}
        </div>

        <div className="border-bottom"></div>
        <p>© The World Travel Guy 2025</p>
        <span>Affiliate Disclosures <GoDotFill />Privacy Policy <GoDotFill />Terms Of Use</span>
        <p>
Some of the pages on my travel blog contain affiliate links. Whenever you buy something through one of these links, I get a small commission at no extra cost to you. As an affiliate, I only recommend products<br></br> and services that I feel are high quality and helpful to my readers. Thanks for your support.</p>
      </div>
    </div>
  );
};

export default Footer;
