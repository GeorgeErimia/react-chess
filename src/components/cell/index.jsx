import React, { useContext } from "react";
import "./cell-styles.css";
import { isLightSquare, Cell as BoardCell } from "../../functions";
import PropTypes from "prop-types";
import Piece from "../piece";
import { GameContext } from "../../context/GameContext";

const Cell = ({ cell, index, makeMove, setFromPos }) => {
  const isLight = isLightSquare(cell.pos, index);

  const { possibleMoves } = useContext(GameContext);
  const isPossibleMove = possibleMoves.includes(cell.pos);

  const handleDrop = () => {
    makeMove(cell.pos);
  };

  const handleClick = () => {
    console.log(cell.pos);
  };

  return (
    <div
      className={`cell ${isLight ? "light" : "dark"}`}
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {/* <div>{cell.pos}</div> */}
      {/* TODO: Fix possible moves not being highlighted */}
      <Piece pos={cell.pos} name={cell.piece} setFromPos={setFromPos} />
    </div>
  );
};

Cell.prototype = {
  cell: PropTypes.instanceOf(BoardCell).isRequired,
  index: PropTypes.number.isRequired,
  makeMove: PropTypes.func,
  setFromPos: PropTypes.func,
};

export default Cell;
