import React, { useState } from "react";
import { Form, Input, Button, Spin, Tooltip, notification, Select } from "antd";

import { FileDoneOutlined, InfoCircleOutlined } from "@ant-design/icons";

import axios from "axios";
import "./Styles/Admin.css";

import Header from "./Header";
import Api from "./apicountry";

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const { Option } = Select;

const AddTravelDetails = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [mobileNumber, setMobilenumber] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [country, setCountry] = useState("");
  const [exDate, setExdate] = useState("");
  const [passportNumber, setPassportnumber] = useState("");
  const [nationality, setNationality] = useState("");

  const [loading, setLoading] = useState(false); //additional

  const onChangeNationality = (e) => {
    setNationality(e);
  };
  const onChangeCountry = (e) => {
    setCountry(e);
  };

  

  const userHandler = async (placement) => {
    // create handler for saving data to the db
    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        //use axios API
        "/travel/create",
        {
          firstName,
          lastName,
          code,
          email,
          nationality,
          passportNumber,
          country,
          mobileNumber,
          exDate,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        notification.info({
          message: `Notification`,
          description: "Add Travel Details 😘",
          placement,
        });
        form.resetFields();
      }, 5000); //5seconds timeout
    } catch (error) {
      notification.error({
        message: `Notification`,
        description: error.response.data.error,
        placement,
      });
      form.resetFields();
      setLoading(false);
    }
  };

  const [form] = Form.useForm();
  return (
    <>
      <Header />
      <div className="container mx-auto contact-bg">
        <div className="flex justify-center mt-8 gap-28 mb-10 w-full">
          <div className=" border-2 text-center border-gray-900 px-56 admin-bg mt-10 mb-10">
            <div className="mb-10">
              <div className="mt-20 flex">
                <div className=" -translate-x-6">
                  <Form
                    {...layout}
                    form={form}
                    name="control-hooks"
                    onFinish={() => userHandler("top")}
                  >
                    <div>
                      <div className=" font-semibold text-white text-xl -translate-x-16 mt-8 absolute">
                        Traveller Name
                      </div>
                      <Form.Item
                        name="first name"
                        label="Firts Name"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        initialValue={firstName}
                      >
                        <Input
                          style={{ width: "450px" }}
                          placeholder="Enter First Name"
                          prefix={
                            <FileDoneOutlined className="site-form-item-icon" />
                          }
                          suffix={
                            <Tooltip title="Please First Enter Name">
                              <InfoCircleOutlined
                                style={{ color: "rgba(0,0,0,.45)" }}
                              />
                            </Tooltip>
                          }
                          onChange={(e) => setFirstname(e.target.value)}
                        />
                      </Form.Item>
                      <Form.Item
                        name="last name"
                        label="Last Name"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        initialValue={lastName}
                      >
                        <Input
                          style={{ width: "450px" }}
                          placeholder="Enter Last Name"
                          prefix={
                            <FileDoneOutlined className="site-form-item-icon" />
                          }
                          suffix={
                            <Tooltip title="Please Enter Last Name">
                              <InfoCircleOutlined
                                style={{ color: "rgba(0,0,0,.45)" }}
                              />
                            </Tooltip>
                          }
                          onChange={(e) => setLastname(e.target.value)}
                        />
                      </Form.Item>
                    </div>

                    <div className="mt-20">
                      <div className=" font-semibold text-white text-xl -translate-x-16 mt-8 absolute">
                        Passport Details
                      </div>
                      <div className=" flex ml-48 translate-x-12">
                        <div>
                          <Form.Item
                            name="nationality"
                            label="Nationality"
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                          >
                            <Select
                              style={{ width: 140 }}
                              onChange={onChangeNationality}
                            >
                              <Option value="Sri Lankan">Sri Lankan</Option>
                              <Option value="Indian">Indian</Option>
                              <Option value="Singaporean">Singaporean</Option>
                              <Option value="Vietnamese">Vietnamese</Option>
                              <Option value="Russians">Russians</Option>
                            </Select>
                          </Form.Item>
                        </div>
                        <div>
                          <Form.Item
                            name="passport"
                            label="Passport No."
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                            initialValue={passportNumber}
                          >
                            <Input
                              style={{ width: "190px" }}
                              placeholder="Enter Passport No."
                              prefix={
                                <FileDoneOutlined className="site-form-item-icon" />
                              }
                              suffix={
                                <Tooltip title="Please Enter Passport Number">
                                  <InfoCircleOutlined
                                    style={{ color: "rgba(0,0,0,.45)" }}
                                  />
                                </Tooltip>
                              }
                              onChange={(e) =>
                                setPassportnumber(e.target.value)
                              }
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className=" flex ml-48 translate-x-12">
                        <div>
                          <Form.Item
                            name="country"
                            label="Iss Country"
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                          >
                            <Select
                              style={{ width: 140 }}
                              onChange={onChangeCountry}
                            >
                              {Api.map((element) => (
                                <Option value={element}>{element}</Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </div>
                        <div>
                          <Form.Item
                            name="date"
                            label="Expire Date."
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                            initialValue={exDate}
                          >
                            <Input
                              style={{ width: "190px" }}
                              placeholder="Enter Expire Date"
                              prefix={
                                <FileDoneOutlined className="site-form-item-icon" />
                              }
                              suffix={
                                <Tooltip title="Please Enter Expire Date : Ex : 12/6/2022">
                                  <InfoCircleOutlined
                                    style={{ color: "rgba(0,0,0,.45)" }}
                                  />
                                </Tooltip>
                              }
                              onChange={(e) => setExdate(e.target.value)}
                            />
                          </Form.Item>
                        </div>
                      </div>
                    </div>

                    <div className="mt-20">
                      <div className=" font-semibold text-white text-xl -translate-x-16 mt-8 absolute">
                        Contact Details
                      </div>
                      <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                          {
                            required: true,
                          },
                          { type: "email" },
                          { max: 50 },
                        ]}
                        initialValue={email}
                      >
                        <Input
                          style={{ width: "450px" }}
                          placeholder="Enter Email Address"
                          prefix={
                            <FileDoneOutlined className="site-form-item-icon" />
                          }
                          suffix={
                            <Tooltip title="Please First Email Address">
                              <InfoCircleOutlined
                                style={{ color: "rgba(0,0,0,.45)" }}
                              />
                            </Tooltip>
                          }
                          onChange={(e) => setEmail(e.target.value)}
                          showCount
                          maxLength={50}
                        />
                      </Form.Item>
                      <div className=" flex ml-48 translate-x-16">
                        <div>
                          <Form.Item
                            name="code"
                            label="ISD Code"
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                            initialValue={code}
                          >
                            <Input
                              style={{ width: "130px" }}
                              placeholder="Enter ISD Code"
                              prefix={
                                <FileDoneOutlined className="site-form-item-icon" />
                              }
                              suffix={
                                <Tooltip title="Please Enter ISD Code">
                                  <InfoCircleOutlined
                                    style={{ color: "rgba(0,0,0,.45)" }}
                                  />
                                </Tooltip>
                              }
                              onChange={(e) => setCode(e.target.value)}
                            />
                          </Form.Item>
                        </div>
                        <div>
                          <Form.Item
                            name="mobile"
                            label="Mobile Number"
                            rules={[
                              {
                                required: true,
                                message: "Please input your Phone Number!",
                              },
                              {
                                min: 10,
                                message:
                                  "Phone Number must be minimum 10 characters.",
                              },
                              { max: 10 },
                            ]}
                            initialValue={mobileNumber}
                          >
                            <Input
                              style={{ width: "188px" }}
                              placeholder="Enter Mobile Number"
                              prefix={
                                <FileDoneOutlined className="site-form-item-icon" />
                              }
                              suffix={
                                <Tooltip title="Please Enter Mobile Number">
                                  <InfoCircleOutlined
                                    style={{ color: "rgba(0,0,0,.45)" }}
                                  />
                                </Tooltip>
                              }
                              onChange={(e) => setMobilenumber(e.target.value)}
                              showCount
                              type="number"
                              maxLength={10}
                            />
                          </Form.Item>
                        </div>
                      </div>
                    </div>

                    <Form.Item {...tailLayout}>
                      <div className="flex ml-40 px-32 mt-8">
                        <Button type="primary" htmlType="submit">
                          {loading ? (
                            <>
                              <Spin /> Submiting...
                            </>
                          ) : (
                            "Submit"
                          )}
                        </Button>{" "}
                      </div>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTravelDetails;
