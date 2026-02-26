export class Renderer {
  constructor(controller) {
    this.controller = controller;
  }

  draw() {
    background(240);

    const moves = this.controller.getMoves();

    textSize(18);
    textFont("monospace");

    let y = 30;

    for (let i = 0; i < moves.length; i++) {
      text(`${i + 1}. ${moves[i]}`, 30, y);
      y += 24;
    }
  }
}