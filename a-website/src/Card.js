import star from './images/star.png'

export default function Card(props) {
    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "Online"
    }
    return (
        <div className="card">
            {badgeText && <div className="cardBadge">{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} className="card--image" alt="img"/>
            <div className="card--stats">
                <img src={star} className="card--star" alt="star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}