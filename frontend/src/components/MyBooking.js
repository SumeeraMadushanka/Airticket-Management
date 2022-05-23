import React, { useState, useEffect } from "react";
import { Button, Card, Col, Row } from "antd";
import axios from "axios";

import Header from "./Header";

const MyBooking = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("/mybooking/")
        .then((res) => setData(res.data))
        .catch((error) => alert(error));
    })();
  }, []);

  console.log(data)

  const cancelTicket = async (id) => {
    try {
      await axios
        .delete(`/mybooking/delete/${id}`)
        .then(() => alert("Success cancel ticket"));
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className=" container mx-auto">
      <Header />
      <div className="site-card-wrapper border-2 border-stone-900 p-2 mb-4 mt-2">
        <div className=" text-center font-semibold text-5xl mb-4">
          My Bookings
        </div>
        <Row gutter={16}>
          {data.map((value, index) => {
            return (
              <Col span={8} key={value.index}>
                <Card
                  title={value.title}
                  bordered={true}
                  style={{ backgroundColor: "#00CED1" }}
                >
                  <div className=" flex-row">
                    <div className="mt-2 text-blue-900 font-bold text-lg">
                      Time : {value.startTime} - {value.endTime}
                    </div>
                    <div className="mt-2 text-lg text-red-600 font-bold">
                      Price : $ {value.price}
                    </div>
                    <div className="mt-2 text-lg text-yellow-600 font-bold">
                      Weight : {value.weight}Kg
                    </div>
                    <div className="mt-2 text-lg text-green-700 font-bold">
                      Stops : {value.stops}
                    </div>
                    <div
                      className=" text-center mt-4"
                      onClick={() => cancelTicket(value._id)}
                    >
                      <Button type="danger">Cancel Ticket</Button>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default MyBooking;
