class Utils {
  static getRandomInt(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static shuffleArray(array) {
    return array
      .map(e => [e, Math.random()])
      .sort(([, a], [, b]) => a - b)
      .map(([e]) => e);
  }
}

export default Utils;
