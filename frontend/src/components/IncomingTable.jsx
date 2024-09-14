/* eslint-disable no-unused-vars */
import "./WorkbookTable.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { getIncoming, deleteIncomingData } from "../services/incomingApi/IncomingApi";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Incoming = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getIncoming();
                console.log("API Response:", response); // Log the API response
                setData(response.data); // Ensure response.data is what you expect
            } catch (error) {
                console.error("Error fetching data:", error); // Catch and log errors
            }
        };
        fetchUsers();
    }, []);

    const handleSubmit = async (e, dataId) => {
        e.preventDefault();
        try {
            const response = await deleteIncomingData(dataId);
            setData(data.filter((data) => data._id !== dataId));
        } catch (error) {
            console.error("Error deleting item", error);
        }
    };



    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <aside className="col-md-3">
                        {/* SideNav component or code should be included here */}
                    </aside>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 main-content">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Source</th>
                                        <th>CM First Name</th>
                                        <th>CM Last Name</th>
                                        <th>CM Phone</th>
                                        <th>Alternative Number</th>
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
                                    {data.map((d) => (
                                        <tr key={d._id}>
                                            <td>{d.date}</td>
                                            <td>{d.source.value}</td>
                                            <td>{d.CM_First_Name}</td>
                                            <td>{d.CM_Last_Name}</td>
                                            <td>{d.CM_Phone}</td>
                                            <td>{d.alternate_Phone}</td>
                                            <td>{d.agent_name.value}</td>
                                            <td>{d.language.value}</td>
                                            <td>{d.disease.value}</td>
                                            <td>{d.age}</td>
                                            <td>{d.height}</td>
                                            <td>{d.weight}</td>
                                            <td>{d.state.value}</td>
                                            <td>{d.city}</td>
                                            <td>{d.remark.value}</td>
                                            <td>{d.comment}</td>
                                            <td>
                                                <form onSubmit={(e) => handleSubmit(e, d._id)}>
                                                    <button className="btn btn-outline-danger btn-sm" type="submit">
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
            </div>

            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
                crossOrigin="anonymous"
            ></script>
        </>
    );
};

export default Incoming;
