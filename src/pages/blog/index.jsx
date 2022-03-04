import React from "react";
import ParallaxComp from "../../components/parallax-effect/parallaxComp";
import mainImg from "../../assets/images/main-img.webp";
import "./style.scss";
import NavbarC from "../../components/navbar";
import FooterC from "../../components/footer";
import Blogs from "../../components/blogs";

const BlogsPage = () => {

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
          <h1 className="mt-5 fw-light text-white">News & Events</h1>
          <h2 className="fw-light text-white">
            Discover our world's #1 Luxury Room For VIP.
          </h2>
        </div>
      </ParallaxComp>
      <Blogs />
      <Blogs />
      <FooterC />
    </div>
  );
};
export default BlogsPage;
