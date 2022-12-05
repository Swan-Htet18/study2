function StartPage(props) {
    
    return (
        <div className="startContainer">
            <h1 className="startTitle">Quizzical</h1>
            <p className="startText">Let's use our rusty brain?</p>
            <button className="startBtn" onClick={props.startQuiz}>Start Quiz</button>
        </div>
    )
}
    
    

export default StartPage;