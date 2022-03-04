import React, { useState } from "react";
import ParallaxComp from "../../components/parallax-effect/parallaxComp";
import mainImg from "../../assets/images/main-img.webp";
import parallax2 from "../../assets/images/parallax2.webp";
import "./style.scss";
import NavbarC from "../../components/navbar";
import StayAndEnjoy from "../../components/stay";
import FooterC from "../../components/footer";
import Blogs from "../../components/blogs";
import Features from "../../components/features";
import { BsPlayCircle } from "react-icons/bs";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <ParallaxComp
        imgsrc={mainImg}
        height="100vh"
        opacity="0.5"
        className="parallax-effect-content"
      >
        <NavbarC />
        <div className="text-center text-white mt-5 pt-4 main-title" data-aos="fade-up">
          <h1 className="mt-5 fw-light text-white">Welcome To Our Luxury Rooms</h1>
          <h2 className="fw-light text-white">
            Discover our world's #1 Luxury Room For VIP.
          </h2>
          <Link to="/booking">
            <button className="btn-book">Book Now</button>
          </Link>
        </div>
      </ParallaxComp>
      <StayAndEnjoy />
      <Features />
      <ParallaxComp
        imgsrc={parallax2}
        height="500px"
        opacity="0"
        className="parallax-effect-content-not-color"
      >
        <div className="text-center text-white mt-5 pt-4 main-title" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="mt-5 fw-light text-white">Relax and Enjoy your Holiday</h1>
          <p className="fw-light text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            quidem tempore expedita facere facilis, dolores!
          </p>
          <BsPlayCircle onClick={() => setOpen(true)} className="play-icon" />
        </div>
      </ParallaxComp>
      <Blogs />
      <FooterC />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="ATs5qoS781U"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};
export default HomePage;
