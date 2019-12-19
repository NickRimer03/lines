import { getRandomInt } from "./utils";

const maxColors = 5;

export default class Field {
  constructor([w, h]) {
    this.gameField = new Array(h).fill(0).map(() => new Array(w).fill(0));
    this.selected = {
      status: false,
      target: null
    };
    this.gameField[0][9] = 1;
  }

  /*next() {
    this.gameField = this.gameField.map(col => col.map(e => (e === 0 ? getRandomInt(1, maxColors) : e)));

    return this;
  }*/

  tokenToggleSelect(token) {
    token.classList.toggle("selected");
    if (this.selected.status) {
      if (this.selected.target === token) {
        this.selected.status = false;
        this.selected.target = null;
      } else {
        this.selected.target.classList.toggle("selected");
        this.selected.target = token;
      }
    } else {
      this.selected.status = true;
      this.selected.target = token;
    }
  }

  get width() {
    return this.gameField[0].length;
  }

  get height() {
    return this.gameField.length;
  }
}
