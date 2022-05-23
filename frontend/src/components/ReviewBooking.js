import React, { useState, useEffect } from "react";
import { Button, Card, Col, Row } from "antd";
import axios from "axios";

import Header from "./Header";
import "./Styles/Admin.css";
import { NavLink } from "react-router-dom";

const ReviewBooking = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("/mybooking/")
        .then((res) => setData(res.data))
        .catch((error) => alert(error));
    })();
  }, []);

  const filterData = data.filter((el) => el.stops === "1");

  return (
    <div className=" container mx-auto">
      <Header />
      <div className="site-card-wrapper border-2 border-stone-900 p-2 mb-4 mt-2 bg-shadow bg-zinc-500">
        <div className=" text-center font-semibold text-5xl mb-10">
          Review Bookings
        </div>
        {filterData.map((value, index) => {
          return (
            <div className=" translate-x-80">
              <Card
                title={value.title}
                bordered={true}
                style={{ backgroundColor: "#00CED1", width: 650 }}
              >
                <div className=" flex-row">
                  <div className="mt-2 text-blue-900 font-bold text-lg flex justify-between">
                    <div className=" flex">Time :</div>
                    <div className=" flex">
                      {value.startTime} - {value.endTime}
                    </div>
                  </div>
                  <div className="mt-2 text-lg text-red-600 font-bold flex justify-between">
                    <div className="flex">Price :</div>
                    <div className="flex">$ {value.price}</div> 
                  </div>
                  <div className="mt-2 text-lg text-yellow-600 font-bold flex justify-between">
                    <div className="flex">Weight :</div>
                    <div className="flex">{value.weight}Kg</div>
                  </div>
                  <div className="mt-2 text-lg text-green-700 font-bold flex justify-between">
                    <div className="flex">Stops :</div>
                    <div className="flex">{value.stops}</div>
                  </div>
                </div>
                <hr />
                <div className=" mt-4 flex gap-4 justify-between">
                  <div className=" text-lg text-black font-bold flex">Total Fee</div>
                  <div className=" text-lg text-black font-bold flex">$500</div>
                </div>
              </Card>
            </div>
          );
        })}
        <br />
        <div className="mb-4 text-center mt-10">
          <NavLink to="/payment">
            <Button type="danger">PROCEED</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ReviewBooking;
