import Draw from "./draw";
import Utils from "../utils";

export default class Predictor {
  constructor({ predictor: { dom, predict }, tokens, maxColors }) {
    this.maxColors = maxColors;
    this.predict = predict;
    this.prediction = new Array(this.predict).fill(0);

    this.drawer = new Draw({ predictor: this, dom, tokens });
  }

  next() {
    this.prediction.forEach((e, i) => {
      const theNew = Utils.getRandomInt(1, this.maxColors);
      const theOld = this.prediction[i];
      this.prediction[i] = theNew;
      this.drawer.update({ i, color: { theOld, theNew } });
    });

    return this;
  }
}
