import React from "react";
import './board-style.css';

const Board = ({cells}) => {
    return (
        <div className="board">
            {cells.map((cell) => (
                <div key={cell.pos}>{cell.pos}</div>
            ))}
        </div>
    );
};

export default Board;