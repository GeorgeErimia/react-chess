import React from "react";
import "./cell-styles.css";
import { isLightSquare, Cell as BoardCell } from "../../functions";
import PropTypes from "prop-types";
import Piece from "../piece";

const Cell = ({ cell, index }) => {
  const isLight = isLightSquare(cell.pos, index);

  return (
    <div className={`cell ${isLight ? "light" : "dark"}`}>
      <Piece pos={cell.pos} name={cell.piece} />
    </div>
  );
};

Cell.prototype = {
  cell: PropTypes.instanceOf(BoardCell).isRequired,
  index: PropTypes.number.isRequired,
};

export default Cell;
