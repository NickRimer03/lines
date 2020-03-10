export default class Draw {
  constructor({ dom }) {
    this.dom = document.getElementById(dom);
  }

  draw() {
    this.dom.innerText = "Score: 0";
  }

  update(value) {
    this.dom.innerText = `Score: ${value}`;
  }
}
