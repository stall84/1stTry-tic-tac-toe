import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Box from './Box';
import utils from '../utilities/functions';
import Storage from './../storage/storage';


/*********************************************************************************************************/
/************************ Our board component, will be a statefull class component. **********************/
/************************* The containing board and all of the methods/handlers/state ********************/
/*********************************************************************************************************/

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: Array(9).fill(null),
            history: [],
            xIsNext: true
    }
    
}

clickHandle = () => {
    // Get the current state of the boxes 1st
    const boxes = this.state.boxes.slice();
    // Get current state of turn history
    let history = this.state.history;
    // End the game if a winning condition exists 
    if (utils.checkWinner(boxes) || boxes[index]) {
        return
    };
    // End the game if all boxes are filled with no winner
    if (utils.allBoxesFilled(boxes) === true) {
        return
    };
    // mark boxes with player's either 'X' or 'O'
    // using ternary we will query the state, if X is up next, render an X, if not, render an O
    boxes[index] = this.state.xIsNext ? 'X' : 'O';
    // Push the previously determined player's move into the game's history
    history.push(this.state.xIsNext ? 'X' : 'O');
    // Update this components state with the newly determined data. Next player will be bang-xIsNext
    this.setState({
        boxes: boxes,
        history: history,
        xIsNext: !this.state.xIsNext
    });
}

handleRestart = () => {
    // reset this component's state to the initial state, manually
    this.setState({
        boxes: Array(9).fill(null),
        history: [],
        xIsNext: true
    })
}


    render() {
        // Get the winning player if one exists
        const winner = utils.checkWinner(this.state.boxes)
        // Check if all boxes are filled 
        const isFilled = utils.allBoxesFilled(this.state.boxes)
        // Create a status message to inform player of what's going on
        let status

            if(winner) {
                // If a winner exists, create a winning status message
                status = `The winner is: ${winner}!`
            } else if(!winner && isFilled) {
                // In a tie-state with all boxes filled, create a tie message
                status = 'Game is a Tie'
                // Push tie-game data to local-storage object
            this.storage.update(['Tie Game'])
            } else {
                // If there's still no winner and no tie, ask next player to move
                // We'll do this by setting status to template literal calling xIsNext, if true
                // ternary used to insert X, if false, O
                status = `It is ${(this.state.xIsNext ? 'X' : 'O')}'s turn`
            }
            
            
        return (
            <div>

            </div>
        )
    }
}


export default Board;
