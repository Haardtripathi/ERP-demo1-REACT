/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import "./WorkbookTable.css";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  getWorkbook,
  deleteWorkbookData,
} from "../services/workbookApi/WorkbookApi";

const WorkbookTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getWorkbook();
        console.log("API Response:", response); // Log the API response
        setData(response.data); // Ensure response.data is what you expect
      } catch (error) {
        console.error("Error fetching data:", error); // Catch and log errors
      }
    };
    fetchUsers();
  }, []);

  const handleSubmit = async (e, itemId, dataId, dataValue) => {
    console.log(itemId, dataId, dataValue);
    e.preventDefault();

    try {
      const response = await deleteWorkbookData(itemId, dataId, dataValue);
      setData(data.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  return (
    <div className="container-fluid">
      <main className="main-content">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                {/* <th>Action</th> */}
                <th>Data</th>
                <th>Date</th>
                <th>Source</th>
                <th>CM First Name</th>
                <th>CM Last Name</th>
                <th>CM Phone</th>
                <th>Alternate Number</th>
                <th>Agent Name</th>
                <th>Language</th>
                <th>Disease</th>
                <th>Age</th>
                <th>Height</th>
                <th>Weight</th>
                <th>State</th>
                <th>City/District</th>
                <th>Remark</th>
                <th>Comment</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((data) => (
                <tr key={data._id}>
                  <td>{data.data.value}</td>
                  <td>{data.date}</td>
                  <td>{data.source.value}</td>
                  <td>{data.CM_First_Name}</td>
                  <td>{data.CM_Last_Name}</td>
                  <td>{data.CM_Phone}</td> {/* CM Phone */}
                  <td>{data.alternate_Phone}</td> {/* Alternate Number */}
                  <td>{data.agent_name?.value}</td> {/* Agent Name */}
                  <td>{data.language?.value}</td> {/* Language */}
                  <td>{data.disease?.value}</td> {/* Disease */}
                  <td>{data.age}</td> {/* Age */}
                  <td>{data.height}</td> {/* Height */}
                  <td>{data.weight}</td> {/* Weight */}
                  <td>{data.state?.value}</td> {/* State */}
                  <td>{data.city}</td> {/* City/District */}
                  <td>{data.remark?.value}</td> {/* Remark */}
                  <td>{data.comment}</td> {/* Comment */}
                  <td>
                    <form
                      onSubmit={(e) =>
                        handleSubmit(e, data._id, data.dataId, data.data.value)
                      }
                    >
                      <button
                        className="btn btn-outline-danger btn-sm"
                        type="submit"
                      >
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default WorkbookTable;
