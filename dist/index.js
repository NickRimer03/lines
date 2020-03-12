/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_field_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/field/core */ \"./src/field/core.js\");\n/* harmony import */ var _src_predictor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/predictor/core */ \"./src/predictor/core.js\");\n/* harmony import */ var _src_score_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/score/core */ \"./src/score/core.js\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/style.scss */ \"./style/style.scss\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/settings */ \"./src/settings.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst { field, tokens, predictor, maxColors, start, minSequence, score } = _src_settings__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\r\nconst { predict: step } = predictor;\r\n\r\nconst scoreSett = { score, minSequence };\r\nconst gameScore = new _src_score_core__WEBPACK_IMPORTED_MODULE_2__[\"default\"](scoreSett);\r\n\r\nconst predictorSett = { predictor, tokens, maxColors };\r\nconst gamePredictor = new _src_predictor_core__WEBPACK_IMPORTED_MODULE_1__[\"default\"](predictorSett);\r\n\r\nconst fieldSett = { field, tokens, maxColors, minSequence, gamePredictor, gameScore, step };\r\nconst gameField = new _src_field_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fieldSett);\r\n\r\ngameScore.drawer.draw();\r\ngameField.drawer.draw();\r\ngamePredictor.drawer.draw();\r\n\r\ngameField.next({ count: start, init: true });\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/astar.js":
/*!**********************!*\
  !*** ./src/astar.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Astar; });\nclass Astar {\r\n  constructor(params = {}) {\r\n    const { field = [[]], rules, points = {}, cost, orthogonal = false } = params;\r\n\r\n    this.setEnums(cost);\r\n\r\n    this.steps = 0;\r\n    this.points = points;\r\n    this.field = this.prepareField({ field, rules });\r\n    this.openedList = [this.points.start];\r\n    this.closedList = [];\r\n    this.root = [];\r\n    this.orthogonalMode = orthogonal;\r\n    this.running = false;\r\n  }\r\n\r\n  get width() {\r\n    return this.field[0].length;\r\n  }\r\n\r\n  get height() {\r\n    return this.field.length;\r\n  }\r\n\r\n  Manhattan({ x: x1, y: y1 }, { x: x2, y: y2 }) {\r\n    return (Math.abs(x2 - x1) + Math.abs(y2 - y1)) * 10;\r\n  }\r\n\r\n  getF({ g, p }) {\r\n    return g + this.Manhattan(p, this.points.end);\r\n  }\r\n\r\n  listHasPoint(list, { x, y }) {\r\n    return list.filter(({ x: lx, y: ly }) => lx === x && ly === y).length > 0;\r\n  }\r\n\r\n  getRoot({ x, y }) {\r\n    this.root.push({ x, y });\r\n\r\n    let parent;\r\n    let px = x;\r\n    let py = y;\r\n\r\n    do {\r\n      parent = this.closedList.find(({ x, y }) => x === px && y === py).parent;\r\n      if (parent) {\r\n        this.root.push(parent);\r\n        px = parent.x;\r\n        py = parent.y;\r\n      }\r\n    } while (parent);\r\n\r\n    this.root.reverse();\r\n  }\r\n\r\n  checkAdjacent({ x, y, g }) {\r\n    const adjacent = this.orthogonalMode ? this.adjacentEnumOrthogonal : this.adjacentEnum;\r\n    Object.values(adjacent).forEach(({ x: dx, y: dy }, i) => {\r\n      const nx = x + dx;\r\n      const ny = y + dy;\r\n      const thisPointG = this.orthogonalMode ? this.energy.easy : i % 2 ? this.energy.hard : this.energy.easy;\r\n\r\n      if (nx < 0 || ny < 0 || nx === this.width || ny === this.height) {\r\n        return;\r\n      }\r\n\r\n      if (\r\n        this.field[ny][nx] !== this.fieldEnum.wall &&\r\n        !this.listHasPoint(this.openedList, { x: nx, y: ny }) &&\r\n        !this.listHasPoint(this.closedList, { x: nx, y: ny })\r\n      ) {\r\n        this.openedList.push({\r\n          x: nx,\r\n          y: ny,\r\n          f: this.getF({ g: g + thisPointG, p: { x: nx, y: ny } }),\r\n          g: g + thisPointG,\r\n          m: this.Manhattan({ x: nx, y: ny }, this.points.end),\r\n          parent: { x, y }\r\n        });\r\n      } else if (this.listHasPoint(this.openedList, { x: nx, y: ny })) {\r\n        const currentPoint = this.openedList.find(({ x, y }) => x === nx && y === ny);\r\n        if (g + thisPointG < currentPoint.g) {\r\n          currentPoint.g = g + thisPointG;\r\n          currentPoint.f = currentPoint.g + currentPoint.m;\r\n          currentPoint.parent = { x, y };\r\n        }\r\n      }\r\n\r\n      if (nx === this.points.end.x && ny === this.points.end.y) {\r\n        this.closedList.push(\r\n          this.openedList.splice(this.openedList.findIndex(({ x, y }) => x === nx && y === ny), 1)[0]\r\n        );\r\n        this.getRoot({ x: nx, y: ny });\r\n      }\r\n    });\r\n  }\r\n\r\n  go() {\r\n    this.steps += 1;\r\n\r\n    const nextPointIdx = this.openedList.findIndex(({ f }) => f === Math.min(...this.openedList.map(({ f }) => f)));\r\n    if (nextPointIdx === -1) {\r\n      if (this.running) {\r\n        return { route: [], steps: this.steps, message: \"-- no route\" };\r\n      }\r\n\r\n      this.running = true;\r\n      this.closedList.push(this.openedList.pop());\r\n      this.checkAdjacent({ ...this.closedList[this.closedList.length - 1], g: 0 });\r\n      return this.go();\r\n    }\r\n\r\n    this.closedList.push(this.openedList.splice(nextPointIdx, 1)[0]);\r\n    this.checkAdjacent(this.closedList[this.closedList.length - 1]);\r\n\r\n    if (this.root.length === 0) {\r\n      return this.go();\r\n    } else {\r\n      return { root: this.root, steps: this.steps, message: \"-- ok\" };\r\n    }\r\n  }\r\n\r\n  prepareField({ field, rules }) {\r\n    const { wall, empty } = rules;\r\n\r\n    return field.map((row, y) =>\r\n      row.map((e, x) => {\r\n        if (x === this.points.start.x && y === this.points.start.y) {\r\n          return this.fieldEnum.start;\r\n        } else if (x === this.points.end.x && y === this.points.end.y) {\r\n          return this.fieldEnum.end;\r\n        } else if (eval(e + wall)) {\r\n          return this.fieldEnum.wall;\r\n        } else if (eval(e + empty)) {\r\n          return this.fieldEnum.good;\r\n        }\r\n      })\r\n    );\r\n  }\r\n\r\n  setEnums({ easy, hard }) {\r\n    this.adjacentEnum = {\r\n      top: { x: 0, y: -1 },\r\n      topRight: { x: 1, y: -1 },\r\n      right: { x: 1, y: 0 },\r\n      bottomRight: { x: 1, y: 1 },\r\n      bottom: { x: 0, y: 1 },\r\n      bottomLeft: { x: -1, y: 1 },\r\n      left: { x: -1, y: 0 },\r\n      topLeft: { x: -1, y: -1 }\r\n    };\r\n    Object.freeze(this.adjacentEnum);\r\n\r\n    this.adjacentEnumOrthogonal = {\r\n      top: { x: 0, y: -1 },\r\n      right: { x: 1, y: 0 },\r\n      bottom: { x: 0, y: 1 },\r\n      left: { x: -1, y: 0 }\r\n    };\r\n    Object.freeze(this.adjacentEnumOrthogonal);\r\n\r\n    this.energy = {\r\n      easy,\r\n      hard\r\n    };\r\n    Object.freeze(this.energy);\r\n\r\n    this.fieldEnum = {\r\n      start: 3,\r\n      end: 8,\r\n      wall: 0,\r\n      good: 1\r\n    };\r\n    Object.freeze(this.fieldEnum);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/astar.js?");

/***/ }),

