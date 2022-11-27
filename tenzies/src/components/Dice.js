function Dice(props) {
    const styles = {
        backgroundColor : props.isHeld? "#59E391" : "white"
    }

    return(
        <div className="dice" 
            style={styles}
            onClick={props.holdDice}
            >
            <h1>{props.value}</h1>
        </div>
    )
       
    
}

export default Dice;