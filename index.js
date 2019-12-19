import Field from "./src/field";
import Draw from "./src/draw";
import "./style/style.scss";

const field = new Field([10, 10]);

console.log(field.gameField);

new Draw(field).draw();
