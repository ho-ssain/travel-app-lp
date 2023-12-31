/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./footer.css";
import video from "../../assets/videos/v2.mp4";
import { FiSend, FiChevronRight } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import {
  FaTripadvisor,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaReddit,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" />
                TakeATrip.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              magnam temporibus ipsum ex, tempore nesciunt porro iure
              perspiciatis, error repudiandae rem nam ab culpa sequi quisquam
              quas ut assumenda eos necessitatibus nostrum eaque dolorum
              tempora. Fugit voluptate ratione mollitia cum sequi accusamus,
              eligendi voluptatum ducimus harum ipsum consequatur ea.
              Doloremque.
            </div>

            <div data-aos="fade-up" className="footerSocails flex">
              <FaYoutube className="icon" />
              <FaFacebookF className="icon" />
              <FaTwitter className="icon" />
              <FaInstagram className="icon" />
              <FaLinkedinIn className="icon" />
              <FaReddit className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One  */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="gruopTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            {/* Group Two  */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="gruopTitle">PARTERNS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                RentCars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>
            {/* Group Three  */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="gruopTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Califonia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THERE</small>
            <small>COPYRIGHTS RESERVED - TAKE-A-TRIP 2024</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
