import Draw from "./draw";

export default class Score {
  constructor({ score: { basic, dom }, minSequence }) {
    this.score = 0;
    this.basic = basic;
    this.minSequence = minSequence;

    this.drawer = new Draw({ dom });
  }

  update({ h, v }) {
    this.addScore([].concat(this.calculate(h), this.calculate(v)));
  }

  calculate(set) {
    return Array.from(set.values()).map(e => this.basic * Math.pow(2, e.length - this.minSequence));
  }

  addScore(values) {
    this.score += values.reduce((p, c) => p + c, 0);
    this.drawer.update(this.score);
  }
}
