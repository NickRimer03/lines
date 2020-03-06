export default class Draw {
  constructor({ predictor, dom, tokens: { w, h } }) {
    this.predictor = predictor;
    this.dom = document.getElementById(dom);
    this.dom.style.width = `${w * predictor.width}px`;
    this.dom.style.height = `${h * predictor.height}px`;
    this.tokens = new Array(this.predictor.predict).fill(null);
  }

  drawToken({ color, i }) {
    const token = document.createElement("div");
    token.classList.add("token");
    token.classList.add(`_${color}`);
    token.classList.add("_bottom");
    token.textContent = color;

    if (i === this.predictor.predict - 1) {
      token.classList.add("_right");
    }

    return token;
  }

  draw() {
    for (let i = 0; i < this.predictor.predict; i++) {
      const token = this.drawToken({ color: this.predictor.prediction[i], i });
      this.tokens[i] = token;
      this.dom.appendChild(token);
    }
  }

  update({ i, color: { theOld, theNew } }) {
    const token = this.tokens[i];
    token.classList.remove(`_${theOld}`);
    token.classList.add(`_${theNew}`);
    token.textContent = theNew;
  }
}
