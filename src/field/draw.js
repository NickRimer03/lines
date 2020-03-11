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
    const bg = document.createElement("div");
    token.classList.add("token");
    if (w === this.field.width - 1) {
      token.classList.add("_right");
    }
    if (h === this.field.height - 1) {
      token.classList.add("_bottom");
    }

    bg.classList.add("bg");
    bg.classList.add(`_${color}`);
    token.appendChild(bg);

    token.onclick = () => {
      this.field.tokenClick({ x: w, y: h, color });
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
    const bg = this.tokens[y][x].getElementsByClassName("bg")[0];
    bg.classList.remove(`_${theOld}`);
    bg.classList.add(`_${theNew}`);
  }

  toggle({ x, y }) {
    this.tokens[y][x].getElementsByClassName("bg")[0].classList.toggle("selected");
  }
}
