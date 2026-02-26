import { ChessController } from "./chessController.js";
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
};

window.windowResized = function () {
  resizeCanvas(window.innerWidth, window.innerHeight);
};