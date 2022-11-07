import MyImage from './ichigo.jpg'
const Top = () => {
    return ( 
       <div className='topContainer'>
            <div className='imgContainer'>
                <img src={MyImage} alt="zz" />
            </div>
            <h1>Swan Htet</h1>
            <h3>Frontend Developer</h3>
            <p>swanhtet.website</p>
        </div> 
     );
}
 
export default Top;