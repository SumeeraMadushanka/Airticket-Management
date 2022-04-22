import React, { useState, useEffect } from "react";
import axios from "axios";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { NavLink } from "react-router-dom";

const Adminpage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("/travel/")
        .then((res) => setData(res?.data))
        .catch((error) => alert(error));
    })();
  }, []);

  const deleteDetails = async (id) => {
    //method for deleting a userdetails
    if (window.confirm("Do you want to delete !")) {
      await axios.delete(`/travel/delete/${id}`);
      await axios
        .get("/travel/")
        .then((res) => setData(res?.data))
        .catch((error) => alert(error));
    }
  };

  return (
    <div className=" container mx-auto">
      <div className="p-2 text-center text-5xl mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md justify-content-center mx-auto">
        Hello' Admin
      </div>
      <center>
        <div>
          <h1 className=" text-4xl mt-20">All Travel Details</h1>
        </div>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="w-4/5 border-4 border-sky-700 text-center">
                  <thead class="border-b-4 border-b-sky-700">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                      >
                        First Name
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                      >
                        Last Name
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                      >
                        Nationality
                      </th>

                      <th
                        scope="col"
                        class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                      >
                        Passport Number
                      </th>

                      <th
                        scope="col"
                        class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                      >
                        Iss. Country
                      </th>

                      <th
                        scope="col"
                        class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                      >
                        Expire Date
                      </th>

                      <th
                        scope="col"
                        class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                      >
                        Email
                      </th>

                      <th
                        scope="col"
                        class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                      >
                        ISD Code
                      </th>

                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 border-r-4 border-sky-700"
                      >
                        Mobile Number
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 border-r-4 border-sky-700"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  {data.map((value) => {
                    return (
                      <tbody>
                        <tr class="border-b">
                          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                            {value.firstName}
                          </td>
                          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                            {value.lastName}
                          </td>
                          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                            {value.nationality}
                          </td>
                          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                            {value.passportNumber}
                          </td>
                          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                            {value.country}
                          </td>
                          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                            {value.exDate}
                          </td>
                          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                            {value.email}
                          </td>
                          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                            {value.code}
                          </td>
                          <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                            {value.mobileNumber}
                          </td>
                          <td class="text-2xl px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                            <DeleteOutlined
                              style={{ color: "red" }}
                              onClick={() => deleteDetails(value._id)}
                            />
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
                <div className=" mt-6 float-right mr-32">
                  <NavLink to="/dashbord">
                    <Button type="primary" danger>
                      Back
                    </Button>
                  </NavLink>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Adminpage;
