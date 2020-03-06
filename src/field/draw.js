export default class Draw {
  constructor({ field, dom, tokens: { w, h } }) {
    this.field = field;
    this.dom = document.getElementById(dom);
    this.dom.style.width = `${w * field.width}px`;
    this.dom.style.height = `${h * field.height}px`;
    this.tokens = new Array(field.height).fill(null).map(() => new Array(field.width).fill(null));
  }

  drawToken({ color, w, h }) {
    const token = document.createElement("div");
    token.classList.add("token");
    token.classList.add(`_${color}`);
    if (w === this.field.width - 1) {
      token.classList.add("_right");
    }
    if (h === this.field.height - 1) {
      token.classList.add("_bottom");
    }
    token.textContent = color;

    token.onclick = () => {
      this.field.tokenClick({ x: w, y: h });
    };

    return token;
  }

  draw() {
    for (let h = 0; h < this.field.height; h++) {
      for (let w = 0; w < this.field.width; w++) {
        const token = this.drawToken({ color: this.field.gameField[h][w], w, h });
        this.tokens[h][w] = token;
        this.dom.appendChild(token);
      }
    }
  }

  update({ x, y, color: { theOld, theNew } }) {
    const token = this.tokens[y][x];
    token.classList.remove(`_${theOld}`);
    token.classList.add(`_${theNew}`);
    token.textContent = theNew;
  }

  toggle({ x, y }) {
    this.tokens[y][x].classList.toggle("selected");
  }
}
