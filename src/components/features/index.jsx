import React from "react";
import { Card, CardBody } from "reactstrap";
import "./style.scss";
import leftImg from "../../assets/images/left-img.webp";
import rightImg1 from "../../assets/images/right-img1.webp";
import rightImg2 from "../../assets/images/right-img2.webp";
import { GrStar } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { BsCrop } from "react-icons/bs";

const Features = () => {
  return (
    <div className="features section">
      <div className="container">
        <div className="name-title">
          <p className="text-center">OUR LUXURY ROOMS</p>
          <h1 className="text-center">Featured Rooms</h1>
        </div>
        <div className="row">
          <div className="col-md-7">
            <Card>
              <div className="card-grade">
                <img src={leftImg} alt="" />
                <div className="d-flex align-items-end bg-rgba">
                  <div className="stars text-white d-flex align-items-center">
                    <span className="me-2">FEATURED ROOM</span>
                    <GrStar />
                    <GrStar />
                    <GrStar />
                  </div>
                </div>
              </div>
              <CardBody>
                <h3 className="card-link">
                  <a href="#">Presidential Room</a>
                </h3>
                <div className="d-flex align-items-center areas">
                  <IoIosPeople />
                  <span>2 Guests</span>
                  <BsCrop />
                  <span>22 ft 2</span>
                </div>
                <p className="card-text">
                  Nulla vel metus scelerisque ante sollicitudin. Fusce
                  condimentum nunc ac nisi vulputate fringilla.
                </p>
                <button className="btn-book">BOOK NOW FROM $20</button>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-5">
            <Card style={{height:"48%"}}>
              <div className="card-grade">
                <img src={rightImg1} alt="" />
                <div className="d-flex align-items-end bg-rgba">
                  <div className="stars text-white d-flex align-items-center">
                    <span className="me-2">FEATURED ROOM</span>
                    <GrStar />
                    <GrStar />
                    <GrStar />
                    <div>FROM $22</div>
                  </div>
                </div>
              </div>
            </Card>
            <Card style={{height:"48%", marginTop:"5%"}}>
              <div className="card-grade">
                <img src={rightImg2} alt="" />
                <div className="d-flex align-items-end bg-rgba">
                  <div className="stars text-white d-flex align-items-center">
                    <span className="me-2">FEATURED ROOM</span>
                    <GrStar />
                    <GrStar />
                    <GrStar />
                    <div>FROM $22</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
