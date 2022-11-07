import Logo from './images/airbnb.png'
const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <img src={Logo} alt="" />
            <p>airbnb</p>
        </nav>
     );
}
 
export default Navbar;