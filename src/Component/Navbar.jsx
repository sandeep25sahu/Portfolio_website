import React from "react";
import logo from '../../public/logo.png';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import 'animate.css';

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-6 animate__animated animate__fadeIn animate__slow">
    <div className="flex flex-shrink-0 items-center ">
      <a href="/" aria-label="Home">
        <img src={logo} alt="logo" className="mx-2" width={90} height={90} />
      </a>
    </div>

    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/sandeep-sahu-a29b2a241/" target="_blank" aria-label="LinkedIN">
        <FaLinkedin />
      </a>

      <a href="https://github.com/sandeep25sahu" target="_blank" aria-label="GitHub">
        <FaGithub />
      </a>

      <a href="https://www.instagram.com/_s_an_deep_s__gallery/?hl=en" target="_blank" aria-label="Instagram">
        <FaInstagram />
      </a>

      <a href="#" target="_blank" aria-label="Facebook">
        <FaFacebook />
      </a>
    </div>
  </nav>
  )
}

export default Navbar

