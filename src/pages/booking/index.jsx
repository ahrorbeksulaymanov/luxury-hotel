import React, { useState } from "react";
import ParallaxComp from "../../components/parallax-effect/parallaxComp";
import mainImg from "../../assets/images/main-img.webp";
import NavbarC from "../../components/navbar";
import BookingForm from "../../components/booking-form";
import parallax2 from "../../assets/images/parallax2.webp";
import { BsPlayCircle } from "react-icons/bs";
import FooterC from "../../components/footer";
import ModalVideo from "react-modal-video";

const Booking = () => {
    const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <ParallaxComp
        imgsrc={mainImg}
        height="77vh"
        opacity="0.5"
        className="parallax-effect-content"
      >
        <NavbarC />
        <div className="text-center text-white mt-5 pt-4 main-title" data-aos="fade-up">
          <h1 className="mt-5 fw-light text-white">Reservation</h1>
          <h2 className="fw-light text-white">
            Discover our world's #1 Luxury Room For VIP.
          </h2>
        </div>
      </ParallaxComp>
      <BookingForm />
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
export default Booking;
