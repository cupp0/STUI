export class Board {
  constructor(controller) {
    this.controller = controller;
    this.BOARD_SIZE = 8;
    this.squareSize = min(width, height) / this.BOARD_SIZE;
  }

    drawText() {
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


    drawSquares() {
        for (let rank = 0; rank < 8; rank++) {
            for (let file = 0; file < 8; file++) {
            const isLight = (rank + file) % 2 === 0;

            if (isLight) {
                fill(120, 130, 140);
            } else {
                fill(20, 30, 40);
            }

            rect(
                file * this.squareSize,
                rank * this.squareSize,
                this.squareSize,
                this.squareSize
            );
            }
        
        }
    }

    renderPieces(fen) {
        const piecePlacement = fen.split(" ")[0];
        const rows = piecePlacement.split("/");

        textAlign(CENTER, CENTER);
        textSize(this.squareSize * 0.7);

        for (let rank = 0; rank < 8; rank++) {
            let file = 0;
            for (let char of rows[rank]) {
                if (!isNaN(char)) {
                    file += parseInt(char);
                } else {
                    const x = file * this.squareSize + this.squareSize / 2;
                    const y = rank * this.squareSize + this.squareSize / 2;
                    fill(this.getColorByChar(char));
                    text(this.getUnicodePiece(char), x, y);
                    file++;
                }
            }
        }
    }

    getColorByChar(char){
        if (char === char.toLowerCase()) return 0;
        return 255;
    }

    getUnicodePiece(piece) {
        const map = {
            p: "♟", r: "♜", n: "♞", b: "♝", q: "♛", k: "♚",
            P: "♙", R: "♖", N: "♘", B: "♗", Q: "♕", K: "♔"
        };
        return map[piece];
    }
}