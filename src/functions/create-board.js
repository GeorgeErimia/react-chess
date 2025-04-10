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

export const createboard = () => {
    
}