import { Chess } from "https://cdn.jsdelivr.net/npm/chess.js@1.0.0/+esm";

export class ChessController {
  constructor() {
    this.chess = new Chess();
    this.moves = [];
  }

  playRandomGame() {
    while (!this.chess.isGameOver()) {
      const legalMoves = this.chess.moves();
      const move = legalMoves[Math.floor(Math.random() * legalMoves.length)];
      this.chess.move(move);
      this.moves.push(move);
    }
  }

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