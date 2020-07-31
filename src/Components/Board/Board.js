import React from 'react';
import Square from './Square';

class Board extends React.Component{

    renderSquare(i){
        return (
            <Square 
                value={this.props.squares[i]}
                onClick={()=> this.props.onClick(i)}
            />
        );
    }

    renderRow(startingIndex){
        return (
            <div className="row">
                {this.renderSquare(startingIndex)}
                {this.renderSquare(startingIndex+1)}
                {this.renderSquare(startingIndex+2)}
            </div>
        );
    }
    
    render(){
        
        return(
            <div className="board">
                {this.renderRow(0)}
                {this.renderRow(3)}
                {this.renderRow(6)}
            </div>
        );
    }
}

export default Board;