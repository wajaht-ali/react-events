import React from 'react'
import {Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <h2>I'm Contact.</h2>
        <Link to={'insta'}> <h4>Connect via Insta</h4></Link>
        <Link to={'mail'}> <h4>Connect via Mail</h4></Link>
        <Link to={'twitter'}> <h4>Connect via Twitter</h4></Link>
        <Link to={'threads'}> <h4>Connect via Threads</h4></Link>
        <Outlet />
    </div>
  )
}

export default Contact