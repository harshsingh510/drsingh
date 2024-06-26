import React from "react";
import "./Footer.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer position-relative">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-4">
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <Link to={"/"}>
                    <img src={logo} alt="logo" style={{ maxWidth: "160px" }} />
                  </Link>
                </div>
                <div className="footer-about-content">
                  <p className="form-text" style={{ maxWidth: 200 }}>
                   A personalised medical platform where patients can keep track of there medical history, consult with the expert doctors, while being in there home.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-4">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Patients</h2>
                <ul>
                  <li>
                    <Link to={"/doctors"}>
                      <FaAngleDoubleRight className="icon" /> Search for Doctors
                    </Link>
                  </li>
                  <li>
                    <Link to={"/login"}>
                      <FaAngleDoubleRight className="icon" /> Login
                    </Link>
                  </li>
                  <li>
                    <Link to={"/login"}>
                      <FaAngleDoubleRight className="icon" /> Register
                    </Link>
                  </li>
                  <li>
                    <Link to={"/doctors"}>
                      <FaAngleDoubleRight className="icon" /> Booking
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <FaAngleDoubleRight className="icon" /> Patient Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-4">
              <div className="footer-widget footer-contact">
                <h2 className="footer-title ">Contact Us</h2>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <p>
                      {" "}
                      Katihar Medical College Rd, Dalan East, 
                      <br /> Katihar, Bihar 854109{" "}
                    </p>
                  </div>
                  <p>
                    <i className="fas fa-phone-alt"></i>
                    +91 99999 99999
                  </p>
                  <p className="mb-0">
                    <i className="fas fa-envelope"></i>
                   drnityasingh@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-fluid">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="copyright-text">
                  <p className="mb-0">
                    <a href="">
                      <div className="copyRight text-center">
                        <p>Copyrights are reserved @2024</p>
                      </div>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="copyright-menu">
                  <ul className="policy-menu d-flex gap-2 justify-content-center">
                    <div className="copyright-text">
                      <p className="mb-0">
                        <a
                          href="https://harshsingh-portfolio.vercel.app/" rel="noreferrer"
                          target="_blank"
                        >
                          <div className="copyRight text-center">
                            <p>Developed By Harsh Singh</p>
                          </div>
                        </a>
                      </p>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
