import {  useEffect  } from 'react';
import BoardBox from './BoardBox';
import './App.css';
import PropTypes from 'prop-types';


function Board({boardState , setBoardState , turn , setTurn , iCanPlay , setICanPlay , setStatus , winLine , xScore ,setxScore , oScore , setoScore}) {



    

    function isDraw(arr) {
        for (let i = 0 ; i < 9 ; i++) {
            if (arr[i] === "") {
                return false;
            }
        }
        return true;
    }
    

    useEffect(() => {
        const winCases = [
            [0,1,2] ,
            [3,4,5],
            [6,7,8],
            [0,3,6] ,
            [1,4,7] ,
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        winCases.forEach((e) => {
            const [a,b,c] = e;
            const newArr = [...boardState];
            if (newArr[a] === newArr[b] && newArr[b] == newArr[c] && newArr[c] == "X"){
                setICanPlay(false)
                setStatus("X Wins!");
                setxScore(xScore+1);
                e.forEach((i) => {
                    winLine.current[i].style.backgroundColor = "rgb(7, 25, 187)";
                })
                
            } else if (newArr[a] === newArr[b] && newArr[b] == newArr[c] && newArr[c] == "O") {
                setICanPlay(false)
                setStatus("O Wins!");
                setoScore(oScore+1);
                e.forEach((i) => {
                    winLine.current[i].style.backgroundColor = "rgb(7, 25, 187)";
                })
                
                
            } else if (isDraw(newArr) === true) {
                setStatus("Draw!");
                
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [boardState])
    

    return ( 
        <div className="board">
            {boardState.map((e, i) => (
                <BoardBox 
                    winLine = {winLine}
                    iCanPlay = {iCanPlay}
                    key={i}
                    arr = {boardState}
                    setArr = {setBoardState}
                    turn = {turn}
                    setTurn = {setTurn}
                    arrE = {e}
                    index = {i}
                    setStatus = {setStatus}
                />
            ))}
        </div>
    );
}

Board.propTypes = {
    boardState: PropTypes.arrayOf(PropTypes.string).isRequired,
    setBoardState: PropTypes.func.isRequired,
    turn: PropTypes.string.isRequired,
    setTurn: PropTypes.func.isRequired,
    iCanPlay : PropTypes.bool.isRequired,
    setICanPlay : PropTypes.func.isRequired,
    setStatus : PropTypes.func.isRequired,
    winLine : PropTypes.element.isRequired,
    setxScore : PropTypes.func.isRequired,
    setoScore : PropTypes.func.isRequired,
    xScore : PropTypes.number.isRequired,
    oScore : PropTypes.number.isRequired
};

export default Board;
