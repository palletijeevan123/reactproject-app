import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Services(){
  return (
    <div>
        <h1>iam from services</h1>
        <Link className="nav-link" to="offlineservices">offlineservices</Link>
        <Link className="nav-link" to="onlineservices">onlineservices</Link>
    <Outlet/>
    </div>
  )
}

export default Services;