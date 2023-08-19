import { NavLink } from "react-router-dom"

const Header = () => {
  const navStyleLink = (props) => {
    //   return {
    //     textDecoration: isActive ? 'none' : 'underline',
    //     color: isActive ? "black" : "white",
    //     fontSize: '22px'
    //   }
    return {
      textDecoration: props.isActive ? "none" : 'underline',
      color: props.isActive ? "black" : "white",
      fontSize: '22px',
       padding: ".5rem",
      //  backgroundColor: props.isActive ? "crimson" : "none",
       borderRadius: props.isActive ? "10px" : "none"
    }
  }
  return (
    <div className='data'>
      {/* <Link to={'/'}> <h1>Home</h1> </Link> */}
      <NavLink className="link" to={'/'} style={navStyleLink}> <h1>Home</h1> </NavLink>
      {/* <Link to={'/about'}> <h1>About</h1> </Link> */}
      <NavLink to={'/about'} style={navStyleLink}> <h1 >About</h1></NavLink>
      {/* <Link to={'/contact'}> <h1>Contact</h1> </Link> */}
      <NavLink to={'/contact'} style={navStyleLink}> <h1>Contact</h1></NavLink>
      {/* <Link to={'/Error 404| Page Not Found'}> <h1>Error</h1> </Link> */}
      <NavLink to={'/Error 404'} style={navStyleLink}> <h1>Error</h1></NavLink>
    </div>
  )
}

export default Header