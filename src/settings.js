const settings = {
  field: { dom: "field", w: 9, h: 9 },
  tokens: { w: 32, h: 32 },
  maxColors: 7,
  start: 10,
  predictor: { dom: "predictor", predict: 3 },
  minSequence: 4,
  score: { dom: "score", basic: 20 },
  rules: {
    wall: ">0",
    empty: "===0"
  }
};

export default settings;
