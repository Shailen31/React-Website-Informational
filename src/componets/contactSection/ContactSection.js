import React from "react";
import "./ContactSection.css";
import Footer from "../footerSection/FooterSection";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhoneFlip,
  faTree,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function ContactSection() {
  return (
    <>
      <div className="contact-container">
        <div class="contact-grid">
          <h1>Contact Information</h1>
          <hr class="contact-linebreak"></hr>
          <div class="contact-icon">
            {" "}
            <FontAwesomeIcon
              className="contact-icon"
              icon={faHome}
            ></FontAwesomeIcon>
            <p class="contact-spacebetween ">
              149 Hyacinth Road, Redhill, Avoca, 4051
            </p>
          </div>
          <div class="contact-icon">
            {" "}
            <FontAwesomeIcon
              className="contact-icon"
              icon={faPhoneFlip}
            ></FontAwesomeIcon>
            <p class="contact-spacebetween ">083 231 4077</p>
          </div>{" "}
          <div class="contact-icon">
            {" "}
            <FontAwesomeIcon
              className="contact-icon"
              icon={faEnvelope}
            ></FontAwesomeIcon>
            <p class="contact-spacebetween ">dookiev@gmail.com</p>
          </div>{" "}
          <div class="contact-iframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.2664631919233!2d31.018621514951196!3d-29.76993568198303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef70691c6ec2fd5%3A0xe0a635106a48bf8d!2s149%20Hyacinth%20Rd%2C%20Avoca%2C%20Durban%20North%2C%204051!5e0!3m2!1sen!2sza!4v1664547127946!5m2!1sen!2sza"
              width="600"
              height="450"
              //  style={{ border: "0" }}
              class="border"
              allowFullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactSection;
