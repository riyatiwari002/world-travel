import "./Header.css";
import Logo from "../../assets/Logo_2.webp";
import { IoIosSearch } from "react-icons/io";
import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [close, setClose] = useState();
  const headerRef = useRef(null); // initialize ref properly

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleShowSearch = () => {
    if (headerRef.current) {
      headerRef.current.style.display = "none"; // ✅ correct usage
    }
    setShowSearch(true);
    setClose(false);
  };

  const handleCloseSearch = () => {
    if (headerRef.current) {
      headerRef.current.style.display = "flex";
    }
    setShowSearch(false);
  };

  return (
    <>
      {/* Header Section */}
      <div className="header" ref={headerRef}>
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <div className="nav">
          
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/blog">BLOG</Link></li>

            <li
              className="dropdown"
              onMouseEnter={() => toggleMenu("categories")}
              onMouseLeave={() => toggleMenu(null)}
            >
              <a href="#">Categories</a>
              {activeMenu === "categories" && (
                <div className="dropdown-menu">
                  <a href="#">BEACHES</a>
                  <a href="#">BUCKET LIST</a>
                  <a href="#">HIKES</a>
                  <a href="#">WILDLIFE</a>
                  <a href="#">WATERFALLS</a>
                  <a href="#">VOLCANOES</a>
                </div>
              )}
            </li>

            <li
              className="dropdown"
              onMouseEnter={() => toggleMenu("gallery")}
              onMouseLeave={() => toggleMenu(null)}
            >
              <Link to="/gallery">Gallery</Link>
              {activeMenu === "gallery" && (
                <div className="dropdown-menu">
                  <a href="#">IMAGE GALLERY</a>
                  <a href="#">MY CAMERA GEAR</a>
                </div>
              )}
            </li>

            <li><a href="#">ABOUT</a></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>

        {/* Search Section */}
        <div className="search-section">
          <IoIosSearch className="icons" onClick={handleShowSearch} />
        </div>
      </div>

      {/* Fullscreen Search Input */}
      {showSearch && (
        <div className="fullscreen-search">
          <input
            type="text"
            placeholder="Type and hit enter..."
            autoFocus
          />
           <IoMdClose className="close-icon" onClick={handleCloseSearch} />
        
        </div>
      )}
    </>
  );
};

export default Header;
