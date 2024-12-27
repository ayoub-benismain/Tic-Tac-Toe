import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types
function GameInfo({status , playAgain , resetGame}) {
    return ( 
        <div className="gameInfo">
            <h1 className="gameInfoTitle">{"Game's"} <span>Info</span> </h1>
              <div className="status">{status}</div>
              <div className="restart" >
                <span className="again" onClick={playAgain}>Play Again</span>
                <span className = 'reset' onClick={resetGame} >Reset Game</span>
              </div>
        </div>
     );
}

GameInfo.PropTypes = {
    status : PropTypes.string.isRequired,
    resetGame : PropTypes.func.isRequired
}

export default GameInfo;