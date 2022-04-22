import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Spin,
  Tooltip,
  notification,
  Select,
  DatePicker,
} from "antd";
import moment from "moment";

import { FileDoneOutlined, InfoCircleOutlined } from "@ant-design/icons";

import { useParams, NavLink } from "react-router-dom";
import axios from "axios";

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

const UpdateTravelDetails = () => {
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

  const onChangeExpdate = (e) => {
    setExdate(e);
  };

  const { id } = useParams();

  useEffect(() => {
    //component mount
    const getData = async () => {
      await axios
        .get(`/travel/get/${id}`)
        .then((res) => {
          console.log(res);
          form.setFieldsValue({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            code: res.data.code,
            email: res.data.email,
            nationality: res.data.nationality,
            passportNumber: res.data.passportNumber,
            country: res.data.country,
            mobileNumber: res.data.mobileNumber,
          });
          setExdate(res.data.exDate);
          setFirstname(res.data.firstName);
          setLastname(res.data.lastName);
          setCode(res.data.code);
          setEmail(res.data.email);
          setCountry(res.data.country);
          setMobilenumber(res.data.mobileNumber);
          setNationality(res.data.nationality);
          setPassportnumber(res.data.passportNumber);
        })
        .catch((err) => alert(err));
    };
    getData();
  }, []);

  const updateHandler = async (placement) => {
    // create handler for saving data to the db
    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        //use axios API
        `/travel/update/${id}`,
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
          description: "Successfully Update details 😘",
          placement,
        });
      }, 5000); //5seconds timeout
    } catch (error) {
      notification.error({
        message: `Notification`,
        description: error.response.data.error,
        placement,
      });
      setLoading(false);
    }
  };

  const [form] = Form.useForm();

  return (
    <>
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
                    onFinish={() => updateHandler("top")}
                  >
                    <div>
                      <div className=" font-semibold text-white text-xl -translate-x-16 mt-8 absolute">
                        Traveller Name
                      </div>
                      <Form.Item
                        name="firstName"
                        label="Firts Name"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input
                          style={{ width: "450px" }}
                          placeholder="Enter First Name"
                          prefix={
                            <FileDoneOutlined className="site-form-item-icon" />
                          }
                          suffix={[
                            <Tooltip title="Please First Enter Name">
                              <InfoCircleOutlined
                                style={{ color: "rgba(0,0,0,.45)" }}
                              />
                            </Tooltip>,
                          ]}
                          onChange={(e) => setFirstname(e.target.value)}
                          value={firstName}
                        />
                      </Form.Item>
                      <Form.Item
                        name="lastName"
                        label="Last Name"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
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
                          value={lastName}
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
                              value={nationality}
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
                            name="passportNumber"
                            label="Passport No."
                            rules={[
                              {
                                required: true,
                              },
                            ]}
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
                              value={passportNumber}
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
                              defaultValue="lucy"
                              style={{ width: 140 }}
                              onChange={onChangeCountry}
                              value={country}
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
                            style={{ width: 290 }}
                            label="Expire Date"
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                          >
                            <DatePicker
                              defaultValue={moment(Date(exDate))}
                              onChange={onChangeExpdate}
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
                        ]}
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
                          value={email}
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
                              value={code}
                            />
                          </Form.Item>
                        </div>
                        <div>
                          <Form.Item
                            name="mobileNumber"
                            label="Mobile Number"
                            rules={[
                              {
                                required: true,
                              },
                            ]}
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
                              value={mobileNumber}
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
                              <Spin /> Update...
                            </>
                          ) : (
                            "Update"
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
      <div className=" -translate-y-9 float-right mr-24">
        <NavLink to="/traveldetails">
          <Button type="primary" danger>
            Back
          </Button>
        </NavLink>
      </div>
    </>
  );
};

export default UpdateTravelDetails;
