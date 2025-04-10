import React from "react";
import "./piece-styles.css";
import PropTypes from "prop-types";

/**
 * Piece Component:
 * A piece is extracted from the FEN and converted into a Piece object.
 * Inside the FEN, pieces follow these naming convetions:
 * P - Pawn | R - Rook | N - Knight | B - Bishop | Q - Queen | K - King
 * Uppercase letter - White piece (e.g:  R -> white rook)
 * Lowercase letter - Black piece (e.g:  k > black king)
 */
const Piece = ({ name, pos }) => {
  // Calculate the color by checking for the uppercase letter
  const color = name === name.toUpperCase() ? "w" : "b";

  /**
   * Calculate the corresponding image:
   * In the ../../resources/pieces folder, the piece assets are named like this:
   * cP -> where c = color | P = piece type
   * e.g: bK -> black king | wP -> white pawn
   */
  const imageName = color + name.toUpperCase(); // This is the image name that we need to search for

  let imageSrc;

  try {
    imageSrc = require(`../../resources/pieces/${imageName}.png`);
  } catch (error) {
    imageSrc = require(`../../resources/pieces/empty.png`);
  }

  return <img className="piece" src={imageSrc} alt="" draggable={true} />;
};

Piece.prototype = {
  name: PropTypes.string.isRequired,
  pos: PropTypes.string.isRequired,
};

export default Piece;
