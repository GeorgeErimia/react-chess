import React, { useState, useRef, useEffect } from 'react';
import { Chess } from 'chess.js';
import { createboard } from '../../functions/create-board';
import Board from '../../components/board';

// Define a FEN
// A FEN is a string notation used to describe a particular board position of a chess game
// This FEN represents the initial positions on the chess board
// Uppercase - white pieces | Lowercase - black pieces

// r - rook | n - knight | b - bishop | q - queen | k - king | p - pawn 

const FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

const Game = () => {
    const [fen, setFen] = useState(FEN);
    const {current: chess} = useRef(new Chess(fen));
    const [board, setBoard] = useState(createboard(fen));

    useEffect(() => {
        setBoard(createboard(fen));
    }, [fen]);

    // Ref object to store the initial position of a piece
    const fromPos = useRef();

    const makeMove = (pos) => {
        const from = fromPos.current;
        const to = pos;
        chess.move({from, to});
        setFen(chess.fen());
    }

    // Setter method to set the fromPos's current property
    const setFromPos = (pos) => (fromPos.current = pos);


    return <div className='game'>
        <Board cells={board} setFromPos={setFromPos} makeMove={makeMove}/>
    </div>
};

export default Game;