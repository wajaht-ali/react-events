import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();

  return (
    <div>
        <h2 >404 Page Not Found!</h2>
        {/* <button onClick={() => navigate('/')}>Go Home</button> */}
        {/* <Link to={"/"}><button>Home</button></Link> */}
        <button onClick={() => navigate("/")}>Home</button>
    </div>
  )
}

export default Error