import React from "react";
import "./style.scss";
import { Form, Input } from "antd";
import rightImg from "../../assets/images/right-img2.webp";
const { TextArea } = Input;

const ContactForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="section features" style={{ backgroundColor: "#fff" }}>
      <div className="container booking-form">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-5">Contact Form</h2>
            <Form
              layout="vertical"
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input Name!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input Phone!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

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
                label="Write message"
                name="title"
                rules={[
                  { required: false, message: "Please input your password!" },
                ]}
              >
                <TextArea rows={8} />
              </Form.Item>

              <Form.Item>
                <button htmlType="submit" className="btn-book">
                  SEND MESSAGE
                </button>
              </Form.Item>
            </Form>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <h2 className="mb-5">Paragraph</h2>
            <img src={rightImg} className='w-100 mb-5' alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae labore aspernatur cumque inventore voluptatibus odit doloribus! Ducimus, animi perferendis repellat. Ducimus harum alias quas, quibusdam provident ea sed, sapiente quo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae labore aspernatur cumque inventore voluptatibus odit doloribus! Ducimus, animi perferendis repellat. Ducimus harum alias quas, quibusdam provident ea sed, sapiente quo.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
