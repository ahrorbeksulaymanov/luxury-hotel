import React from "react";
import "./style.scss";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { Card, CardBody } from "reactstrap";
import leftImg from "../../assets/images/left-img.webp";
import { GrStar } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { BsCrop } from "react-icons/bs";
const { Option } = Select;
const { TextArea } = Input;

const BookingForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div className="section features" style={{backgroundColor:"#fff"}}>
      <div className="container booking-form">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-5">Reservation Form</h2>
            <Form
              layout="vertical"
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className="row">
                <div className="col-sm-6">
                  <Form.Item
                    label="Arrival Date"
                    name="start_date"
                    rules={[
                      { required: true, message: "Please input Arrival Date!" },
                    ]}
                  >
                    <DatePicker className="w-100" />
                  </Form.Item>
                </div>
                <div className="col-sm-6">
                  <Form.Item
                    label="Arrival Date"
                    name="end_date"
                    rules={[
                      {
                        required: true,
                        message: "Please input Departure Date!",
                      },
                    ]}
                  >
                    <DatePicker className="w-100" />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <Form.Item
                    label="Room"
                    name="room"
                    rules={[{ required: true, message: "Please input room!" }]}
                  >
                    <Select
                      showSearch
                      placeholder="Select a room"
                      optionFilterProp="children"
                      onChange={onChange}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="1">1 room</Option>
                      <Option value="2">2 rooms</Option>
                      <Option value="3">3 rooms</Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className="col-sm-6">
                  <Form.Item
                    label="Guests"
                    name="guests"
                    rules={[
                      { required: true, message: "Please input Guests!" },
                    ]}
                  >
                    <Select
                      showSearch
                      placeholder="Select a Guests"
                      optionFilterProp="children"
                      onChange={onChange}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="1">1 Guest</Option>
                      <Option value="2">2 Guests</Option>
                      <Option value="3">3 Guests</Option>
                    </Select>
                  </Form.Item>
                </div>
              </div>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Write a Note"
                name="title"
                rules={[
                  { required: false, message: "Please input your password!" },
                ]}
              >
                <TextArea rows={8} />
              </Form.Item>

              <Form.Item>
                <button htmlType="submit" className="btn-book">
                  RESERVE NOW
                </button>
              </Form.Item>
            </Form>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <h2 className="mb-5">Reservation Form</h2>
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
        </div>
      </div>
    </div>
  );
};
export default BookingForm;
