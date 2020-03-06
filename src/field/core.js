import Draw from "./draw";
import Utils from "../utils";

export default class Field {
  constructor({ field: { dom, w, h }, tokens, maxColors, gamePredictor }) {
    this.gameField = new Array(h).fill(0).map(() => new Array(w).fill(0));
    this.maxColors = maxColors;
    this.gamePredictor = gamePredictor;
    this.status = false;
    this.target = { x: null, y: null };
    this.coords = new Array(w * h).fill(0).map((e, i) => [i % w, Math.floor(i / w)]);

    this.drawer = new Draw({ field: this, dom, tokens });
  }

  next({ count, init = false }) {
    const targets = Utils.shuffleArray(this.getEmptyTokens()).slice(0, count);
    targets.forEach(([x, y], i) => {
      const theNew = init ? Utils.getRandomInt(1, this.maxColors) : this.gamePredictor.prediction[i];
      const theOld = this.gameField[y][x];
      this.gameField[y][x] = theNew;
      this.drawer.update({ x, y, color: { theOld, theNew } });
    });
    this.gamePredictor.next();

    return this;
  }

  getEmptyTokens() {
    return this.coords.filter(([x, y]) => this.gameField[y][x] === 0);
  }

  tokenClick({ x, y }) {
    if (this.gameField[y][x] === 0) {
      if (this.status) {
        this.tokenMove({ x, y });
      }
    } else {
      this.tokenToggleSelect({ x, y });
    }
  }

  tokenMove({ x, y }) {
    console.log(`move from ${this.target.x} ${this.target.y} to ${x} ${y}`);
  }

  tokenToggleSelect({ x, y }) {
    this.drawer.toggle({ x, y });
    if (this.status) {
      if (this.target.x === x && this.target.y === y) {
        this.status = false;
        this.target.x = null;
        this.target.y = null;
      } else {
        this.drawer.toggle({ x: this.target.x, y: this.target.y });
        this.target.x = x;
        this.target.y = y;
      }
    } else {
      this.status = true;
      this.target.x = x;
      this.target.y = y;
    }
  }

  get width() {
    return this.gameField[0].length;
  }

  get height() {
    return this.gameField.length;
  }
}
