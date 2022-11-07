import trollface from './images/trollface.png'

const Navbar = () => {
    return (   
        <div className ="nav">
            <div className="logo">
                <img src={trollface} alt="troll" />
                <h2>Meme Generator</h2>
            </div>
            <p>React-course- Project 3</p>
        </div>
     );
}
 
export default Navbar;