/***/ "./src/field/core.js":
/*!***************************!*\
  !*** ./src/field/core.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Field; });\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ \"./src/field/draw.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var _astar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../astar */ \"./src/astar.js\");\n\n\n\n\nclass Field {\n  constructor({ field: { dom, w, h }, tokens, maxColors, minSequence, gamePredictor, gameScore, step }) {\n    this.gameField = new Array(h).fill(0).map(() => new Array(w).fill(0));\n    this.maxColors = maxColors;\n    this.minSequence = minSequence;\n    this.gamePredictor = gamePredictor;\n    this.gameScore = gameScore;\n    this.step = step;\n    this.status = false;\n    this.target = { x: null, y: null, color: null };\n    this.coords = new Array(w * h).fill(0).map((e, i) => [i % w, Math.floor(i / w)]);\n\n    this.drawer = new _draw__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ field: this, dom, tokens });\n\n    debugger;\n    const params = {\n      field: this.gameField,\n      rules: {\n        wall: \">0\",\n        empty: \"===0\"\n      },\n      points: { start: { x: 1, y: 1 }, end: { x: 6, y: 2 } },\n      cost: { easy: 10, hard: 14 },\n      orthogonal: false\n    };\n    this.aStar = new _astar__WEBPACK_IMPORTED_MODULE_2__[\"default\"](params);\n  }\n\n  next({ count, init = false }) {\n    const targets = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shuffleArray(this.getEmptyTokens()).slice(0, count);\n    targets.forEach(([x, y], i) => {\n      const theNew = init ? _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getRandomInt(1, this.maxColors) : this.gamePredictor.prediction[i];\n      const theOld = this.getToken({ x, y });\n      this.setToken({ x, y, value: theNew, oldColor: theOld });\n    });\n    this.gamePredictor.next();\n\n    return this;\n  }\n\n  getEmptyTokens() {\n    return this.coords.filter(([x, y]) => this.getToken({ x, y }) === 0);\n  }\n\n  tokenClick({ x, y }) {\n    debugger;\n    if (this.getToken({ x, y }) === 0) {\n      if (this.status) {\n        this.tokenMove({ x, y });\n      }\n    } else {\n      this.tokenToggleSelect({ x, y, color: this.getToken({ x, y }) });\n    }\n  }\n\n  tokenMove({ x, y }) {\n    this.setToken({ x, y, value: this.target.color, oldColor: 0 });\n    this.clearToken({ x: this.target.x, y: this.target.y, oldColor: this.target.color });\n    this.tokenToggleSelect({ x: this.target.x, y: this.target.y });\n\n    const h = this.checkHorizontal(y);\n    const v = this.checkVertical(x);\n\n    if (h.size === 0 && v.size === 0) {\n      this.next({ count: this.step });\n    } else {\n      this.clearSequences({ x, y, h, v });\n      this.gameScore.update({ h, v });\n    }\n  }\n\n  tokenToggleSelect({ x, y, color }) {\n    this.drawer.toggle({ x, y });\n    if (this.status) {\n      if (this.target.x === x && this.target.y === y) {\n        this.status = false;\n        this.clearTarget();\n      } else {\n        this.drawer.toggle({ x: this.target.x, y: this.target.y });\n        this.setTarget({ x, y, color });\n      }\n    } else {\n      this.status = true;\n      this.setTarget({ x, y, color });\n    }\n  }\n\n  setTarget({ x, y, color }) {\n    this.target.x = x;\n    this.target.y = y;\n    this.target.color = color;\n\n    return this;\n  }\n\n  clearTarget() {\n    this.setTarget({ x: null, y: null, color: null });\n  }\n\n  getToken({ x, y }) {\n    return this.gameField[y][x];\n  }\n\n  setToken({ x, y, value, oldColor }) {\n    this.gameField[y][x] = value;\n    this.drawer.update({ x, y, color: { theOld: oldColor, theNew: value } });\n  }\n\n  clearToken({ x, y, oldColor }) {\n    this.gameField[y][x] = 0;\n    this.drawer.update({ x, y, color: { theOld: oldColor, theNew: 0 } });\n  }\n\n  checkHorizontal(row) {\n    return this.getSequences(this.gameField[row]);\n  }\n\n  checkVertical(col) {\n    return this.getSequences(this.gameField.map(row => row[col]));\n  }\n\n  getSequences(pool) {\n    const sequence = [];\n    const sequences = new Map();\n\n    pool.reduce((p, c, i, a) => {\n      if (p > 0 && c === p) {\n        if (!sequence.length) {\n          sequence.push(i - 1);\n        }\n        sequence.push(i);\n\n        if (i === a.length - 1 && sequence.length >= this.minSequence) {\n          sequences.set(p, [...sequence]);\n        }\n      } else if (sequence.length < this.minSequence) {\n        sequence.length = 0;\n      } else if (sequence.length >= this.minSequence) {\n        sequences.set(p, [...sequence]);\n        sequence.length = 0;\n      }\n\n      return c;\n    }, 0);\n\n    return sequences;\n  }\n\n  clearSequences({ x, y, h, v }) {\n    h.forEach((value, key) => {\n      value.forEach(e => this.clearToken({ x: e, y, oldColor: key }));\n    });\n    v.forEach((value, key) => {\n      value.forEach(e => this.clearToken({ x, y: e, oldColor: key }));\n    });\n  }\n\n  get width() {\n    return this.gameField[0].length;\n  }\n\n  get height() {\n    return this.gameField.length;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/field/core.js?");

