import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Btn from "./btn";
import { FaTimes } from "react-icons/fa";
import images from "../theme/imagesPath";
import { FaBarsStaggered } from "react-icons/fa6";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useModal } from "../pages/ModalContext";

const Header = ({ headerStyle, navItemStyle }) => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home"); // track active menu
  const menuIconRef = useRef(null);
  const crossIconRef = useRef(null);
  const tlRef = useRef();

  const { openContactModal } = useModal();

  const menuItems = [
    "Home",
    "About",
    "How it Works",
    "Insights",
    "Work for us"
    // "CSR",
    // "Contact Us",
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    let activeMenuItem = "Home";

    if (currentPath !== "/") {
      const formattedPath = currentPath.slice(1).replace(/-/g, " "); // '/contact-us' -> 'contact us'
      activeMenuItem =
        menuItems.find(
          (item) => item.toLowerCase() === formattedPath.toLowerCase()
        ) || "Home";
    }

    setActiveItem(activeMenuItem);
  }, [location.pathname]);

  useGSAP(() => {
    let tl = gsap.timeline({ paused: true });
    tl.to("#mobile-menu", {
      display: "flex",
      left: "1rem",
      duration: 0.5,
    });
    tl.from(".mobile-navItem", {
      x: 100,
      duration: 1,
      stagger: 0.3,
      opacity: 0,
    });

    tlRef.current = tl;

    return () => {
      menuIconRef.current?.removeEventListener("click", () => { });
      crossIconRef.current?.removeEventListener("click", () => { });
    };
  });

  const openMenu = () => {
    setMenuOpen(true);
    tlRef.current?.play();
  };

  const closeMenu = () => {
    tlRef.current?.reverse();
    tlRef.current?.eventCallback("onReverseComplete", () => {
      setMenuOpen(false);
      gsap.set("#mobile-menu", { display: "none" });
    });
  };

  const handleMenuClick = (item) => {
    setActiveItem(item); // set clicked menu item as active
    if (menuOpen) {
      closeMenu(); // close mobile menu if open
    }
  };


  const navigate = useNavigate();
  return (
    <div id="header" style={headerStyle}>
      <div className="mobile-logo">
        <img src={images.logo} alt="logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="navItems desktop-only">
        {menuItems.map((item, i) => (
          // <>
          //   {/* {
          //     item === "Contact Us" ? <Link
          //       className={`navItem ${activeItem === item ? "active" : ""}`}
          //       key={i}
          //       style={navItemStyle}
          //       onClick={(e) => {
          //         openContactModal();
          //         closeMenu();
          //       }}
          //     >
          //       {item}
          //     </Link> : */}



          //   {/* } */}
          // </>

          <Link
            className={`navItem ${activeItem === item ? "active" : ""}`}
            key={i}
            to={
              item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`
            }
            style={navItemStyle}
            onClick={(e) => {
              if (item === "Home") {
                navigate("/")
                // openContactModal();
                // closeMenu();
                window.location.reload()
              } else {
                handleMenuClick(item);
              }
            }}
          >
            {item}
          </Link>

        ))}
      </div>

      <div className="navBtn desktop-only">
        <Btn padding="0 3rem" onClick={openContactModal}>Contact Us</Btn>
      </div>

      {/* Mobile Menu Icon */}
      <div ref={menuIconRef} className="mobile-menu-icon" onClick={openMenu}>
        <FaBarsStaggered style={{ fontSize: "1.2rem" }} />
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <FaTimes
          ref={crossIconRef}
          className="close-icon"
          onClick={closeMenu}
        />
        {menuItems.map((item, i) => (
          <Link
            key={i}
            to={
              item === "Home"
                ? "/"
                : `/${item.toLowerCase().replace(/\s+/g, "-")}`
            }
            className={`mobile-navItem ${activeItem === item ? "active" : ""}`}
            onClick={() => handleMenuClick(item)}
          >
            {item}
          </Link>
        ))}
        <Btn onClick={openContactModal} padding="0 2rem">Contact Us</Btn>
      </div>
    </div>
  );
};

export default Header;
