import { Chess } from "https://cdn.jsdelivr.net/npm/chess.js@1.0.0/+esm";

export class ChessController {
  constructor() {
    this.chess = new Chess();
    this.moves = [];
  }

<<<<<<< HEAD
=======
  playRandomGame() {
    while (!this.chess.isGameOver()) {
      const legalMoves = this.chess.moves();
      const move = legalMoves[Math.floor(Math.random() * legalMoves.length)];
      this.chess.move(move);
      this.moves.push(move);
    }
  }

>>>>>>> ef8a5a91835a17bf5e5495322f78d55198f771c9
  getMoves() {
    return this.moves;
  }

  getFen() {
    return this.chess.fen();
  }

  reset() {
    this.chess.reset();
    this.moves = [];
  }
}