/***/ }),

/***/ "./src/field/draw.js":
/*!***************************!*\
  !*** ./src/field/draw.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Draw; });\nclass Draw {\n  constructor({ field, dom, tokens: { w, h } }) {\n    this.field = field;\n    this.dom = document.getElementById(dom);\n    this.dom.style.width = `${w * field.width}px`;\n    this.dom.style.height = `${h * field.height}px`;\n    this.tokens = new Array(field.height).fill(null).map(() => new Array(field.width).fill(null));\n  }\n\n  drawToken({ color, w, h }) {\n    const token = document.createElement(\"div\");\n    const bg = document.createElement(\"div\");\n    token.classList.add(\"token\");\n    if (w === this.field.width - 1) {\n      token.classList.add(\"_right\");\n    }\n    if (h === this.field.height - 1) {\n      token.classList.add(\"_bottom\");\n    }\n\n    bg.classList.add(\"bg\");\n    bg.classList.add(`_${color}`);\n    token.appendChild(bg);\n\n    token.onclick = () => {\n      this.field.tokenClick({ x: w, y: h, color });\n    };\n\n    return token;\n  }\n\n  draw() {\n    for (let h = 0; h < this.field.height; h++) {\n      for (let w = 0; w < this.field.width; w++) {\n        const token = this.drawToken({ color: this.field.gameField[h][w], w, h });\n        this.tokens[h][w] = token;\n        this.dom.appendChild(token);\n      }\n    }\n  }\n\n  update({ x, y, color: { theOld, theNew } }) {\n    const bg = this.tokens[y][x].getElementsByClassName(\"bg\")[0];\n    bg.classList.remove(`_${theOld}`);\n    bg.classList.add(`_${theNew}`);\n  }\n\n  toggle({ x, y }) {\n    this.tokens[y][x].getElementsByClassName(\"bg\")[0].classList.toggle(\"selected\");\n  }\n}\n\n\n//# sourceURL=webpack:///./src/field/draw.js?");

/***/ }),

