import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUmbrellaBeach, faTree } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="footer">
        <div className="footer-container">
          <p>© 2022 Varsha Dookie. Registered Therapist in Umhlanga & Durban North. Practice No. 0368555. SACSSP Registration : 10-18198. All rights reserved</p>
        </div>
      </nav>
    </>
  );
}

export default Footer;
