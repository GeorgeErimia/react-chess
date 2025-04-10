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

    return <div className='game'>
        <Board cells={board} />
    </div>
};

export default Game;