import { getRandomInt } from "./utils";
import Draw from "./draw";

const maxColors = 5;

export default class Field {
  constructor([w, h]) {
    this.gameField = new Array(h).fill(0).map(() => new Array(w).fill(0));
    this.status = false;
    this.target = { x: null, y: null };
    this.drawer = new Draw(this);
    this.coords = new Array(w * h).fill(0).map((e, i) => [i % w, Math.floor(i / w)]);
  }

  next(count) {
    const targets = this.shuffle().slice(0, count);
    targets.forEach(([x, y]) => {
      const nouveau = getRandomInt(1, maxColors);
      const old = this.gameField[y][x];
      this.gameField[y][x] = nouveau;
      this.drawer.update({ x, y, color: { old, nouveau } });
    });

    return this;
  }

  shuffle() {
    return this.coords
      .map(e => [e, Math.random()])
      .sort(([, a], [, b]) => a - b)
      .map(([e]) => e);
  }

  tokenClick({ x, y }) {
    if (this.gameField[y][x] === 0) {
      if (this.status) {
        this.tokenMove();
      }
    } else {
      this.tokenToggleSelect({ x, y });
    }
  }

  tokenMove() {
    //
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
