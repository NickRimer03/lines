import Field from "./src/field/core";
import Predictor from "./src/predictor/core";
import "./style/style.scss";
import settings from "./src/settings";

const { field, tokens, predictor, maxColors, start } = settings;
const { predict: step } = predictor;

const gamePredictor = new Predictor({ predictor, tokens, maxColors });
const gameField = new Field({ field, tokens, maxColors, gamePredictor });

gameField.drawer.draw();
gamePredictor.drawer.draw();

gameField.next({ count: start, init: true });

const btnNext = document.getElementById("btnNext");
btnNext.onclick = gameField.next.bind(gameField, { count: step });
