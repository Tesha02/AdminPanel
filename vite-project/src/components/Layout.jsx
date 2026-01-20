import React from 'react'
import { Link, Outlet } from "react-router-dom";
import "../style.css"

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/products">Products</Link>
        <Link to="/products/new">Create Product</Link>

      </nav>
      <Outlet/>
    </div>
  )
}

export default Layout
