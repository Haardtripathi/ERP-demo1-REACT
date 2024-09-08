import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../components/Navbar"
import SideNav from './SideNav'

const MainLayout = () => {
  return (
    <>
    <Navbar></Navbar>
    <SideNav></SideNav>
    <Outlet></Outlet>
    </>
  )
}

export default MainLayout