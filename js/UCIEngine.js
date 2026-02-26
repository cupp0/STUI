export class UCIEngine {
  constructor() {
    this.engine = new Worker(
      "/../stockfish/stockfish-18-single.js"
    );

    this.isReady = false;

    this.engine.onmessage = (event) => {
      const line = event.data;

      console.log("ENGINE:", line);

      if (line === "uciok") {
        this.engine.postMessage("isready");
      }

      if (line === "readyok") {
        this.isReady = true;
      }

      if (line.startsWith("bestmove")) {
        const move = line.split(" ")[1];
        console.log("Best Move:", move);
      }
    };

    this.engine.postMessage("uci");
  }

  evaluatePosition(fen) {
    if (!this.isReady) {
      console.log("Engine not ready yet.");
      return;
    }

    this.engine.postMessage("position fen " + fen);
    this.engine.postMessage("go depth 12");
  }
}