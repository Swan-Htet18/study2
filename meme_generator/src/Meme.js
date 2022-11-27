import picture from "./images/picture.png"
import React from "react";


const Meme = () => {
    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMeme, setAllMeme] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    })

        function getMemeImage() {
            const randomNum = Math.floor(Math.random() * allMeme.length)
            const url = allMeme[randomNum].url
            setMeme(prevMeme => ({
                    ...prevMeme,
                    randomImage : url
            }) )
        }
        function handleChange(event) {
            const { value, name } = event.target;
            setMeme(prevMeme => ({
                ...prevMeme,
                [name] : value,
        }) )
    }
    
        
    return ( 
        <div className="Meme">
            <div className="input">
            <input type="text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                placeholder="top text" />
            <input type="text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                placeholder="bottom text"/>
            </div>
            <button onClick={getMemeImage}>Get a new meme Image <span><img src={picture} alt="pic" width="16px" /></span></button>
            <div className="memeImgContainer">
                <img src={meme.randomImage} alt="meme" className="memeImg"/>
                <h2 className="memeText top">{meme.topText}</h2>
                <h2 className="memeText bottom">{meme.bottomText}</h2>
            </div>
        </div>

     );
}
 
export default Meme;