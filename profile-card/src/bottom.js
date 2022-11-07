import Facebook from './icons/facebook.png'
import Insta from './icons/instagram.png'
import Twitter from './icons/twitter.png'
import Github from './icons/github.png'


const Bottom = () => {
    return ( 
        <div className="bottom">
           <img src={Facebook} alt="fb" />
           <img src={Insta} alt="insta" />
           <img src={Twitter} alt="twit" />
           <img src={Github} alt="github" />
        </div>
     );
}
 
export default Bottom;