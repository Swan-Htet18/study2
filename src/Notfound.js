import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="notFound">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to homepage....</Link>
        </div>
     );
}
 
export default Notfound;