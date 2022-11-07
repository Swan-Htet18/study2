import picture from "./images/picture.png"
import memeData from "./memeData";
import React from "react";


const Meme = () => {
    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memeData)
    

        function getMemeImage() {
            const memesArray = allMemeImages.data.memes
            const randomNum = Math.floor(Math.random() * memesArray.length)
            console.log(memesArray)
            const url = memesArray[randomNum].url
            setMeme(prevMeme => ({
                    ...prevMeme,
                    randomImage : url
            }) )
        }
    
        
    return ( 
        <div className="Meme">
            <div className="input">
            <input type="text" placeholder="top text" />
            <input type="text" placeholder="bottom text"/>
            </div>
            <button onClick={getMemeImage}>Get a new meme Image <span><img src={picture} alt="pic" width="16px" /></span></button>
            <img src={meme.randomImage} alt="meme" className="memeImg"/>
        </div>

     );
}
 
export default Meme;