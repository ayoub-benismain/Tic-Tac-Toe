/* eslint-disable react/prop-types */


function ScoreBoard({xScore , oScore}) {
    return ( 
        <div className="scoreBoard">
                <h1 className = "scoreTitle">Score <span>Board</span></h1>
                <div className="score">
                    <div className="X_Score">
                        <h1>X</h1>
                        <hr />
                        <span>{xScore}</span>
                    </div>
                    <div className="O_Score">
                        <h1>O</h1>
                        <hr />
                        <span>{oScore}</span>
                    </div>
                </div>
        </div>
     );
}

export default ScoreBoard;