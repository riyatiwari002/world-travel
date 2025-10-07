import "./Blog.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Blog = () => {
  const posts = [
    {
      img: "src/assets/b-post1.jpg",
      category: ["Hiking", "Jungles", "South America", "Suriname"],
      title: "Hiking Mount Kasikasima In Suriname: My Experience",
      desc: "I just got back from hiking Mount Kasikasima in Suriname! It’s a fun expedition that involves flying a little bush plane into the jungle, taking a canoe...",
    },
    {
      img: "src/assets/b-post3.jpg",
      category: ["Asia", "Bucket List", "East Nusa Tenggara", "Indonesia"],
      title: "12 Day Flores Road Trip Itinerary: Best Things To Do & See",
      desc: "Flores is such an underrated island in Indonesia. You can climb volcanoes, visit traditional villages, see turquoise lakes, and so much more...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post4.jpg",
      category: ["Asia","East Nusa Tenggara","Hiking","Indonesia"],
      title: "How To Visit Wae Rebo Village In Flores, Indonesia",
      desc: "Wae Rebo is a nice little traditional village that you can visit by hiking into the mountains of Flores, Indonesia. I visited Wae Rebo recently and enjoyed…",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
    {
      img: "src/assets/b-post2.jpg",
      category: ["Asia", "Itineraries", "Mongolia", "Monuments"],
      title: "How To Spend 1 Day In Mongolia (Travel Itinerary)",
      desc: "If you only have one day in Mongolia, how should you spend it? What are the best things to see and do near Ulaanbaatar? I faced this...",
    },
   
  ];

  const itemsPerPage = 6; // ek page me 6 posts
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / itemsPerPage);

  // current page ke posts nikalne ka logic
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // page change karne ka function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="blog-section">
      <div className="recent-header">
        <h4 className="head">Blog Posts</h4>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
      <br />
      <div className="blog-container">
        {currentPosts.map((post, index) => (
          <div className="blog-card1" key={index}>
            <img src={post.img} alt={post.title} className="blog-image" />
            <p className="blog-category">{post.category.join(" • ")}</p>
            <h3 className="blog-heading">{post.title}</h3>
            <hr /><br />
            <p className="blog-desc">{post.desc}</p>
            <button className="read-btn">READ MORE »</button>
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? "active-page" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Blog;