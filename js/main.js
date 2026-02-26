import { ChessController } from "./chessController.js";
import { Board } from "./renderer.js";
import { UCIEngine } from "./UCIEngine.js";

let controller;
let board;
let engine;

window.setup = function () {
  createCanvas(window.innerWidth, window.innerHeight);
  controller = new ChessController();
  board = new Board(controller);
  engine = new UCIEngine();
};

window.draw = function () {
  board.drawSquares();
  board.renderPieces(controller.getFen());
};

window.windowResized = function () {
  resizeCanvas(window.innerWidth, window.innerHeight);
};