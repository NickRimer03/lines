import Field from "./src/field";
import "./style/style.scss";

const field = new Field([10, 10]);

field.drawer.draw();
field.next(10);
