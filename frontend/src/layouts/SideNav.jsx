import React from 'react'
import { Link } from "react-router-dom"


import './SideNav.css';
const SideNav = () => {
  return (
    <nav className="sidebar">
    <div className="position-sticky pt-3">
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link className="nav-link active" to="/workbook">Workbook</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/incoming">Incoming</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/lead">Lead</Link>
            </li>
            <li>
                <hr></hr>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/pending">Pending</Link>
            </li>
        </ul>
    </div>
    </nav>
  )
}

export default SideNav