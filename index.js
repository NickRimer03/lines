import Field from "./src/field/core";
import Predictor from "./src/predictor/core";
import Score from "./src/score/core";
import "./style/style.scss";
import settings from "./src/settings";

const { field, tokens, predictor, maxColors, start, minSequence, score, rules } = settings;
const { predict: step } = predictor;

const scoreSett = { score, minSequence };
const gameScore = new Score(scoreSett);

const predictorSett = { predictor, tokens, maxColors };
const gamePredictor = new Predictor(predictorSett);

const fieldSett = { field, tokens, maxColors, minSequence, gamePredictor, gameScore, step, rules };
const gameField = new Field(fieldSett);

gameScore.drawer.draw();
gameField.drawer.draw();
gamePredictor.drawer.draw();

gameField.next({ count: start, init: true });
