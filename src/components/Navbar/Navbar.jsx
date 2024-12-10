import './NAvbar.css'

 const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>EV-ERA</div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className="nav-cont">Contact</li>
            
        </ul>
    </div>
  )
}
export default Navbar;
