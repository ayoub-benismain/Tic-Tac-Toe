import { useState , useRef } from 'react';
import './App.css';
import Board from './Board';
import BoardTitle from './BoardTitle'
import GameInfo from './GameInfo';
import ScoreBoard from './ScoreBoard';



function App() {

  const [boardState, setBoardState] = useState(Array(9).fill(""));
  const [turn , setTurn] = useState("X");

  const [iCanPlay,setICanPlay] = useState(true);

  const winLine = useRef([]);

  const [xScore , setxScore] = useState(0)
  const [oScore , setoScore] = useState(0)

  const playAgain = () => {
    setBoardState(Array(9).fill(""));
    setICanPlay(true);
    setTurn("X");
    setStatus("X'S TURN!");
    winLine.current.forEach((e) => {
      e.style.backgroundColor = "#131212";
    })

  }

  const resetGame = () => {
    setBoardState(Array(9).fill(""));
    setICanPlay(true);
    setTurn("X");
    setStatus("X'S TURN!");
    winLine.current.forEach((e) => {
      e.style.backgroundColor = "#131212";
    })
    setxScore(0);
    setoScore(0);  
  }

  const [status , setStatus] = useState("X's Turn!")


  return (
      <div className = "container">
          <div className="leftSide">
              <BoardTitle/>
              <Board 
                xScore = {xScore}
                setxScore = {setxScore}
                oScore = {oScore}
                setoScore = {setoScore}
                winLine = {winLine}
                boardState = {boardState}
                setBoardState = {setBoardState}
                turn = {turn}
                setTurn = {setTurn}
                iCanPlay = {iCanPlay}
                setICanPlay = {setICanPlay}
                setStatus = {setStatus}
              />
            
          </div>
          


          <div className="rightSide">
              <ScoreBoard 
                xScore = {xScore}
                oScore = {oScore}
              />
              <GameInfo 
              status={status}
              playAgain={playAgain}
              resetGame = {resetGame}
              />
          </div>


      </div>
  )
}

export default App;