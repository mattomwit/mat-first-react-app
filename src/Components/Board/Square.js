import React from 'react';

function Square(props){
    return(
        <button 
            className="square btn btn-primary col p-4 m-1"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

export default Square;