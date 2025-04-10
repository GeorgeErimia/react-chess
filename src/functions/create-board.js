// Cell class has two parameters : 
// pos -> the actual position of the cell on the chessboard (a1, e4, g8, etc.)
// piece -> the actual piece that is on the cell (K - white knight, b - black bishop, etc)

class Cell {
    constructor(pos, piece) {
        this.pos = pos;
        this.piece = piece;
    }
}

// returns an array of range 1, n
const range = (n) => {
    return Array.from({length: n}, (_, i) => i + 1);
}


/**
 * Function that generates the actual chessboard information, as an array of Cell objects
 * @param {String} fenString rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPPP/RNBQKBNR w KQkq - 0 1
 * @returns {Cell[]}
 */

export const createboard = (fenString) => {

    // Get the first portion from the fen (before the first space)
    const fen = fenString.split(' ')[0];

    // Remove the row delimiters '/'
    // Result should look like this : rnbqkbnrpppppppp8888PPPPPPPPRNBQKBNR
    const fenPieces = fenString.split('/').join('');

    // Convert the FEN into a 64-piece array
    let pieces = Array.from(fenPieces);
    Array.from(fenPieces).forEach((item, index) => {
        // Check if there's a number n (of empty spaces) in the FEN
        if(isFinite(item)) {
            // Replace the number with n empty spaces 
            pieces.splice(index, 1, range(item).fill(''));
        }
    });

    // Flatten the array
    pieces = pieces.flat();


    // Create rows descending from top to bottom
    // Should look like this : ["8", "7", "6", "5", "4", "3", "2", "1"]
    const rows = range(8)
        .map((n) => n.toString())
        .reverse();

    // Create columns
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    // Create an array of cells from the rows and columns 
    // Should look like this : ["a1", "b1", "c1", ...]
    const cells = [];
    for(let i = 0; i < rows.length; i++) {
        const row = rows[i];
        for(let j = 0; j < columns.length; j++) {
            const col = columns[j];
            cells.push(col + row);
            // NOTE: The cells array will start from the top left (a8) and end on the bottom right (h1);
        }
    }
    
    // Create Cell objects for each cell and piece
    // Create a board of Cell objects
    const board = [];
    for(let i = 0; i < cells.length; i++) {
        // 'cells' and 'pieces' have the length of 64
        const cell = cells[i];
        const piece = pieces[i];
        board.push(new Cell(cell, piece));
    }

    console.log(board);
    return board;
}