/***/ "./src/predictor/core.js":
/*!*******************************!*\
  !*** ./src/predictor/core.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Predictor; });\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ \"./src/predictor/draw.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\n\nclass Predictor {\n  constructor({ predictor: { dom, predict }, tokens, maxColors }) {\n    this.maxColors = maxColors;\n    this.predict = predict;\n    this.prediction = new Array(this.predict).fill(0);\n\n    this.drawer = new _draw__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ predictor: this, dom, tokens });\n  }\n\n  next() {\n    this.prediction.forEach((e, i) => {\n      const theNew = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getRandomInt(1, this.maxColors);\n      const theOld = this.prediction[i];\n      this.prediction[i] = theNew;\n      this.drawer.update({ i, color: { theOld, theNew } });\n    });\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/predictor/core.js?");

/***/ }),

/***/ "./src/predictor/draw.js":
/*!*******************************!*\
  !*** ./src/predictor/draw.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Draw; });\nclass Draw {\r\n  constructor({ predictor, dom, tokens: { w, h } }) {\r\n    this.predictor = predictor;\r\n    this.dom = document.getElementById(dom);\r\n    this.dom.style.width = `${w * predictor.width}px`;\r\n    this.dom.style.height = `${h * predictor.height}px`;\r\n    this.tokens = new Array(this.predictor.predict).fill(null);\r\n  }\r\n\r\n  drawToken({ color, i }) {\r\n    const token = document.createElement(\"div\");\r\n    const bg = document.createElement(\"div\");\r\n    token.classList.add(\"token\");\r\n    token.classList.add(\"_bottom\");\r\n\r\n    bg.classList.add(\"bg\");\r\n    bg.classList.add(\"predicted\");\r\n    bg.classList.add(`_${color}`);\r\n    token.appendChild(bg);\r\n\r\n    if (i === this.predictor.predict - 1) {\r\n      token.classList.add(\"_right\");\r\n    }\r\n\r\n    return token;\r\n  }\r\n\r\n  draw() {\r\n    for (let i = 0; i < this.predictor.predict; i++) {\r\n      const token = this.drawToken({ color: this.predictor.prediction[i], i });\r\n      this.tokens[i] = token;\r\n      this.dom.appendChild(token);\r\n    }\r\n  }\r\n\r\n  update({ i, color: { theOld, theNew } }) {\r\n    const bg = this.tokens[i].getElementsByClassName(\"bg\")[0];\r\n    bg.classList.remove(`_${theOld}`);\r\n    bg.classList.add(`_${theNew}`);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/predictor/draw.js?");

/***/ }),

