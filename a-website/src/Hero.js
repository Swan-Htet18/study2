import grid from './images/grid.png'

const Hero = () => {
    return ( 
        <section className='heroContainer'>
            <img src={grid} alt="grid" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
     );
}
 
export default Hero;