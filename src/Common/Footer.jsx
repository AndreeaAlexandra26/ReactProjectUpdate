import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaCcVisa, FaCcPaypal, FaCcMastercard, FaCcStripe } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    function isAtPageBottom() {
      return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }

    function handleScroll() {
      if (isAtPageBottom()) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`Footer ${showFooter ? "show" : ""}`}>
      <div className="Coloane">
      <div className="Column">
      <h4>Companie</h4>
      <br></br>
      <p>Despre noi</p>
      <p>Cariere</p>
      <p>Responsabilitate sociala</p>
      <p>FAQ</p>

    </div>
    <div className="Column">
      <h4>Legal</h4>
      <br></br>
      <p>Termeni și condiții</p>
      <p>Politica de confidențialitate</p>
      <p>Cookies</p>
      <p>ANPC</p>
    </div>

    <div className="Column">
      <h4>Comandă și livrare</h4>
      <br></br>
      <p>Urmărirea comenzii</p>
      <p>Cum se livrează</p>
      <p>Ridicare gratuită din farmacii</p>
      <p>Politica de retur</p>
    </div>
    
    <div className="Column">
      <h4>Follow Us</h4>
      <br></br>
      <div className="Icons">
      <p><FaTwitter /> </p>
      <p><FaFacebook /> </p>
      <p><FaInstagram /> </p>
      <p><FaLinkedin /> </p>
      </div>
    </div>

    <div className="Column">
      <h4>Supported</h4>
      <br></br>
      <div className="Icons">
      <p><FaCcVisa /> </p>
      <p><FaCcPaypal /> </p>
      <p><FaCcMastercard /> </p>
      <p><FaCcStripe /> </p>
      </div>
    </div>

    </div>
    <div className="FooterBottom">
      <img
        className="Logo"
        src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/122010/logo__farmacia_farmacotecnica2.png?itok=e1vOr5TE"
        alt="Logo"
      />
      <p className="Paragraf">&copy; {new Date().getFullYear()} Farmacia PharmaPlus. Toate drepturile rezervate.</p>
      </div>
      </footer>
  );
};

export default Footer;


