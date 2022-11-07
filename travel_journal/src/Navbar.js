import world from './images/world.png'

const Navbar = () => {
    return ( 
        <nav>
            <img src={world} alt="" />
            <span>my_travel_journal.</span>
        </nav>
     );
}
 
export default Navbar;