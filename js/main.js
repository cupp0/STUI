import { ChessController } from "./chessController.js";
<<<<<<< HEAD
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
=======
import { Renderer } from "./renderer.js";

let controller;
let renderer;

window.setup = function () {
  createCanvas(window.innerWidth, window.innerHeight);

  controller = new ChessController();
  controller.playRandomGame();

  renderer = new Renderer(controller);
};

window.draw = function () {
  renderer.draw();
>>>>>>> ef8a5a91835a17bf5e5495322f78d55198f771c9
};

window.windowResized = function () {
  resizeCanvas(window.innerWidth, window.innerHeight);
};