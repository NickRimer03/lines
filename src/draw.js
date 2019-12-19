const tokenParams = { width: 32, height: 32 };

const gameFieldEl = document.getElementById("field");

export default class Draw {
  constructor(field) {
    this.field = field;
    gameFieldEl.style.width = `${tokenParams.width * field.width}px`;
    gameFieldEl.style.height = `${tokenParams.height * field.height}px`;
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
      this.field.tokenToggleSelect(token);
    };

    return token;
  }

  draw() {
    for (let h = 0; h < this.field.height; h++) {
      for (let w = 0; w < this.field.width; w++) {
        gameFieldEl.appendChild(this.drawToken({ color: this.field.gameField[h][w], w, h }));
      }
    }
  }
}
