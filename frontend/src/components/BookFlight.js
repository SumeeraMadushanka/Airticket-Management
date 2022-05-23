import React, { useState } from "react";
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

import { FileDoneOutlined, InfoCircleOutlined } from "@ant-design/icons";

import axios from "axios";
import "./Styles/Admin.css";

import Header from "./Header";
import Api from "./api";
import { useNavigate } from "react-router-dom";

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

const BookFlight = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departing, setDeparting] = useState("");
  const [returning, setReturning] = useState("");
  const [adults, setAdults] = useState("");
  const [child, setChild] = useState("");
  const [infant, setInfant] = useState("");
  const [selectClass, setSelectclass] = useState("");
  const [currency, setCurrency] = useState("");

  const [loading, setLoading] = useState(false); //additional

  const onChangeCurrency = (e) => {
    setCurrency(e);
  };
  const onChangeSelectclass = (e) => {
    setSelectclass(e);
  };

  const onChangeDeparting = (e) => {
    setDeparting(e);
  };

  const onChangeReturning = (e) => {
    setReturning(e);
  };

  const history = useNavigate();

  const searchHandler = async (placement) => {
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
        "/bookFlight/create",
        {
          departure,
          arrival,
          departing,
          returning,
          adults,
          child,
          infant,
          selectClass,
          currency,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        notification.info({
          message: `Notification`,
          description: "Search Flights..",
          placement,
        });
        form.resetFields();
      }, 5000); //5seconds timeout
      history("/searchresults");
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
      <div className="container mx-auto contact-bg bg-cover">
        <div className="flex justify-center mt-8 gap-28 mb-10 w-full">
          <div className=" border-2 text-center border-gray-900 px-56 bg-shadow bg-stone-600 mt-10 mb-10">
            <div className="mb-10">
              <div className="mt-20 flex">
                <div>
                  <Form
                    {...layout}
                    form={form}
                    name="control-hooks"
                    onFinish={() => searchHandler("top")}
                  >
                    <div className=" mb-8 ml-32 font-semibold text-3xl  border-2 p-2 w-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl">
                      Round Trip
                    </div>
                    <div className="">
                      <Form.Item
                        name="departure"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        initialValue={departure}
                      >
                        <Input
                          style={{ width: "700px" }}
                          placeholder="Departure Airport"
                          prefix={
                            <FileDoneOutlined className="site-form-item-icon" />
                          }
                          suffix={
                            <Tooltip title="Please Fill this">
                              <InfoCircleOutlined
                                style={{ color: "rgba(0,0,0,.45)" }}
                              />
                            </Tooltip>
                          }
                          onChange={(e) => setDeparture(e.target.value)}
                        />
                      </Form.Item>
                      <Form.Item
                        name="arrival"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        initialValue={arrival}
                      >
                        <Input
                          style={{ width: "700px" }}
                          placeholder="Arrival Airport"
                          prefix={
                            <FileDoneOutlined className="site-form-item-icon" />
                          }
                          suffix={
                            <Tooltip title="Please Fill this">
                              <InfoCircleOutlined
                                style={{ color: "rgba(0,0,0,.45)" }}
                              />
                            </Tooltip>
                          }
                          onChange={(e) => setArrival(e.target.value)}
                        />
                      </Form.Item>
                      <div className=" flex gap-48 ">
                        <div>
                          <Form.Item
                            name="departing"
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                          >
                            <DatePicker
                              //   defaultValue={moment(Date(departing))}
                              onChange={onChangeDeparting}
                              style={{ width: "250px" }}
                            />
                          </Form.Item>
                        </div>
                        <div>
                          <Form.Item
                            name="returning"
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                          >
                            <DatePicker
                              //   defaultValue={moment(Date(returning))}
                              onChange={onChangeReturning}
                              style={{ width: "260px" }}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className=" float-left text-xl font-semibold">
                        Passengers
                      </div>
                      <div className=" flex gap-64 mt-8 ">
                        <div className="translate-x-2 text-semibold">
                          Adults
                        </div>
                        <div className="translate-x-4 text-semibold">
                          Child(2-12)
                        </div>
                        <div className="-translate-x-2 text-semibold">
                          Infant(2)
                        </div>
                      </div>
                      <div className=" flex gap-28 my-4">
                        <div className="">
                          <Form.Item
                            name="adults"
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                            initialValue={adults}
                          >
                            <Input
                              style={{ width: "160px" }}
                              placeholder="Adults"
                              prefix={
                                <FileDoneOutlined className="site-form-item-icon" />
                              }
                              onChange={(e) => setAdults(e.target.value)}
                              type="number"
                            />
                          </Form.Item>
                        </div>
                        <div>
                          <Form.Item
                            name="child"
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                            initialValue={child}
                          >
                            <Input
                              style={{ width: "160px" }}
                              placeholder="Child"
                              prefix={
                                <FileDoneOutlined className="site-form-item-icon" />
                              }
                              onChange={(e) => setChild(e.target.value)}
                              type="number"
                            />
                          </Form.Item>
                        </div>
                        <div>
                          <Form.Item
                            name="infant"
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                            initialValue={infant}
                          >
                            <Input
                              style={{ width: "160px" }}
                              placeholder="Infant"
                              prefix={
                                <FileDoneOutlined className="site-form-item-icon" />
                              }
                              onChange={(e) => setInfant(e.target.value)}
                              type="number"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className=" float-left text-xl font-semibold">
                        Select Class
                      </div>
                      <div className="mt-16">
                        <Form.Item
                          name="class"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select
                            style={{ width: 700 }}
                            onChange={onChangeSelectclass}
                            value={selectClass}
                          >
                            <Option value="Sri Lankan">Ecconomic</Option>
                            <Option value="Indian">Bussiness</Option>
                          </Select>
                        </Form.Item>
                      </div>
                      <div className=" float-left text-xl font-semibold">
                        Select Currency
                      </div>
                      <div className="mt-16">
                        <Form.Item
                          name="currency"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select
                            style={{ width: 700 }}
                            onChange={onChangeCurrency}
                          >
                            {Api.map((element) => (
                              <Option value={element}>{element}</Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </div>
                    </div>

                    <Form.Item {...tailLayout}>
                      <div className="flex ml-12  mt-6">
                        <Button type="primary" htmlType="submit">
                          {loading ? (
                            <>
                              <Spin /> Serching...
                            </>
                          ) : (
                            "Search Flight"
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

export default BookFlight;
