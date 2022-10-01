import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import "./HeroSection.css";
import "../navbar/Navbar.css";
import "../../App.css";
import Footer from "../footerSection/FooterSection";
import Contact from "../pages/Contact";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <h1>Therapy & Life Coaching</h1>
        <h2> Varsha Dookie</h2>
        <h3>Registered Therapist in Umhlanga & Durban North</h3>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HeroSection;
