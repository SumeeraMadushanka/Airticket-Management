import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row } from "antd";
import axios from "axios";

import Header from "./Header";

const SearchResults = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("/bookFlight/")
        .then((res) => setData(res.data))
        .catch((error) => alert(error));
    })();
  }, []);

  const myBooking = async (value) => {
    const title = value.title;
    const startTime = value.startTime;
    const endTime = value.endTime;
    const price = value.price;
    const weight = value.weight;
    const stops = value.stops;
    try {
      await axios.post("/mybooking/create", {
        startTime,
        endTime,
        price,
        weight,
        stops,
        title
      });
      alert("Successfully Book");
    } catch (error) {
      alert(error);
    }
  };

  const filterDate = data.filter((el) => el.title === "Refundable" || el.title === "Non-Refundable")

  return (
    <div className=" container mx-auto">
      <Header />
      <div className="site-card-wrapper border-2 border-stone-900 p-2 mb-4 mt-2">
        <div className=" text-center font-semibold text-5xl mb-4">
          Search Flights
        </div>
        <Row gutter={16}>
          {filterDate.map((value, index) => {
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
                    <div className="mt-2 text-lg text-red-600 font-bold">Price : $ {value.price}</div>
                    <div className="mt-2 text-lg text-yellow-600 font-bold">Weight : {value.weight}Kg</div>
                    <div className="mt-2 text-lg text-green-700 font-bold">Stops : {value.stops}</div>
                    <div className=" text-center mt-4"  onClick={() => myBooking(value)}>
                      <Button type="primary">Book</Button>
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

export default SearchResults;
