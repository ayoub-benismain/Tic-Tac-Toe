import './App.css'
import PropTypes from 'prop-types';


function BoardBox({arr , setArr , turn , setTurn , arrE , index , iCanPlay , setStatus , winLine}) {




    const handleClick = () => {
        const newArr = [...arr];
        if (newArr[index] === "") {
            newArr[index] = turn;
            setArr(newArr);
            turn === "X" 
                ? (setTurn("O"), setStatus("O's Turn!")) 
                : (setTurn("X"), setStatus("X's Turn!"));

        }
    }


    

    return ( 
        <div className={`box box${index}`} onClick={iCanPlay ? handleClick : null} ref={(e) => (winLine.current[index] = e)} ><span>{arrE}</span></div>
    );
}









BoardBox.propTypes = {
    arr: PropTypes.array.isRequired,         
    setArr: PropTypes.func.isRequired,      
    turn: PropTypes.string.isRequired,       
    setTurn: PropTypes.func.isRequired,      
    arrE: PropTypes.string.isRequired,        
    index: PropTypes.number.isRequired,
    iCanPlay : PropTypes.bool.isRequired,
    setStatus : PropTypes.func.isRequired,
    winLine : PropTypes.element.isRequired
};

export default BoardBox;