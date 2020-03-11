import Draw from "./draw";
import Utils from "../utils";

export default class Field {
  constructor({ field: { dom, w, h }, tokens, maxColors, minSequence, gamePredictor, gameScore, step }) {
    this.gameField = new Array(h).fill(0).map(() => new Array(w).fill(0));
    this.maxColors = maxColors;
    this.minSequence = minSequence;
    this.gamePredictor = gamePredictor;
    this.gameScore = gameScore;
    this.step = step;
    this.status = false;
    this.target = { x: null, y: null, color: null };
    this.coords = new Array(w * h).fill(0).map((e, i) => [i % w, Math.floor(i / w)]);

    this.drawer = new Draw({ field: this, dom, tokens });
  }

  next({ count, init = false }) {
    const targets = Utils.shuffleArray(this.getEmptyTokens()).slice(0, count);
    targets.forEach(([x, y], i) => {
      const theNew = init ? Utils.getRandomInt(1, this.maxColors) : this.gamePredictor.prediction[i];
      const theOld = this.getToken({ x, y });
      this.setToken({ x, y, value: theNew, oldColor: theOld });
    });
    this.gamePredictor.next();

    return this;
  }

  getEmptyTokens() {
    return this.coords.filter(([x, y]) => this.getToken({ x, y }) === 0);
  }

  tokenClick({ x, y }) {
    if (this.getToken({ x, y }) === 0) {
      if (this.status) {
        this.tokenMove({ x, y });
      }
    } else {
      this.tokenToggleSelect({ x, y, color: this.getToken({ x, y }) });
    }
  }

  tokenMove({ x, y }) {
    this.setToken({ x, y, value: this.target.color, oldColor: 0 });
    this.clearToken({ x: this.target.x, y: this.target.y, oldColor: this.target.color });
    this.tokenToggleSelect({ x: this.target.x, y: this.target.y });

    const h = this.checkHorizontal(y);
    const v = this.checkVertical(x);

    if (h.size === 0 && v.size === 0) {
      this.next({ count: this.step });
    } else {
      this.clearSequences({ x, y, h, v });
      this.gameScore.update({ h, v });
    }
  }

  tokenToggleSelect({ x, y, color }) {
    this.drawer.toggle({ x, y });
    if (this.status) {
      if (this.target.x === x && this.target.y === y) {
        this.status = false;
        this.clearTarget();
      } else {
        this.drawer.toggle({ x: this.target.x, y: this.target.y });
        this.setTarget({ x, y, color });
      }
    } else {
      this.status = true;
      this.setTarget({ x, y, color });
    }
  }

  setTarget({ x, y, color }) {
    this.target.x = x;
    this.target.y = y;
    this.target.color = color;

    return this;
  }

  clearTarget() {
    this.setTarget({ x: null, y: null, color: null });
  }

  getToken({ x, y }) {
    return this.gameField[y][x];
  }

  setToken({ x, y, value, oldColor }) {
    this.gameField[y][x] = value;
    this.drawer.update({ x, y, color: { theOld: oldColor, theNew: value } });
  }

  clearToken({ x, y, oldColor }) {
    this.gameField[y][x] = 0;
    this.drawer.update({ x, y, color: { theOld: oldColor, theNew: 0 } });
  }

  checkHorizontal(row) {
    return this.getSequences(this.gameField[row]);
  }

  checkVertical(col) {
    return this.getSequences(this.gameField.map(row => row[col]));
  }

  getSequences(pool) {
    const sequence = [];
    const sequences = new Map();

    pool.reduce((p, c, i, a) => {
      if (p > 0 && c === p) {
        if (!sequence.length) {
          sequence.push(i - 1);
        }
        sequence.push(i);

        if (i === a.length - 1 && sequence.length >= this.minSequence) {
          sequences.set(p, [...sequence]);
        }
      } else if (sequence.length < this.minSequence) {
        sequence.length = 0;
      } else if (sequence.length >= this.minSequence) {
        sequences.set(p, [...sequence]);
        sequence.length = 0;
      }

      return c;
    }, 0);

    return sequences;
  }

  clearSequences({ x, y, h, v }) {
    h.forEach((value, key) => {
      value.forEach(e => this.clearToken({ x: e, y, oldColor: key }));
    });
    v.forEach((value, key) => {
      value.forEach(e => this.clearToken({ x, y: e, oldColor: key }));
    });
  }

  get width() {
    return this.gameField[0].length;
  }

  get height() {
    return this.gameField.length;
  }
}
