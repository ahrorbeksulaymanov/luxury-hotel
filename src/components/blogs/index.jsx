import React from "react";
import { Card, CardBody } from "reactstrap";
import "./style.scss";
import img1 from '../../assets/images/card1.webp'
import img2 from '../../assets/images/card2.webp'
import img3 from '../../assets/images/card3.webp'

const Blogs = () => {
  return (
    <div className="features section">
      <div className="name-title">
        <p className="text-center">OUR BLOG</p>
        <h1 className="text-center">Our Recent Blog</h1>
      </div>
      <div className="blog-cards container mb-5">
          <div className="row">
              <div className="col-md-4">
                <Card style={{border:"none", marginBottom:"25px"}}>
                    <img src={img1} alt="" />
                    <CardBody>
                        <span>ROOMS</span>
                        <h3 className="my-3">
                            <a href="#">New Rooms</a>
                        </h3>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deserunt illo quis similique dolore voluptatem culpa voluptas rerum, dolor totam.</p>
                        <button className="btn-read-more mb-4">READ MORE</button>
                    </CardBody>
                </Card>
              </div>
              <div className="col-md-4">
                <Card style={{border:"none", marginBottom:"25px"}}>
                    <img src={img2} alt="" />
                    <CardBody>
                        <span>NEWS</span>
                        <h3 className="my-3">
                            <a href="#">New Staff Added</a>
                        </h3>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deserunt illo quis similique dolore voluptatem culpa voluptas rerum, dolor totam.</p>
                        <button className="btn-read-more mb-4">READ MORE</button>
                    </CardBody>
                </Card>
              </div>
              <div className="col-md-4">
                <Card style={{border:"none", marginBottom:"25px"}}>
                    <img src={img3} alt="" />
                    <CardBody>
                        <span>NEW ROOMS</span>
                        <h3 className="my-3">
                            <a href="#">Big Rooms for All</a>
                        </h3>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deserunt illo quis similique dolore voluptatem culpa voluptas rerum, dolor totam.</p>
                        <button className="btn-read-more mb-4">READ MORE</button>
                    </CardBody>
                </Card>
              </div>
          </div>
      </div>
    </div>
  );
};
export default Blogs;
