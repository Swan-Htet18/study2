import pin from './images/pin.png'

const Section = (props) => {
    return ( 
        <div className='section'>
            <div className='imgBx'>
                <img src={props.imageUrl} alt="img" />
                </div>
            <div className='textBx'>
                <div className='location'>
                <img src={pin} alt="" />
                <span>{props.location}</span>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
        </div>
     );
}
 
export default Section;