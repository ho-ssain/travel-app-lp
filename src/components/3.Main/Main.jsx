import React, { useEffect } from "react";
import "./main.css";
import { Data } from "../../assets/data";
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // console.log(Data);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, img, desTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination" data-aos="fade-up">
                <div className="imageDiv">
                  <img src={img} alt={desTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className={desTitle}>{desTitle}</h4>

                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade} <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees} </h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description} </p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
