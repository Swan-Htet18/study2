import Email from './icons/email.png'
import LinkedIn from './icons/linkedin.png'

const Links = () => {
    return ( 
        <div className="linkContainer">
           <button className="email">
            <img src={Email} alt="mail"/>
            <p>Email</p>
           </button>
           <button className="linkedin">
            <img src={LinkedIn} alt="linkedin"/>
            <p>LinkedIn</p>
           </button>
        </div>
     );
}
 
export default Links;