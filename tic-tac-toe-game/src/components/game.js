import {useEffect, useState} from "react";

const Game = () => {

    const[activePlayer, setActivePlayer] = useState('X');
    const[grid, updateGrid] = useState([]);
    const[winner, setWinner] = useState();

     const makeMove = (idx) => {
        if(grid[idx] ||  winner){ // to not change the value of the idx once it is filled, we are returning it.
            return;
        }
         setActivePlayer((oldState) => oldState === 'X'?'O':'X');
         // updateGrid(activePlayer,idx);
         updateGrid((oldState) => {
            const newState = [...oldState]; //create clone of the oldState and modify what I created and return it, so that useEffect will execute
            newState[idx] = activePlayer;
            return newState;
            // oldState[idx] = activePlayer; // this does not have any effect on the useEffect as we are not changing the oldState and creating a clone of it
            // return oldState;
     });
    }

    const calculateWinner = (grid) => {
        console.log(grid);
        const winnerPattern = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ]
        for(var i=0; i<=winnerPattern.length; i++){
            const firstValue = grid[winnerPattern[i][0]];
            const secondvalue = grid[winnerPattern[i][1]];
            const thirdValue = grid[winnerPattern[i][2]];
    
        if(firstValue === secondvalue && secondvalue === thirdValue){
            return firstValue;
        }
    }
    }

    useEffect(() => {
       const win = calculateWinner(grid);
       if(win){
        setWinner(win);
       }
    },[grid])

//     const updateGridIdx = (activePlayer, idx) => {
//         updateGrid((oldState) => {
//             // const newState = [...oldState];
//             oldState[idx] = activePlayer;
//             return oldState;
//     });
// }

    return (
        <div className = "game-board">
            <h2>Active Player: {activePlayer}</h2>
        <p> This is a game </p>
        <div className = "board-row">
            <button className = "square" onClick = {() => makeMove(0)}>{grid[0]}</button> {/*() => makeMove(0) - we have number of buttons here, to pass the idx of the value we have to make this functiona as a callback function */}
            <button className = "square" onClick = {() => makeMove(1)}>{grid[1]}</button>
            <button className = "square" onClick = {() => makeMove(2)}>{grid[2]}</button>
        </div>
        <div className = "board-row">
            <button className = "square" onClick = {() => makeMove(3)}>{grid[3]}</button>
            <button className = "square" onClick = {() => makeMove(4)}>{grid[4]}</button>
            <button className = "square" onClick = {() => makeMove(5)}>{grid[5]}</button>
        </div>
        <div className = "board-row">
            <button className = "square" onClick = {() => makeMove(6)}>{grid[6]}</button>
            <button className = "square" onClick = {() => makeMove(7)}>{grid[7]}</button>
            <button className = "square" onClick = {() => makeMove(8)}>{grid[8]}</button>
        </div>
        {winner && <h3> Winner:{winner}</h3>}
        </div>
        
    )
}

export default Game;