/***/ "./src/score/core.js":
/*!***************************!*\
  !*** ./src/score/core.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Score; });\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ \"./src/score/draw.js\");\n\n\nclass Score {\n  constructor({ score: { basic, dom }, minSequence }) {\n    this.score = 0;\n    this.basic = basic;\n    this.minSequence = minSequence;\n\n    this.drawer = new _draw__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ dom });\n  }\n\n  update({ h, v }) {\n    this.addScore([].concat(this.calculate(h), this.calculate(v)));\n  }\n\n  calculate(set) {\n    return Array.from(set.values()).map(e => this.basic * Math.pow(2, e.length - this.minSequence));\n  }\n\n  addScore(values) {\n    this.score += values.reduce((p, c) => p + c, 0);\n    this.drawer.update(this.score);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/score/core.js?");

/***/ }),

/***/ "./src/score/draw.js":
/*!***************************!*\
  !*** ./src/score/draw.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Draw; });\nclass Draw {\n  constructor({ dom }) {\n    this.dom = document.getElementById(dom);\n  }\n\n  draw() {\n    this.dom.innerText = \"Score: 0\";\n  }\n\n  update(value) {\n    this.dom.innerText = `Score: ${value}`;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/score/draw.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst settings = {\r\n  field: { dom: \"field\", w: 9, h: 9 },\r\n  tokens: { w: 32, h: 32 },\r\n  maxColors: 7,\r\n  start: 10,\r\n  predictor: { dom: \"predictor\", predict: 3 },\r\n  minSequence: 3,\r\n  score: { dom: \"score\", basic: 15 }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (settings);\r\n\n\n//# sourceURL=webpack:///./src/settings.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Utils {\r\n  static getRandomInt(min = 0, max = 1) {\r\n    return Math.floor(Math.random() * (max - min + 1)) + min;\r\n  }\r\n\r\n  static shuffleArray(array) {\r\n    return array\r\n      .map(e => [e, Math.random()])\r\n      .sort(([, a], [, b]) => a - b)\r\n      .map(([e]) => e);\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Utils);\r\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./style/style.scss?");

/***/ })

/******/ });