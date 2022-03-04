import React from "react";

const MapRouter = () => {
  return (
    <div className="">
      <div className="features bg-white mt-5">
        <div className="name-title">
          <p className="text-center">Our Location</p>
          <h1 className="text-center">Our Location</h1>
        </div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1499.1429545918807!2d69.18845165815033!3d41.28088159481858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2f58d1e9062a6e7!2zNDHCsDE2JzUxLjIiTiA2OcKwMTEnMjIuNCJF!5e0!3m2!1sen!2s!4v1646391994729!5m2!1sen!2s"
        width={"100%"}
        height={550}
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};
export default MapRouter;
