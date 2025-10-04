import "./Home.css";
import Video from "../../assets/istockphoto-2158535291-640_adpp_is.mp4";

import { GoArrowRight } from "react-icons/go";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { IoAirplaneSharp } from "react-icons/io5";

const Home = () => {
  // =================== Featured Logos ===================
  const featuredLogos = [
    "src/assets/USA_Today_n5.webp",
    "src/assets/NBC_News_n3.webp",
    "src/assets/TIME-history_sm.webp",
    "src/assets/BBC_Travel_n3.webp",
    "src/assets/Travel_Leisure_n3.webp",
  ];

  // =================== Blog Cards ===================
  const blogCards = [
    { img: "src/assets/travel.jpg", title: "TRAVEL BLOG" },
    { img: "src/assets/desti.jpg", title: "DESTINATIONS" },
    { img: "src/assets/about.jpg", title: "ABOUT" },
  ];

  // =================== Travel Guides ===================
  const travelGuides = [
    {
      img: "src/assets/DSCF3895_450.jpg",
      title: "HOW TO VISIT THE PYRAMIDS IN EGYPT",
    },
    { img: "src/assets/blog2.jpg", title: "NUSA PENIDA ISLAND GUIDE FOR BALI" },
    { img: "src/assets/blog3.jpg", title: "22 BEST THINGS TO DO IN JAPAN" },
    {
      img: "src/assets/blog4.jpg",
      title: "10 THINGS TO DO AT MACHU PICCHU IN PERU",
    },
    { img: "src/assets/blog5.jpg", title: "HOW TO VISIT PETRA IN JORDAN" },
    { img: "src/assets/blog6.jpg", title: "19 BEST WATERFALLS IN INDONESIA" },
    { img: "src/assets/blog7.jpg", title: "27 BEST ISLANDS IN INDONESIA" },
    {
      img: "src/assets/blog8.jpg",
      title: "38 BEST THINGS TO DO IN OAHU HAWAII",
    },
    { img: "src/assets/blog9.jpg", title: "CORON PALAWAN ISLAND GUIDE" },
    {
      img: "src/assets/blog10.jpg",
      title: "FLYING OVER THE GREAT BLUE HOLE IN BELIZE",
    },
    {
      img: "src/assets/blog11.jpg",
      title: "SANTORINI TRAVEL GUIDE FOR GREECE",
    },
    {
      img: "src/assets/blog12.jpg",
      title: "ROCK ISLANDS SCENIC FLIGHT IN PALAU",
    },
  ];

  // =================== Hikes ===================
  const hikes = [
    { img: "src/assets/hike1.jpg", title: "EVEREST BASE CAMP TREK IN NEPAL" },
    { img: "src/assets/hike2.jpg", title: "ANGELS LANDING HIKE IN ZION" },
    { img: "src/assets/hike3.jpg", title: "HUAYNA PICCHU HIKE IN PERU" },
    { img: "src/assets/hike4.webp", title: "30 BEST HIKES IN INDONESIA" },
    { img: "src/assets/hike5.jpg", title: "TONGARIRO CROSSING IN NEW ZEALAND" },
    {
      img: "src/assets/hike6.jpg",
      title: "TIGER'S NEST MONASTERY HIKE IN BHUTAN",
    },
    { img: "src/assets/hike7.jpg", title: "MOUNT FITZ ROY HIKE IN PATAGONIA" },
    { img: "src/assets/hike8.jpg", title: "KAWAH IJEN VOLCANIC LAKE IN JAVA" },
    { img: "src/assets/hike9.jpg", title: "PERITO MORENO GLACIER WALK" },
    { img: "src/assets/hike10.jpg", title: "HALF DOME HIKE IN YOSEMITE" },
    {
      img: "src/assets/hike11.webp",
      title: "ACATENANGO VOLCANO HIKE IN GUATEMALA",
    },
    { img: "src/assets/hike12.jpg", title: "28 BEST HIKES IN UTAH" },
  ];

  // =================== Recent Posts ===================
  const recentPosts = [
    {
      img: "src/assets/photo-collage.png (1).png",
      tags: ["Asia", "Bucket List", "East Nusa Tenggara", "Indonesia"],
      title: "12 Day Flores Road Trip Itinerary: Best Things To Do & See",
    },
    {
      img: "src/assets/photo-collage.png.png",
      tags: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
    },
    {
      img: "src/assets/hike7.jpg",
      tags: ["Asia", "East Nusa Tenggara", "Hiking", "Indonesia"],
      title: "How To Visit Wae Rebo Village In Flores, Indonesia",
    },
    {
      img: "src/assets/blog7.jpg",
      tags: ["Asia", "Bucket List", "ChinaFilm", "Locations"],
      title: "How To See The Best Of Zhangjiajie Forest Park In 2 Days",
    },
  ];

  // =================== Social Media ===================
  const socialIcons = [
    { icons: <TiSocialFacebook />, title: "FACEBOOK" },
    { icons: <FaInstagram />, title: "INSTAGRAM" },
    { icons: <TfiYoutube />, title: "YOUTUBE" },
    { icons: <MdEmail />, title: "EMAIL" },
  ];
  //===========================destination========

  const destination=[
    {
      img:"src/assets/desti1.jpg",
      title:"EGYPT"
    },
    {
      img:"src/assets/desti2.jpg",
      title:"INDONESIA"
    },
    {
      img:"src/assets/desti3.jpg",
      title:"JAPAN"
    },
    {
      img:"src/assets/desti4.jpg",
      title:"UNITED STATES"
    },
    {
      img:"src/assets/desti5.jpg",
      title:"PHILIPPINES"
    },
    {
      img:"src/assets/desti6.jpg",
      title:"THAILAND"
    },
    {
      img:"src/assets/desti7.jpg",
      title:"GREECET"
    },
    {
      img:"src/assets/desti8.webp",
      title:"UNITED ARAB EMIRATES"
    },
    {
      img:"src/assets/desti9.jpg",
      title:"LAOS"
    },

  ]

  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <video
          src={Video}
          autoPlay
          muted
          loop
          playsInline
          className="video"
        ></video>
        <div className="text">
          <h1>Explore. Dream Discover</h1>
          <p>
            This is a travel blog about beautiful hidden destinations around the
            world.
          </p>
          <p>Please tag Along!</p>
          <button className="explore">START EXPLORING</button>
        </div>
      </div>

      {/* Featured Section */}
      <div className="main">
        <h1>Featured</h1>
        <div className="services">
          {featuredLogos.map((logo, i) => (
            <img key={i} src={logo} alt="featured" />
          ))}
        </div>
      </div>

      {/* Blog Cards */}
      <div className="blog">
        {blogCards.map((card, i) => (
          <div key={i} className="blog-card">
            <img src={card.img} alt={card.title} />
            <p>{card.title}</p>
          </div>
        ))}
      </div>

      {/* Look Section */}
      <div className="look">
        <div className="look-img">
          <img src="src/assets/look.jpg" alt="" />
        </div>
        <div>
          <h2>Thanks For Looking!</h2>
          <p>
            I'm <span className="name">David Leiter</span>, the guy behind this
            website. I'm an American who's been traveling the world full time
            for 9 years now. I started this travel blog in 2019 to document my
            own international trips, share my photos,
            <br /> and help others learn how to travel the world and find some
            really good <br />
            spots off the beaten path. All of the writing and pictures on this
            site come from my own personal experience.
            <br />
            My second home is <span>Bali, Indonesia,</span> where I met my wife
            Intan, who’s a Bali local. Now she joins me on these adventures too.
            Together, we've done some bucket list hikes, <br />
            climbed active volcanoes, seen exotic wildlife, and visited some
            spectacular castles, temples, and monuments around the world.
            <br />
            I've worked with and been featured by BBC Travel, NBC News, Time,
            and other companies. I haven’t been everywhere, but it’s on my list.
            I hope this world travel blog can help and inspire you in your own
            journeys as well!
          </p>
          <button>
            MORE ABOUT ME <GoArrowRight className="look-icon" />
          </button>

          {/* Social Media in Look Section */}
          <div className="social-media">
            {socialIcons.map((icon, i) => (
              <div key={i}>
                <div className="icon">{icon.icons}</div>
                
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Travel Guides */}
      <div className="travel">
        <div>
          <h1>Travel Guides</h1>
          <p>Popular travel blog posts & guides</p>
        </div>
        <div className="travel-guide">
          {travelGuides.map((guide, i) => (
            <div key={i}>
              <img src={guide.img} alt={guide.title} />
              <h2>{guide.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Hikes */}
      <div className="travel">
        <div>
          <h1>Hikes</h1>
          <p>Bucket list hiking guides</p>
        </div>
        <div className="travel-guide">
          {hikes.map((hike, i) => (
            <div key={i}>
              <img src={hike.img} alt={hike.title} />
              <h2>{hike.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="heading">
        <h3>Recent Posts</h3>
        <div className="line">
          <div className="half-line"></div>
        </div>
      </div>
      <div className="posts">
        {/* Left Content */}
        <div className="post-item">
          {recentPosts.map((post, i) => (
            <div key={i} className="post-item-left">
              <img src={post.img} alt={post.title} />
              {post.tags.length > 0 && (
                <div>
                  {post.tags.map((tag, j) => (
                    <span key={j} className="tags">
                      {tag} <VscDebugBreakpointLogUnverified />
                    </span>
                  ))}
                </div>
              )}
              {post.title && <p className="title">{post.title}</p>}
              {post.title && (
                <>
                  <hr className="lines" />
                  <div className="btn">
                    <button>
                      READ MORE <AiOutlineDoubleRight />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="post-item-right">
          <div className="about">
            <h3>ABOUT ME</h3>
            <hr />
            <div className="about-img">
              <img src="src/assets/about1.jpg" alt="about" />
              <p>
                Hey there! I'm David Leiter, an American who's <br />
                been traveling the world full time for 9 years now.
              </p>
              <p>
                My second home is Bali with my wife Intan,
                <br /> but our journeys take us to <br />
                destinations all over the world.
                <p>Please tag along!</p>
              </p>
            </div>
          </div>

          {/* Sidebar Social */}
          <div>
            <h2>SOCIAL</h2>
            <hr />
            <div className="social-media1">
              {socialIcons.map((icon, i) => (
                <div key={i} className="social-item1">
                  <div className="icon1">{icon.icons}&nbsp;
                  <span className="title1">{icon.title}</span>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =================destination== */}
        <div className="travel">
        <div>
          <h1>Destinations</h1>
          <p>Pick a country and start exploring!</p>
        </div>
        <div className="travel-guide">
          {destination.map((destination, i) => (
            <div key={i}>
              <img src={destination.img} alt={destination.title} />
              <h2>{destination.title}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="desti">
        <button className="btn"><IoAirplaneSharp className="plane" /> MORE DESTINATIONS</button>
      </div>

    </>
  );
};

export default Home;
