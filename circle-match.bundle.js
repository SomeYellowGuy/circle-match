/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../public/Noto Sans.ttf */ \"./public/Noto Sans.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../public/Segoe UI.ttf */ \"./public/Segoe UI.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../public/Segoe UI Semibold.ttf */ \"./public/Segoe UI Semibold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'Noto Sans';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"ttf\\\");\\n}\\n\\n@font-face {\\n    font-family: 'Segoe UI';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"ttf\\\");\\n}\\n\\n@font-face {\\n    font-family: 'Segoe UI Semibold';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"ttf\\\");\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://circle-match/./src/styles.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://circle-match/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://circle-match/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://circle-match/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/files/constants.js":
/*!********************************!*\
  !*** ./src/files/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CANNOT_FALL\": () => (/* binding */ CANNOT_FALL),\n/* harmony export */   \"CANNOT_MATCH\": () => (/* binding */ CANNOT_MATCH),\n/* harmony export */   \"HEIGHT\": () => (/* binding */ HEIGHT),\n/* harmony export */   \"INITIAL_GOALS\": () => (/* binding */ INITIAL_GOALS),\n/* harmony export */   \"INITIAL_SAVE\": () => (/* binding */ INITIAL_SAVE),\n/* harmony export */   \"LEVELS_COUNT\": () => (/* binding */ LEVELS_COUNT),\n/* harmony export */   \"LS_COLOURS\": () => (/* binding */ LS_COLOURS),\n/* harmony export */   \"MAX_BOARD_LOOPS\": () => (/* binding */ MAX_BOARD_LOOPS),\n/* harmony export */   \"MAX_CIRCLE_LOOPS\": () => (/* binding */ MAX_CIRCLE_LOOPS),\n/* harmony export */   \"MESSAGES\": () => (/* binding */ MESSAGES),\n/* harmony export */   \"NOT_COLLECTED\": () => (/* binding */ NOT_COLLECTED),\n/* harmony export */   \"RGBHSV\": () => (/* binding */ RGBHSV),\n/* harmony export */   \"SWIPE_THRESHOLD\": () => (/* binding */ SWIPE_THRESHOLD),\n/* harmony export */   \"TEST_MODE\": () => (/* binding */ TEST_MODE),\n/* harmony export */   \"WIDTH\": () => (/* binding */ WIDTH),\n/* harmony export */   \"colourList\": () => (/* binding */ colourList)\n/* harmony export */ });\n// Constants\n\n/** The width of the canvas. */\nconst WIDTH = 1280;\n\n/** The height of the canvas. */\nconst HEIGHT = 720;\n\n/** The minimum distance of a swipe to count it. */\nconst SWIPE_THRESHOLD = 40;\n\n/** The maximum number of loops used in trying to generating a tile that doesn't conflict. */\nconst MAX_CIRCLE_LOOPS = 15;\n\n/** The maximum number of loops used in trying to make a board with no matches. */\nconst MAX_BOARD_LOOPS = 600000;\n\n/** The list of colours. */\nconst colourList = \"blue.green.orange.purple.red.yellow\".split(\".\")\n\n/** Play test levels, or play the standard levels. */\nconst TEST_MODE = false;\n\n/** The number of levels. */\nconst LEVELS_COUNT = 150;\n\n/** The initial list of goals. */\nconst INITIAL_GOALS = {\n    red_circle: 0,\n    blue_circle: 0,\n    yellow_circle: 0,\n    green_circle: 0,\n    orange_circle: 0,\n    purple_circle: 0,\n    rainbow_circle: 0,\n    striped_circle: 0,\n    radial_circle: 0,\n    metal_ball: 0,\n    watermelon: 0,\n    globe: 0\n}\n\nconst CANNOT_FALL = [\n    \"metalBall1\",\n    \"metalBall2\",\n    \"metalBall3\",\n    \"metalBall4\",\n    \"metalBall5\",\n    \"metalBall6\",\n    \"globeHolder\",\n    null,\n    undefined,\n    void 0\n]\n\nconst CANNOT_MATCH = [\n    \"metalBall1\",\n    \"metalBall2\",\n    \"metalBall3\",\n    \"metalBall4\",\n    \"metalBall5\",\n    \"metalBall6\",\n    \"none\",\n    null,\n    undefined,\n    void 0\n]\n\nconst INITIAL_SAVE = {\n    scores: [],\n    reachedLevel: 1\n}\n\n/** The colours to use for the level select. */\nconst LS_COLOURS = {\n    none: \"#666666\",\n    moves: \"#ff5555\",\n    button: \"#66aaff\",\n    order: \"#ff44ee\",\n    time: \"#9900ff\",\n    timemove: \"#cc11ff\",\n    globe: \"#00ffbb\"\n}\n\nconst RGBHSV = {\n    RGBtoHSV: function(color) {\n        let r,g,b,h,s,v;\n        r = color[0];\n        g = color[1];\n        b = color[2];\n        let min = Math.min( r, g, b );\n        let max = Math.max( r, g, b );\n\n\n        v = max;\n        let delta = max - min;\n        if( max != 0 )\n            s = delta / max;        // s\n        else {\n            // r = g = b = 0        // s = 0, v is undefined\n            s = 0;\n            h = -1;\n            return [h, s, undefined];\n        }\n        if( r === max )\n            h = ( g - b ) / delta;      // between yellow & magenta\n        else if( g === max )\n            h = 2 + ( b - r ) / delta;  // between cyan & yellow\n        else\n            h = 4 + ( r - g ) / delta;  // between magenta & cyan\n        h *= 60;                // degrees\n        if( h < 0 )\n            h += 360;\n        if ( isNaN(h) )\n            h = 0;\n        return [h,s,v];\n    },\n    HSVtoRGB: function(color) {\n        let i;\n        let h,s,v,r,g,b;\n        h= color[0];\n        s= color[1];\n        v= color[2];\n        if(s === 0 ) {\n            // achromatic (grey)\n            r = g = b = v;\n            return [r,g,b];\n        }\n        h /= 60;            // sector 0 to 5\n        i = Math.floor( h );\n        let f = h - i;          // factorial part of h\n        let p = v * ( 1 - s );\n        let q = v * ( 1 - s * f );\n        let t = v * ( 1 - s * ( 1 - f ) );\n        switch( i ) {\n            case 0:\n                r = v;\n                g = t;\n                b = p;\n                break;\n            case 1:\n                r = q;\n                g = v;\n                b = p;\n                break;\n            case 2:\n                r = p;\n                g = v;\n                b = t;\n                break;\n            case 3:\n                r = p;\n                g = q;\n                b = v;\n                break;\n            case 4:\n                r = t;\n                g = p;\n                b = v;\n                break;\n            default:        // case 5:\n                r = v;\n                g = p;\n                b = q;\n                break;\n        }\n        return [r,g,b];\n    },\n    HEXtoRGB: function(hex) {\n        var result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\n        return [\n          parseInt(result[1], 16),\n          parseInt(result[2], 16),\n          parseInt(result[3], 16)\n        ];\n      }\n};\n\n// The list of goals, that can't be animated to collect.\nconst NOT_COLLECTED = []\n\n// The list of ENGLISH messages.\nconst MESSAGES = {\n    fail_moves: \"You didn't satisfy all goals\\n and ran out of moves!\",\n    fail_time: \"You didn't satisfy all goals\\n and ran out of time!\"\n}\n\n\n\n//# sourceURL=webpack://circle-match/./src/files/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _files_bg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files/bg.png */ \"./src/files/bg.png\");\n/* harmony import */ var _files_infoIngame_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/infoIngame.png */ \"./src/files/infoIngame.png\");\n/* harmony import */ var _tiles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tiles.js */ \"./src/tiles.js\");\n/* harmony import */ var _files_tiles_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files/tiles.png */ \"./src/files/tiles.png\");\n/* harmony import */ var _files_ui_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files/ui.png */ \"./src/files/ui.png\");\n/* harmony import */ var _files_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files/constants.js */ \"./src/files/constants.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\n\n\nconst canvas = document.createElement('canvas');\nconst ctx = canvas.getContext('2d')\n\nlet GRID_WIDTH = 9;\nlet GRID_HEIGHT = 9;\nlet X_OFFSET = 450 + 32;\nlet Y_OFFSET = 10 + 32;\n\nlet warnedSave = false;\n\nlet ti = 0;\nlet specialsToMake = [];\nlet goalAnim = [];\nlet showGoalAnim = [];\nconst sCircles = [\n    \"blueCircle\",\n    \"greenCircle\",\n    \"orangeCircle\",\n    \"purpleCircle\",\n    \"redCircle\",\n    \"yellowCircle\"\n]\n\nlet mouse = {\n    down: null,\n    justDown: false,\n    up: null,\n    move: [0, 0],\n    held: false,\n    m: [1, 1],\n    swipeStatus: 0,\n    swipeFrom: [0, 0],\n    swipeTo: [0, 0]\n}\n\nlet loadingDone = false;\nlet immediateShowdown = true;\nlet targets = [10000, 20000, 30000];\nlet goalsDone = false;\nlet tileImages = [];\nlet matchCheck = null;\nlet isRCMatch = false;\nlet specialComboType = null;\nlet lastActualMatch = 0;\nlet endMoves = null;\nlet timeMode = false;\nlet time = 100;\nlet maxTime = 100;\nlet cannonData = [];\n\nconst clickCanvas = function (event) {\n    // up\n    const m = getMousePos(canvas, event);\n    mouse.up = [m.x * _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH / mouse.m[0], m.y * _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT / mouse.m[1]]\n    mouse.held = false;\n}\n\nconst clickCanvasDown = function (event) {\n    // down\n    const m = getMousePos(canvas, event);\n    mouse.justDown = true;\n    mouse.down = [m.x * _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH / mouse.m[0], m.y * _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT / mouse.m[1]]\n    mouse.held = true;\n}\n\nconst clickCanvasMove = function (event) {\n    // moving\n    const m = getMousePos(canvas, event);\n    mouse.move = [m.x * _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH / mouse.m[0], m.y * _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT / mouse.m[1]]\n}\n\n// From user1693593\n// (https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas)\nfunction getMousePos(canvas, evt) {\n    var rect = canvas.getBoundingClientRect();\n    return {\n        x: evt.clientX - rect.left,\n        y: evt.clientY - rect.top\n    };\n}\n\nlet lastFrameDate = new Date();\nlet slide = false;\nlet matchedTiles = [];\nlet canMakeMatch = true;\nlet goingToMatch = [];\nlet moves = 3;\nlet goalsCollected = _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.INITIAL_GOALS;\nlet goalsAnimCollected = { ..._files_constants_js__WEBPACK_IMPORTED_MODULE_5__.INITIAL_GOALS, ...{ button: 0 } };\nlet score = 0;\nlet cascades = 0;\nlet said = 1;\nlet levelSelect = false;\nlet messageAnim = null;\nlet hasMadeMatch = false;\nlet timeUpdate = new Date();\n\nlet spawningTiles = [];\nlet buttonTiles = [];\nlet encasingBlockerTiles = [];\nlet teleporters = [];\nlet globeExitTiles = [];\nlet cannonTiles = [];\n\nlet numberOfColours = 6;\nlet prevTiles = null;\nlet lastMatch = new Date();\nlet fromTile = [0, 0]; let toTile = [0, 0];\n\nlet tileImage = new Image()\ntileImage.src = _files_tiles_png__WEBPACK_IMPORTED_MODULE_3__;\n\nlet tileImagePosChanges = [\n\n];\n\nlet level = 1;\nlet resetStreak = 0;\nlet levelEnd = false;\n\nlet prevChanges;\nlet matchHappening = false;\nlet showdownStarted = false;\n\nlet tiles;\nlet initialButtons = 0;\nlet levelColours = Array(...Array(_files_constants_js__WEBPACK_IMPORTED_MODULE_5__.LEVELS_COUNT)).map(() => _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.LS_COLOURS.none);\nlet levelStars = Array(...Array(_files_constants_js__WEBPACK_IMPORTED_MODULE_5__.LEVELS_COUNT)).map(() => [1, 2, 3]);\nlet save = _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.INITIAL_SAVE;\n\ntry {\n    if (window.localStorage) {\n        // Supports!\n        if (!localStorage.getItem(\"circle.match.save\")) {\n            // Make the save file!\n            console.log(\"Generating save!\")\n            localStorage.setItem(\"circle.match.save\", JSON.stringify(_files_constants_js__WEBPACK_IMPORTED_MODULE_5__.INITIAL_SAVE));\n            save = _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.INITIAL_SAVE;\n        } else {\n            // Get it.\n            console.log(\"Restoring progress!\")\n            save = JSON.parse(localStorage.getItem(\"circle.match.save\"));\n        }\n    }\n} catch (e) {\n    console.warn(\"Your user settings don't allow local storage to be used! The game won't be able to save progress.\\n(\"+e+\")\")\n}\n\nfunction load() {\n    for (let i = 0; i < _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.LEVELS_COUNT; i++) {\n        getLevelC(i + 1)\n            .then((r) => {\n                levelColours[i] = r;\n            })\n        getLevelTargets(i + 1)\n            .then((r) => {\n                levelStars[i] = r;\n            })\n    }\n    init();\n}\n\nlet ticks = 0;\nlet goals = [];\nlet OBJ_SIZE = 50;\nlet targetAnim = [null, null, null];\nlet stripedAnim = [];\nlet playingLevel = false;\nlet canPlay = false;\nlet iColours = false;\n\nlet lsLastScrollY = 0;\nlet lsScrollY = 0;\nlet levelHover = [...Array(_files_constants_js__WEBPACK_IMPORTED_MODULE_5__.LEVELS_COUNT)].map((_, i) => 0);\nlet levelHard = 0;\n\nlet bgImage = new Image()\nbgImage.src = _files_bg_png__WEBPACK_IMPORTED_MODULE_0__;\nlet iiImage = new Image()\niiImage.src = _files_infoIngame_png__WEBPACK_IMPORTED_MODULE_1__;\n// Show menu\nlet UIImage = new Image();\nUIImage.src = _files_ui_png__WEBPACK_IMPORTED_MODULE_4__;\n\nfunction tick() {\n    try {\n        localStorage.setItem(\"circle.match.save\", JSON.parse(save))\n    } catch (e) {\n        \n    }\n    sizeCanvas();\n    if (playingLevel) {\n        ctx.drawImage(bgImage, 0, 0, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT)\n        ctx.drawImage(iiImage, levelHard * 200, 0, 200, 576, /**/ 0, 0, 240, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT)\n        // Moves\n        let careful = 0;\n        if (moves <= 5) {\n            careful = Math.sin(new Date() / 190) * 12;\n        }\n        ctx.font = \"bold \" + ((1 - Math.min(1, (new Date() - lastActualMatch) / 200) ** 1.02) * 100 + 100 + careful) + \"px Segoe UI\";\n        ctx.textAlign = \"center\";\n        let c = levelHard > 1 ? 255 : 0;\n        ctx.fillStyle = \"rgba(\" + c + \",\" + c + \",\" + c + \",0.9)\";\n        if (timeMode) {\n            ctx.beginPath();\n            let cx = 115;\n            let cy = 130;\n            ctx.fillStyle = \"rgba(\" + c + \",\" + c + \",\" + c + \",0.4)\";\n            ctx.arc(cx, cy, 70, 0, Math.PI * 2);\n            ctx.fill();\n            ctx.beginPath();\n            ctx.fillStyle = \"rgba(\" + c + \",\" + c + \",\" + c + \",0.5)\";\n            ctx.moveTo(cx, cy);\n            ctx.save();\n            ctx.translate(cx, cy);\n            ctx.rotate(Math.PI * 3 / 2);\n            ctx.arc(0, 0, 70, -time / maxTime * Math.PI * 2, 0);\n            ctx.translate(-cx, -cy);\n            ctx.restore();\n            ctx.lineTo(cx, cy);\n            ctx.fill();\n            c = 255 - c;\n            ctx.fillStyle = \"rgba(\" + c + \",\" + c + \",\" + c + \",0.9)\";\n            const min = Math.floor((time + 1) / 60);\n            const sec = Math.ceil(time % 60) % 60;\n            ctx.font = \"50px Segoe UI Semibold\";\n            ctx.fillText((min >= 10 ? \"\" : \"0\" + min) + \":\" + (sec >= 10 ? \"\" : \"0\") + sec, cx, cy + 15);\n        } else {\n            ctx.fillText(moves, 110, 180)\n            c = 255 - c;\n        }\n        c = 255 - c;\n        // Level\n        ctx.fillStyle = \"rgba(\" + c + \",\" + c + \",\" + c + \",0.9)\";\n        ctx.font = \"40px Segoe UI Semibold\";\n        ctx.textAlign = \"left\"\n        ctx.fillText(\"◍ \" + level, 30, 50)\n\n        // Goals\n        ctx.fillStyle = \"rgba(0,0,0,0.5)\";\n        let roundRectPath = new Path2D();\n        roundRectPath.roundRect(15, 210, 200, 310, 12);\n        ctx.fill(roundRectPath);\n        if (goals.length <= 3) {\n            OBJ_SIZE = 80;\n        } else {\n            OBJ_SIZE = 50;\n        }\n        if (ticks % 3 === 0) {\n            for (let goalType in { ..._files_constants_js__WEBPACK_IMPORTED_MODULE_5__.INITIAL_GOALS, ...{ button: 0 } }) {\n                let goalC = goalAnim.filter(o => o.type === goalType);\n                if (goalC.length > 0) {\n                    showGoalAnim.push(goalC[0])\n                    goalAnim = goalAnim.filter(o => o.id !== goalC[0].id);\n                    setTimeout(() => { goalsAnimCollected[goalType]++; }, 800)\n                }\n            }\n        }\n        drawGoals();\n        // Score bar: fill\n        ctx.fillStyle = \"rgba(0,0,0,0.3)\";\n        roundRectPath = new Path2D();\n        roundRectPath.roundRect(15, 530, 200, 30, 12);\n        ctx.fill(roundRectPath);\n        // Score bar: actual score\n        roundRectPath = new Path2D();\n        const scoreMetre = Math.min(score / targets[2] * 200, 200);\n        ctx.fillStyle = \"rgba(255,255,255,0.8)\";\n        roundRectPath.roundRect(15, 530, Math.max(scoreMetre, 30), 30, 12);\n        ctx.fill(roundRectPath);\n        ctx.fillStyle = \"black\";\n        ctx.font = \"32px Segoe UI Semibold\";\n        ctx.textAlign = \"center\";\n        ctx.strokeStyle = \"#222\";\n        for (let t = 0; t < 3; t++) {\n            let target = targets[t];\n            let meter = Math.min(target / targets[2] * 200, 200)\n            ctx.lineWidth = targetAnim[t] ? 4 : 2\n            ctx.beginPath();\n            ctx.moveTo(15 + Math.max(meter, 30), 530);\n            ctx.lineTo(15 + Math.max(meter, 30), 560);\n            ctx.stroke();\n            const tilemap = _tiles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"star\" + (4 - (t + 1))];\n            let s = 35;\n            let a = 0;\n            const exp = 1.8;\n            if (score >= targets[t] && !targetAnim[t]) {\n                collectGoal(\"score\", 15 + Math.max(meter, 30) - s / 2, 565, \"star3\")\n                targetAnim[t] = new Date();\n            }\n            if (targetAnim[t]) {\n                a = Math.min(((new Date() - targetAnim[t]) / 300) ** exp, 1);\n                s = s * (2.01 - a)\n\n                ctx.save();\n                let tx = 15 + Math.max(meter, 30);\n                let ty = 565 + s / 2;\n                ctx.translate(tx, ty);\n                ctx.rotate((2 - a - 1) * 2)\n                ctx.translate(-tx, -ty);\n            }\n            ctx.drawImage(tileImage, tilemap.x, tilemap.y, tilemap.s, tilemap.s,\n                15 + Math.max(meter, 30) - s / 2, 565, s, s);\n            if (targetAnim[t]) {\n                ctx.restore()\n            }\n        }\n        ctx.fillText(score, 15 + 100, 558 - 2)\n        // draw tiles\n        if (canPlay) {\n            drawTiles(64);\n            if (moves > 0 || (timeMode && time > 0)) checkForSwipe();\n            prevChanges = tileImagePosChanges;\n            executeMatches();\n            // Count down time.\n            if (timeMode && canMakeMatch && hasMadeMatch && time > 0) {\n                let ms = new Date - lastFrameDate;\n                time -= ms / 1000;\n                if (time < 0) time = 0;\n            }\n            if (messageAnim) {\n                if (endMoves || endMoves === 0) {\n                    // Passed!\n                    let dif = new Date() - messageAnim;\n                    const width = 900;\n                    const height = 600;\n                    const x = (_files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH - width) / 2;\n                    const y = -(Math.max(0, 1000 - dif) ** 1.3) + (_files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT - height) / 2;\n                    ctx.beginPath();\n                    ctx.roundRect(x, y, width, height, 30);\n                    //\n                    ctx.fillStyle = \"rgba(255,255,255,0.6)\";\n                    ctx.fill();\n                    ctx.font = \"bold 50px Segoe UI Semibold\";\n                    ctx.fillStyle = \"black\"\n                    ctx.textAlign = \"center\";\n                    ctx.fillText(\"Level \" + level + \" Complete!\", _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH / 2, y + 70)\n                    ctx.font = \"bold 80px Segoe UI Semibold\";\n                    ctx.fillText(\"Score:\", _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH / 2, y + 190)\n                    ctx.fillText(score, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH / 2, y + 280);\n                    ctx.font = \"bold 70px Segoe UI Semibold\";\n                    const continueButtonWidth = 400;\n                    const cby = 150;\n                    const cx = _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH / 2 - continueButtonWidth / 2 + 25;\n                    const cy = y + height - cby + 20;\n                    ctx.drawImage(UIImage, 128, 0, 256, 64, cx, cy, continueButtonWidth, continueButtonWidth / 4);\n                    ctx.fillText(\"Continue\", _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH / 2, y + height - 100 + 50);\n                    for (let i = 0; i < 3; i++) {\n                        const star = _tiles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"star\" + (score >= targets[i] ? (3 - i) : \"Disabled\")];\n                        ctx.drawImage(tileImage, star.x, star.y, star.s, star.s, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH / 2 + (1 - i) * -90 - 30, y + height - 250, 85, 85);\n                    }\n\n                    if (new Date() - messageAnim > 500 && mouse.held &&\n                        mouse.down[0] > cx && mouse.down[1] > cy &&\n                        mouse.down[0] < cx + continueButtonWidth && mouse.down[1] < cy + continueButtonWidth / 4\n                    ) {\n                        // Click.\n                        levelSelect = true;\n                        canPlay = false;\n                        playingLevel = false;\n                        let newSave = save;\n                        if (level == save.reachedLevel) newSave.reachedLevel++;\n                        if (newSave.scores.length < level) {\n                            newSave.scores.push(score);\n                        } else if (newSave.scores[level - 1] <= score) {\n                            newSave.scores[level - 1] = score;\n                        }\n                        try {\n                            localStorage.setItem(\"circle.match.save\", JSON.stringify(newSave));\n                        } catch (e) {\n                            if (!warnedSave) console.warn(\"Without cookies, this game won't be able to save progress. Allow cookies to save progress!\");\n                            warnedSave = true;\n                        }\n                    }\n                } else {\n                    // Fail lol\n                    let dif = new Date() - messageAnim;\n                    const width = 900;\n                    const height = 600;\n                    const x = (_files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH - width) / 2;\n                    const y = -(Math.max(0, 1000 - dif) ** 1.3) + (_files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT - height) / 2;\n                    ctx.beginPath();\n                    ctx.roundRect(x, y, width, height, 30);\n                    //\n                    ctx.fillStyle = \"rgba(255,220,220,0.6)\";\n                    ctx.fill();\n                    ctx.font = \"bold 50px Segoe UI Semibold\";\n                    ctx.fillStyle = \"black\"\n                    ctx.textAlign = \"center\";\n                    ctx.fillText(\"Level \" + level + \" Failed!\", _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH / 2, y + 70);\n                    const mes = (timeMode ? _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.MESSAGES.fail_time : _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.MESSAGES.fail_moves).split(\"\\n\");\n                    for (let i = 0; i < mes.length; i++) ctx.fillText(mes[i], _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH / 2, y + 190 + 60 * i)\n                    ctx.font = \"bold 40px Segoe UI Semibold\";\n                    ctx.font = \"bold 70px Segoe UI Semibold\";\n                    const continueButtonWidth = 400;\n                    const cby = 150;\n                    const cx = _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH / 2 - continueButtonWidth / 2 + 25;\n                    const cy = y + height - cby + 20;\n                    ctx.drawImage(UIImage, 128, 0, 256, 64, cx, cy, continueButtonWidth, continueButtonWidth / 4);\n                    ctx.fillText(\"End Game\", _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH / 2, y + height - 100 + 50);\n                    if (new Date() - messageAnim > 500 && mouse.held &&\n                        mouse.down[0] > cx && mouse.down[1] > cy &&\n                        mouse.down[0] < cx + continueButtonWidth && mouse.down[1] < cy + continueButtonWidth / 4\n                    ) {\n                        // Click.\n                        levelSelect = true;\n                        canPlay = false;\n                        playingLevel = false;\n                    }\n                }\n            }\n        }\n    } else if (!levelSelect) {\n        ctx.fillStyle = \"#88ccff\"\n        ctx.fillRect(0, 0, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT);\n        ctx.drawImage(UIImage, 0, 0, 128, 64, 500, 500 - 200, 300, 150)\n        ctx.drawImage(UIImage, 128, 0, 224, 64, 500 - 110, 500, 525, 150)\n        ctx.fillStyle = \"rgba(0,0,0,0.9)\";\n        ctx.textAlign = \"center\";\n        ctx.font = \"170px Segoe UI Semibold\";\n        if (mouse.justDown && mouse.down &&\n            mouse.down[0] > 500 && mouse.down[0] < 500 + 300 &&\n            mouse.down[1] > 500 - 200 && mouse.down[1] < 500 + 150 - 200) {\n            if (mouse.held) {\n                playingLevel = true;\n                loadLevel(save.reachedLevel)\n                    .then((r) => {\n                        tiles = r;\n                        canPlay = true;\n                        executeMatches();\n                    });\n            } else {\n                ctx.globalAlpha = 0.9;\n            }\n        }\n        if (mouse.down &&\n            mouse.down[0] > 500 - 110 && mouse.down[0] < 500 - 110 + 525 &&\n            mouse.down[1] > 500 && mouse.down[1] < 500 + 150) {\n            if (mouse.held) {\n                levelSelect = true;\n                lsScrollY = -(Math.floor((save.reachedLevel - 1) / 5) * 1.5 * 140) + 700;\n                ticks = 0;\n            } else {\n                ctx.globalAlpha = 0.9;\n            }\n        }\n        ctx.font = \"80px Segoe UI Semibold\";\n        ctx.drawImage(UIImage, 0, 64, 1024, 128, 50, 50, 1200, 150);\n        ctx.globalAlpha = 1;\n        ctx.fillText(\"Play\", 500 + 150, 500 + 100 - 200)\n        ctx.globalAlpha = 1;\n        ctx.fillText(\"Level Select\", 500 + 150, 500 + 100)\n        ctx.fillStyle = \"rgba(0,0,255,0.4)\";\n        ctx.font = \"20px Segoe UI Semibold\";\n        ctx.textAlign = \"right\";\n        ctx.fillText(\"Editing the game, and want to create new levels? Click here!\", _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH-10, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT-10)\n        if (mouse.held && mouse.move[0] > _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH/2+100 && mouse.move[1] > _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT-20 &&\n            document.location.href.includes(\"github.io\") /* didn't put github username so that other forks have the same option */) {\n            console.log(\"Opened the level editor!\")\n            window.open(document.location.href.replace(\"circle-match\", \"circle-match-level-editor\")); // same reason\n            //\n        }\n    } else {\n        ctx.fillStyle = \"#88ccff\";\n        ctx.fillRect(0, 0, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT);\n        ctx.font = \"80px Segoe UI Semibold\";\n        ctx.textAlign = \"center\"\n        const lsCover = 100;\n        const levelScrollMax = -10;\n        // Let's make the actual levels!\n        if (mouse.move && mouse.move[1] > lsCover && mouse.move[1] < _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT - 100 && mouse.held) lsScrollY -= (mouse.move[1] - lsLastScrollY) * 1.25;\n        if (mouse.move && mouse.move[1] > lsCover && mouse.move[1] < _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT - 100) lsLastScrollY = mouse.move[1];\n        if (!mouse.held && lsScrollY > levelScrollMax) lsScrollY += (levelScrollMax - lsLastScrollY) * 0.1\n        const maxS = Math.ceil(_files_constants_js__WEBPACK_IMPORTED_MODULE_5__.LEVELS_COUNT / 5) * -210 - 20;\n        if (!mouse.held && lsScrollY < maxS) lsScrollY += (maxS - lsScrollY) * 0.1\n        for (let l = 0; l < _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.LEVELS_COUNT; l++) {\n            const levelLength = 140;\n            let innerLevel = levelColours[l];\n            if (!innerLevel || innerLevel === \"#666666\") innerLevel = [\"#666666\"]\n            let outerLevel = innerLevel.map(o => {\n                let n = _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.RGBHSV.HEXtoRGB(o);\n                n[0] = n[0] / 2;\n                n[1] = n[1] / 2;\n                n[2] = n[2] / 2;\n                return n;\n            });\n            outerLevel = \"rgb(\" + outerLevel.join(\",\") + \",1)\";\n            const lm = 4.5;\n\n            const x = ((l % 5) * 1.5 + 0.5) * levelLength + 77;\n            const y = _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT / 2 - 150 + Math.floor(l / 5) * 1.5 * levelLength + lsScrollY;\n            if (Math.abs(y) > 1000) continue;\n            ctx.save();\n            ctx.translate(x + levelLength / 2, y + levelLength / 2);\n            if (mouse.move[0] > x && mouse.move[0] < x + levelLength &&\n                mouse.move[1] > y && mouse.move[1] < y + levelLength &&\n                levelHover[l] >= 0) {\n                levelHover[l] += (1 - levelHover[l]) * 0.2\n                if (mouse.justDown && mouse.up && mouse.move[1] > lsCover && mouse.move[1] < _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT - 100 &&\n                    mouse.held && ticks > 20 && save.reachedLevel > l\n                    && levelColours[l][0] !== _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.LS_COLOURS.none) {\n                    // Play level!\n                    playingLevel = true;\n                    loadLevel(l + 1)\n                        .then((r) => {\n                            tiles = r;\n                            canPlay = true;\n                            executeMatches();\n                        });\n                }\n            } else {\n                levelHover[l] -= levelHover[l] * 0.2;\n            }\n            const rotate = levelStars[l][1] === 0\n            ctx.scale(1 + levelHover[l] * 0.25, 1 + levelHover[l] * 0.25);\n            if (rotate) ctx.rotate(Math.PI / 2);\n            ctx.translate(-x - levelLength / 2, -y - levelLength / 2);\n            const radius = levelLength / 1.75;\n            for (let g = 0; g < innerLevel.length; g++) {\n                let start = g / innerLevel.length;\n                let end = start + 1 / innerLevel.length;\n                ctx.beginPath();\n                ctx.moveTo(x + radius * 7 / 8, y + radius * 7 / 8)\n                ctx.fillStyle = innerLevel[g];\n                ctx.arc(x + radius * 7 / 8, y + radius * 7 / 8, radius, start * (Math.PI * 2), end * (Math.PI * 2));\n                ctx.lineTo(x + radius * 7 / 8, y + radius * 7 / 8);\n                ctx.fill();\n                ctx.strokeStyle = \"rgba(0,0,0,0.4)\"\n                ctx.beginPath();\n                const h = 5;\n                ctx.arc(x + radius * 7 / 8, y + radius * 7 / 8, radius - h, start * (Math.PI * 2), end * (Math.PI * 2));\n                ctx.stroke();\n            }\n            if (rotate) {\n                ctx.translate(x + levelLength / 2, y + levelLength / 2);\n                ctx.rotate(Math.PI / -2);\n                ctx.translate(-x - levelLength / 2, -y - levelLength / 2);\n            }\n            ctx.fillStyle = outerLevel;\n            ctx.font = \"114px Noto Sans\";\n            ctx.fillStyle = \"rgba(0,0,0,0.8)\"\n            if (l + 1 > save.reachedLevel) {\n                ctx.drawImage(UIImage, 1024 + (levelStars[l][1] > 1 ? 128 : 0), 64, 128, 128, x + 10, y + 10, 120, 120)\n                ctx.fillStyle = \"rgba(0,0,0,0.4)\";\n                ctx.arc(x + radius * 7 / 8, y + radius * 7 / 8, radius - 5, 0, Math.PI * 2);\n                ctx.fill();\n            } else {\n                if (levelStars[l][1] > 1) ctx.fillStyle = \"rgba(255,255,255,0.85)\";\n                if (l >= 99) ctx.font = \"86px Noto Sans\";\n                let k = 0;\n                if (l >= 99) k -= 8;\n                ctx.fillText(String(l + 1), x + levelLength / 2, y + levelLength * 3 / 4 + 5 + k);\n            }\n            ctx.translate(x + levelLength / 2, y + levelLength / 2);\n            ctx.rotate(Math.PI * 0.1)\n            ctx.translate(-x - levelLength / 2, -y - levelLength / 2);\n            if (l + 1 <= save.reachedLevel) {\n                // Star 1\n                const score = save.scores[l] || 0;\n                const t = (levelStars[l] || [[Infinity, Infinity, Infinity]])[0];\n                let ti = _tiles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"star\" + (score >= t[0] ? \"3\" : \"Disabled\")];\n                ctx.drawImage(tileImage, ti.x, ti.y, ti.s, ti.s, x + 20, y + levelLength - 24, 64, 64);\n                ctx.translate(x + levelLength / 2, y + levelLength / 2);\n                ctx.rotate(Math.PI * -0.2)\n                ctx.translate(-x - levelLength / 2, -y - levelLength / 2);\n                // Star 3\n                ti = _tiles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"star\" + (score >= t[2] ? \"1\" : \"Disabled\")]\n                ctx.drawImage(tileImage, ti.x, ti.y, ti.s, ti.s, x + 56, y + levelLength - 24, 64, 64);\n                ctx.translate(x + levelLength / 2, y + levelLength / 2);\n                ctx.rotate(Math.PI * 0.1)\n                ctx.translate(-x - levelLength / 2, -y - levelLength / 2);\n                // Star 2\n                ti = _tiles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"star\" + (score >= t[1] ? \"2\" : \"Disabled\")]\n                ctx.drawImage(tileImage, ti.x, ti.y, ti.s, ti.s, x + 38, y + levelLength - 24, 64, 64);\n                ctx.fillStyle = \"rgba(0,0,0,0.6)\";\n                ctx.textAlign = \"center\";\n                ctx.font = \"30px Segoe UI\"\n                ctx.fillText(score || \"\", x + levelLength / 2, y + levelLength + 30);\n            }\n            ctx.restore();\n            ctx.lineWidth = 10;\n            ctx.fillStyle = \"#c0f3ff\";\n            ctx.strokeStyle = \"#0082ab\";\n            ctx.fillRect(-100, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT - lsCover, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH + 200, lsCover + 100)\n            ctx.strokeRect(-100, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT - lsCover, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH + 200, lsCover + 100)\n            ctx.fillStyle = \"rgba(0,0,0,0.8)\";\n            ctx.fillStyle = \"#c0f3ff\";\n            ctx.strokeStyle = \"#0082ab\";\n            ctx.fillRect(-100, -100, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH + 200, 100 + lsCover)\n            ctx.strokeRect(-100, -100, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH + 200, 100 + lsCover)\n            ctx.fillStyle = \"rgb(0,0,0,0.8)\";\n            ctx.fillText(\"Level Select\", _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH / 2, 90);\n            ctx.drawImage(UIImage, 0, 0, 128, 64, 20, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT - 85, 150, 75);\n            ctx.fillStyle = \"rgb(0,0,0,0.65)\";\n            ctx.font = \"30p\"\n            ctx.fillText(\"◀\", 85, _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT - 20);\n            if (mouse.down &&\n                mouse.down[0] > 20 && mouse.down[0] < 20 + 150 &&\n                mouse.down[1] > _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT - 85 && mouse.down[1] < _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT - 85 + 75) {\n                if (mouse.held) {\n                    levelSelect = false;\n                } else {\n                    ctx.globalAlpha = 0.9;\n                }\n            }\n        }\n    }\n    ticks++;\n    mouse.justDown = false;\n    lastFrameDate = new Date();\n    requestAnimationFrame(tick);\n}\n\nfunction executeMatches() {\n    let tilesToNullify = [];\n    goingToMatch = [];\n    let isCascade = false;\n    for (let y = 0; y < GRID_HEIGHT; y++) {\n        for (let x = 0; x < GRID_WIDTH; x++) {\n            let colour = getColour(tiles[y]?.[x])\n            if (!colour) continue;\n            if (colour === \"none\") colour = null;\n\n            if (x > 1) {\n                if (tiles[y][x - 1] && tiles[y][x - 2])\n                    if (getColour(tiles[y][x - 1]) === colour && getColour(tiles[y][x - 2]) === colour) {\n                        tilesToNullify.push([y, x, true], [y, x - 1, true], [y, x - 2, true]);\n                        isCascade = true;\n                        goingToMatch.push([y, x, false, colour], [y, x - 1, false, colour], [y, x - 2, false, colour]);\n                    }\n            }\n            if (y > 1) {\n                if (tiles[y - 1][x] && tiles[y - 2][x])\n                    if (getColour(tiles[y - 1][x]) === colour && getColour(tiles[y - 2][x]) === colour) {\n                        tilesToNullify.push([y, x, true], [y - 1, x, true], [y - 2, x, true]);\n                        isCascade = true;\n                        goingToMatch.push([y, x, true, colour], [y - 1, x, true, colour], [y - 2, x, true, colour]);\n                    }\n\n            }\n        }\n    }\n    let alreadyMatched = [];\n    const isMatched = (x, y) => goingToMatch.some(o => o[0] === y && o[1] == x);\n    const getC = (x, y) => goingToMatch.filter(o => o[0] === y && o[1] == x)[0]?.[3];\n    const getIsVertical = (x, y) => goingToMatch.filter(o => o[0] === y && o[1] === x && o[2]).length > 0;\n    const getIsHorizontal = (x, y) => goingToMatch.filter(o => o[0] === y && o[1] === x && !o[2]).length > 0;\n    for (let y = 0; y < GRID_HEIGHT; y++) {\n        for (let x = 0; x < GRID_WIDTH; x++) {\n            if (isMatched(x, y) && !alreadyMatched.some(c => c[1] === x && c[0] === y)) {\n                // X\n                let tx = x + 1;\n                const c = getC(x, y)\n                let row = 1;\n                let potentialMatch = [];\n                let totalPM = [];\n                while (getC(tx, y) === c && isMatched(tx, y)) {\n                    potentialMatch.push([y, tx++])\n                    row++;\n                }\n                alreadyMatched = alreadyMatched.concat(potentialMatch);\n                totalPM = potentialMatch;\n                // Y\n                let ty = y + 1;\n                let column = 1;\n                potentialMatch = [];\n                while (getC(x, ty) === c && isMatched(x, ty)) {\n                    potentialMatch.push([ty++, x])\n                    column++;\n                }\n                alreadyMatched = alreadyMatched.concat(potentialMatch);\n                totalPM = totalPM.concat(potentialMatch);\n                if (row >= 5) {\n                    // Rainbow circle!!\n                    specialsToMake.push({\n                        x: x + 2,\n                        y: y,\n                        type: \"rainbowCircle\"\n                    })\n                } else if (column >= 5) {\n                    specialsToMake.push({\n                        x: x,\n                        y: y + 2,\n                        type: \"rainbowCircle\"\n                    })\n                } else {\n                    let radial = null;\n                    for (let i = 0; i < totalPM.length; i++) {\n                        let m = totalPM[i];\n                        if (getIsVertical(m[1], m[0]) && getIsHorizontal(m[1], m[0])) {\n                            radial = [m[0], m[1]];\n                            break;\n                        }\n                    }\n                    if (radial) {\n                        specialsToMake.push({\n                            x: radial[1],\n                            y: radial[0],\n                            type: c + \"RSCircle\"\n                        })\n                        tilesToNullify = tilesToNullify.filter(o => (o[1] !== radial[1] || o[0] !== radial[0]));\n                    } else if (row === 4) {\n                        // Vertical striped!\n                        // Find which x to place the special in.\n                        const xToPlaceStriped = (toTile[0] <= x + 3 && toTile[0] >= x) ? toTile[0] : (Math.random() > 0.5 ? x + 1 : x + 2);\n                        specialsToMake.push({\n                            x: xToPlaceStriped,\n                            y: y,\n                            type: c + \"VSCircle\"\n                        });\n\n                        tilesToNullify = tilesToNullify.filter(o => (o[1] !== xToPlaceStriped || o[0] !== y));\n                    } else if (column === 4) {\n                        // Horizontal striped!\n                        // Find which y to place the special in.\n                        const yToPlaceStriped = (toTile[1] <= y + 3 && toTile[1] >= y) ? toTile[1] : (Math.random() * 2 > 1 ? y + 1 : y + 2);\n                        specialsToMake.push({\n                            x: x,\n                            y: yToPlaceStriped,\n                            type: c + \"HSCircle\"\n                        })\n\n                        tilesToNullify = tilesToNullify.filter(o => (o[1] !== x || o[0] !== yToPlaceStriped));\n                    }\n                }\n            }\n        }\n    }\n\n    if (lastMatch && new Date() - lastMatch > 200) {\n        // Regenerate circles.\n        let n = regenerateCircles();\n    }\n    //\n    matchedTiles = tilesToNullify;\n    if (lastMatch && new Date() - lastMatch > 500) {\n        // Activate rainbow circles\n        if (isRCMatch) {\n            isRCMatch = false;\n            let RCLoc = tiles[fromTile[1]][fromTile[0]] === \"rainbowCircle\" ? fromTile : toTile\n            let OtherLoc = tiles[fromTile[1]][fromTile[0]] !== \"rainbowCircle\" ? fromTile : toTile\n            tiles[RCLoc[1]][RCLoc[0]] = null;\n            if (tiles[OtherLoc[1]][OtherLoc[0]]) {\n                let colour; let activations; let tilesToActivate;\n                if (buttonTiles[RCLoc[1]][RCLoc[0]] > 0) removeButtonLayer(RCLoc[0], RCLoc[1]);\n                if (buttonTiles[OtherLoc[1]][OtherLoc[0]] > 0) removeButtonLayer(OtherLoc[0], OtherLoc[1]);\n                collectGoal(\"rainbow_circle\", RCLoc[0], RCLoc[1], \"rainbowCircle\");\n                addScore(5000, RCLoc[0], RCLoc[1], \"rainbowCircle\")\n                switch (tiles[OtherLoc[1]][OtherLoc[0]].slice(-8)) {\n                    case \"owCircle\":\n                        if (tiles[OtherLoc[1]][OtherLoc[0]] !== \"yellowCircle\") {\n                            // Rainbow circle! Remove the entire board!\n                            for (let ty = 0; ty < tiles.length; ty++) {\n                                for (let tx = 0; tx < tiles[0].length; tx++) {\n                                    tilesToNullify.push([ty, tx])\n                                }\n                            }\n                            nullify(tilesToNullify);\n                            tilesToNullify = [];\n                            break;\n                        }\n                    case \"HSCircle\":\n                    case \"VSCircle\":\n                        if (tiles[OtherLoc[1]][OtherLoc[0]] !== \"yellowCircle\") {\n                            collectGoal(\"striped_circle\", OtherLoc[0], OtherLoc[1], tiles[OtherLoc[1]][OtherLoc[0]])\n                            colour = getColour(tiles[OtherLoc[1]][OtherLoc[0]]);\n                            // Striped! \n                            tilesToActivate = [];\n                            activations = 0;\n                            tiles[OtherLoc[1]][OtherLoc[0]] = null;\n                            for (let y = 0; y < tiles.length; y++) {\n                                for (let x = 0; x < tiles[0].length; x++) {\n                                    if (colour === getColour(tiles[y][x])) {\n                                        if (tiles[y][x].endsWith(\"ExtraTimeCircle\") && !(timeMode && time <= 0)) {\n                                            time = Math.min(maxTime, time + 5);\n                                        }\n                                        tiles[y][x] = colour + \"A\" + (Math.random() > 0.5 ? \"H\" : \"V\") + \"SCircle\";\n                                        activations++;\n                                        let o = setInterval(() => {\n                                            for (let y = 0; y < tiles.length; y++) {\n                                                for (let x = 0; x < tiles[0].length; x++) {\n                                                    if ((tiles[y][x] == colour + \"AVSCircle\" ||\n                                                        tiles[y][x] == colour + \"AHSCircle\") && !tilesToNullify.some(o => o[0] === y && o[1] === x)) {\n                                                        tilesToNullify.push([y, x]);\n                                                        nullify(tilesToNullify);\n                                                        tilesToNullify = [];\n                                                        regenerateCircles();\n                                                        return;\n                                                    }\n                                                }\n                                            }\n                                            clearInterval(o)\n                                        }, activations * 750 + 500)\n                                    }\n                                }\n                            }\n                            break;\n                        }\n                    case \"RSCircle\":\n                        if (tiles[OtherLoc[1]][OtherLoc[0]] !== \"yellowCircle\") {\n                            collectGoal(\"radial_circle\", OtherLoc[0], OtherLoc[1], tiles[OtherLoc[1]][OtherLoc[0]])\n                            colour = getColour(tiles[OtherLoc[1]][OtherLoc[0]]);\n                            // Radial?\n                            tilesToActivate = [];\n                            activations = 0;\n                            tiles[OtherLoc[1]][OtherLoc[0]] = null;\n                            for (let y = 0; y < tiles.length; y++) {\n                                for (let x = 0; x < tiles[0].length; x++) {\n                                    if (colour === getColour(tiles[y][x])) {\n                                        tiles[y][x] = colour + \"ARSCircle\";\n                                        if (tiles[y][x].endsWith(\"ExtraTimeCircle\")) {\n                                            time = Math.min(maxTime, time + 5);\n                                        }\n                                        activations++;\n                                        setInterval(() => {\n                                            for (let y = 0; y < tiles.length; y++) {\n                                                for (let x = 0; x < tiles[0].length; x++) {\n                                                    if ((tiles[y][x] == colour + \"ARSCircle\") && !tilesToNullify.some(o => o[0] === y && o[1] === x)) {\n                                                        tilesToNullify.push([y, x]);\n                                                        nullify(tilesToNullify);\n                                                        tilesToNullify = [];\n                                                        induceFalling();\n                                                        regenerateCircles();\n                                                        return;\n                                                    }\n                                                }\n                                            }\n                                            regenerateCircles();\n                                        }, activations * 750 + 500)\n                                    }\n                                }\n                            }\n                        }\n                    default:\n                        let targetColour = getColour(tiles[OtherLoc[1]][OtherLoc[0]]);\n                        if (targetColour != \"none\") {\n                            for (let y = 0; y < tiles.length; y++) {\n                                for (let x = 0; x < tiles[0].length; x++) {\n                                    if (getColour(tiles[y][x]) == targetColour) {\n                                        // Remove tile.\n                                        tilesToNullify.push([y, x, true]);\n                                    }\n                                }\n                            }\n                            nullify(tilesToNullify);\n                            tilesToNullify = [];\n                        }\n                }\n            }\n\n        }\n        if (specialComboType) {\n            let fromT = tiles[fromTile[1]][fromTile[0]];\n            let toT = tiles[toTile[1]][toTile[0]]\n            tiles[fromTile[1]][fromTile[0]] = null;\n            tiles[toTile[1]][toTile[0]] = null;\n            let fromColour = getColour(fromT);\n            let toColour = getColour(toT)\n            collectGoal(fromColour + \"_circle\", fromTile[0], fromTile[1], fromT)\n            collectGoal(toColour + \"_circle\", toTile[0], toTile[1], toT)\n            switch (specialComboType) {\n                case \"SS\":\n                    // 1000 + 1000 + 500 (BONUS)\n                    addScore(2500, (fromTile[0] + toTile[0]) / 2, (fromTile[1] + toTile[1]) / 2, toT)\n                    // Striped + Striped.\n                    // Make two blasts.\n                    // Horizontal blast\n                    for (let x = 0; x < tiles[0].length; x++) {\n                        tilesToNullify.push([toTile[1], x]);\n                    }\n                    stripedAnim.push({\n                        x: toTile[0],\n                        y: toTile[1],\n                        isVertical: false,\n                        isRadial: false,\n                        id: said++,\n                        type: fromT\n                    })\n                    // Vertical blast\n                    for (let y = 0; y < tiles[0].length; y++) {\n                        tilesToNullify.push([y, toTile[0]]);\n                    }\n                    stripedAnim.push({\n                        x: toTile[0],\n                        y: toTile[1],\n                        isVertical: true,\n                        isRadial: false,\n                        id: said++,\n                        type: toT\n                    })\n                    collectGoal(\"striped_circle\", fromTile[0], fromTile[1], toT);\n                    collectGoal(\"striped_circle\", toTile[0], toTile[1], fromT);\n                    break;\n                case \"SR\":\n                    // 1000 + 2000 + 500 (BONUS)\n                    addScore(3500, (fromTile[0] + toTile[0]) / 2, (fromTile[1] + toTile[1]) / 2, toT)\n                    // Striped + Radial.\n                    // Make six blasts.\n                    // Horizontal blasts\n                    for (let y = toTile[1] - 1; y < toTile[1] + 2; y++) {\n                        if (y < 0 || y > tiles.length - 1) continue;\n                        for (let x = 0; x < tiles[0].length; x++) {\n                            tilesToNullify.push([y, x]);\n                        }\n                        stripedAnim.push({\n                            x: toTile[0],\n                            y: y,\n                            isVertical: false,\n                            isRadial: false,\n                            id: said++,\n                            type: fromT\n                        })\n                    }\n                    // Vertical blast\n                    for (let x = toTile[0] - 1; x < toTile[0] + 2; x++) {\n                        if (x < 0 || x > tiles[0].length - 1) continue;\n                        for (let y = 0; y < tiles.length; y++) {\n                            tilesToNullify.push([y, x]);\n                        }\n                        stripedAnim.push({\n                            x: x,\n                            y: toTile[1],\n                            isVertical: true,\n                            isRadial: false,\n                            id: said++,\n                            type: toT\n                        })\n                    }\n                    if (fromT.slice(-8) === \"RSCircle\") {\n                        collectGoal(\"striped_circle\", fromTile[0], fromTile[1], toT);\n                        collectGoal(\"radial_circle\", toTile[0], toTile[1], fromT);\n                    } else {\n                        collectGoal(\"radial_circle\", fromTile[0], fromTile[1], toT);\n                        collectGoal(\"striped_circle\", toTile[0], toTile[1], fromT);\n                    }\n                    break;\n                case \"RR\":\n                    // 2000 + 2000 + 500 (BONUS)\n                    addScore(4500, (fromTile[0] + toTile[0]) / 2, (fromTile[1] + toTile[1]) / 2, toT)\n                    // Radial + Radial.\n                    // Make a 5 * 5 blast\n                    // Horizontal blasts\n                    for (let y = toTile[1] - 2; y < toTile[1] + 3; y++) {\n                        if (y < 0 || y > tiles.length - 1) continue;\n                        for (let x = toTile[0] - 2; x < toTile[0] + 3; x++) {\n                            if (tiles[y][x] && !(x === toTile[0] && y === toTile[1])) {\n                                tilesToNullify.push([y, x])\n                            }\n                        }\n                    }\n                    stripedAnim.push({\n                        x: toTile[0],\n                        y: toTile[1],\n                        isVertical: false,\n                        isRadial: true,\n                        isBig: true,\n                        id: said++,\n                        type: fromT\n                    })\n                    collectGoal(\"radial_circle\", fromTile[0], fromTile[1], fromT);\n                    collectGoal(\"radial_circle\", toTile[0], toTile[1], toT);\n\n            }\n            nullify(tilesToNullify);\n            tilesToNullify = [];\n            specialComboType = null;\n        }\n        matchHappening = false;\n        setInterval(() => { if (!isMatch(tiles) && !matchHappening && (((moves > 0 || (timeMode && time > 0)) && !immediateShowdown) || !goalsDone)) canMakeMatch = true }, 100);\n        nullify(tilesToNullify);\n        tilesToNullify = [];\n        let c = regenerateCircles();\n        if (c) induceFalling();\n    }\n    if (lastMatch && new Date() - lastMatch > 700) {\n        tileImages = reloadTileImages();\n        // Falling circles.\n        if (goalsDone && (immediateShowdown || (!timeMode && moves < 1))) canMakeMatch = false;\n        induceFalling();\n        if (!hasValidMove(tiles)) {\n            console.log(\"SHUFFLE!\")\n            setTimeout(() => {\n                // TODO\n            }, 500)\n        }\n    }\n    if (matchCheck && (new Date() - matchCheck) > 300 || (timeMode && new Date() - timeUpdate > 1000)) {\n        tileImages = reloadTileImages();\n        timeUpdate = new Date();\n        let changed = regenerateCircles();\n        if (!changed && spawningTiles.length !== 0) {\n            matchCheck = null;\n\n            if (loadingDone && (goalsDone && (immediateShowdown || ((!timeMode && moves < 1) || (timeMode && moves < 1))))\n                ||\n                (!goalsDone && goals.some(o => o.type === \"score\") &&\n                    (!timeMode && moves < 1))) {\n                canMakeMatch = false;\n                if (!endMoves && endMoves !== 0) {\n                    if (!(goals.some(o => o.type === \"score\") && ((!timeMode && moves < 1) || (timeMode && moves < 1)) && !goalsDone)) endMoves = timeMode ? time : moves;\n                    setTimeout(() => {\n                        // Begin da Circle Showdown!\n                        // Showdown start\n                        startShowdown(tilesToNullify);\n                        // Showdown end\n                        tilesToNullify = [];\n                    }, 1000);\n                }\n            } else if (!levelEnd && ((!timeMode && moves < 1) || (timeMode && time <= 0)) && !goalsDone && (!goals.some(o => o.type === \"score\") || timeMode) && !changed) {\n                setTimeout(() => {\n                    // Fail :(\n                    failLevel();\n                }, 1000);\n            }\n        }\n        cascades = 0;\n    }\n}\n\nlet pass = 0;\n\nfunction addScore(s, x, y) {\n    score += s;\n}\n\nfunction startShowdown(ttn) {\n    showdownStarted = true;\n    if (timeMode) for (let y = 0; y < tiles.length; y++) {\n        for (let x = 0; x < tiles[0].length; x++) {\n            if (tiles[y]?.[x] && tiles[y]?.[x].endsWith(\"ExtraTimeCircle\")) tiles[y][x] = getColour(tiles[y]?.[x]) + \"RSCircle\"\n        }\n    }\n    for (let i = 0; i < (timeMode ? Math.ceil(endMoves / 5) : endMoves); i++) {\n        setTimeout(() => {\n            if (timeMode) {\n                const dec = time > 5 ? 5 : time;\n                time -= dec;\n            } else {\n                moves--;\n            }\n            // Make a random circle on the board special\n            let x = null;\n            let y = null;\n            let loops = 0;\n            while ((!x || (getColour(tiles[y][x]) === \"none\" ||\n                \"HSCircle.VSCircle.RSCircle\".split(\".\").includes(tiles[y][x].slice(-8)))) && loops < 1000) {\n                y = Math.floor(Math.random() * tiles.length);\n                x = Math.floor(Math.random() * tiles[0].length)\n                loops++\n            }\n            let spec = false;\n            if (loops < 1000) {\n                const m = \"R.H.V\".split(\".\")[Math.floor(Math.random() * 3)]\n                tiles[y][x] = getColour(tiles[y][x]) + m + \"SCircle\";\n                spec = true;\n            }\n            score += 3000;\n        }, 200 * (i + 1))\n    }\n    setTimeout(() => {\n        time = 0;\n        let check = true;\n        let ic = setInterval(() => {\n            if (iColours && numberOfColours < 6) numberOfColours++;\n            else clearInterval(this);\n        }, 10000)\n        let activatingC = setInterval(() => {\n            if (cascades < 2 || matchedTiles.length > 0) {\n                ttn = ttn.concat(matchedTiles);\n                check = false;\n                // Activate the special circles.\n                let a = 0;\n                xy: for (let y = 0; y < tiles.length; y++) {\n                    for (let x = 0; x < tiles[0].length; x++) {\n                        if (tiles[y]?.[x] === \"rainbowCircle\" ||\n                            (getColour(tiles[y][x]) !== \"none\" &&\n                                \"HSCircle.VSCircle.RSCircle\".split(\".\").includes(tiles[y][x].slice(-8)))) {\n                            ttn.push([y, x]);\n                            a++;\n                            if (a > 1) break xy;\n                        }\n                    }\n                }\n                if (!isMatch(tiles) && a === 0 && !messageAnim) {\n                    pass++;\n                } else {\n                    matchCheck = new Date();\n                    if (isMatch(tiles) && new Date() - lastMatch > 2000) {\n                        lastMatch = new Date();\n                    }\n                    nullify(ttn);\n                    ttn = [];\n                    pass = 0;\n                }\n                if (pass > 21) {\n                    if (goalsDone) passLevel();\n                    else failLevel();\n                    clearInterval(activatingC)\n                    clearInterval(ic)\n                }\n                nullify(ttn);\n                ttn = [];\n            }\n        }, 300)\n    }, (timeMode ? Math.ceil(endMoves / 5) : endMoves) * 200 + 400)\n}\n\nfunction passLevel() {\n    levelEnd = true;\n    messageAnim = new Date();\n    if (!goals.some(o => o.type === \"score\") && score < targets[0]) score = targets[0]\n}\n\nfunction failLevel() {\n    endMoves = null;\n    levelEnd = true;\n    messageAnim = new Date();\n}\n\nfunction nullify(ttn) {\n    if (ttn.length > 0) {\n        cascades++\n        score += 60 * cascades;\n    }\n    let loops = 0;\n    while (ttn.length > 0 && loops < 1000) {\n        loops++;\n        for (let y = 0; y < tiles.length; y++) {\n            for (let x = 0; x < tiles[0].length; x++) {\n                let n = ttn.filter(o => o && o[0] === y && o[1] === x);\n                if (n.length > 0) {\n                    let tile = n[0];\n                    // Special candy effects?\n                    let tx = n[0][1];\n                    let ty = n[0][0];\n                    let fromRainbowCircle = !!n[0][2];\n                    if (!tiles[ty]?.[tx] && buttonTiles[ty][tx] > 0) removeButtonLayer(tx, ty)\n                    let alreadyD = false;\n                    // Create special circles\n                    tileImages = reloadTileImages();\n                    let c = regenerateCircles();\n                    if (c) {\n                        induceFalling(true);\n                        induceFalling();\n                    }\n                    let st = tiles[ty][tx]\n                    if (!encasingBlockerTiles[ty]?.[tx] && tiles[ty] && tiles[ty][tx] && tiles[ty][tx] !== \"yellowCircle\") switch (tiles[ty][tx].slice(-8)) {\n                        case \"owCircle\":\n                            // Funny, but rainbow circle.\n                            let targetColour = _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.colourList[Math.floor(Math.random() * numberOfColours)];\n                            for (let y = 0; y < tiles.length; y++) {\n                                for (let x = 0; x < tiles[0].length; x++) {\n                                    if (getColour(tiles[y][x]) == targetColour) {\n                                        // Remove tile.\n                                        ttn.push([y, x, true]);\n                                    }\n                                }\n                            }\n                            break;\n                        case \"HSCircle\":\n                            // Horizontal striped\n                            // Clear all horizontal spaces.\n                            for (let x = 0; x < tiles[0].length; x++) {\n                                ttn.push([ty, x])\n                            }\n                            stripedAnim.push({\n                                x: tx,\n                                y: ty,\n                                isVertical: false,\n                                isRadial: false,\n                                id: said++,\n                                type: st\n                            })\n                            break;\n                        case \"VSCircle\":\n                            // Vertical striped\n                            // Clear all vertical spaces.\n                            for (let y = 0; y < tiles.length; y++) {\n                                ttn.push([y, tx])\n                            }\n                            stripedAnim.push({\n                                x: tx,\n                                y: ty,\n                                isVertical: true,\n                                isRadial: false,\n                                id: said++,\n                                type: st\n                            })\n                            break;\n                        case \"RSCircle\":\n                            let damage = damaged(tiles[ty]?.[tx], tx, ty, encasingBlockerTiles[ty][tx]);\n                            tiles[ty][tx] = damage;\n                            alreadyD = true;\n                            if (buttonTiles[ty][tx] > 0) removeButtonLayer(tx, ty);\n                            let isARS = (tiy, tix) => tiles[tiy] && tiles[tiy]?.[tix] && tiles[tiy]?.[tix].slice(-9) === \"ARSCircle\";\n                            // Radially striped\n                            if (tiles[ty - 1] && tiles[ty - 1][tx - 1]) ttn.push([ty - 1, tx - 1, true]);\n                            if (tiles[ty - 1] && tiles[ty - 1][tx]) ttn.push([ty - 1, tx, true]);\n                            if (tiles[ty - 1] && tiles[ty - 1][tx + 1]) ttn.push([ty - 1, tx + 1, true]);\n                            if (tiles[ty][tx - 1]) ttn.push([ty, tx - 1, true]);\n                            if (tiles[ty][tx + 1]) ttn.push([ty, tx + 1, true]);\n                            if (tiles[ty + 1] && tiles[ty + 1][tx - 1]) ttn.push([ty + 1, tx - 1, true]);\n                            if (tiles[ty + 1] && tiles[ty + 1][tx]) ttn.push([ty + 1, tx, true]);\n                            if (tiles[ty + 1] && tiles[ty + 1][tx + 1]) ttn.push([ty + 1, tx + 1, true]);\n                            stripedAnim.push({\n                                x: tx,\n                                y: ty,\n                                isVertical: false,\n                                isRadial: true,\n                                id: said++,\n                                type: st\n                            })\n                            break;\n                    }\n                    if (tiles[ty] && tiles[ty][tx] !== \"none\") {\n                        let damage;\n                        damage = damaged(tiles[ty][tx], tx, ty, encasingBlockerTiles[ty][tx], true, fromRainbowCircle);\n                        if (!alreadyD) tiles[ty][tx] = damage;\n                        if ((!damage || !tiles[ty][tx]) && buttonTiles[ty][tx] > 0) removeButtonLayer(tx, ty)\n                    }\n                    ttn = ttn.filter(o => o[0] !== ty || o[1] !== tx);\n                    tileImages = tileImages.filter(o => o.tileX !== tile[1] || o.tileY !== tile[0]);\n                }\n            }\n        }\n    }\n    makeSpecials();\n    regenerateCircles();\n    induceFalling();\n}\n\nfunction removeButtonLayer(x, y) {\n    buttonTiles[y][x]--;\n    addScore(1000, (fromTile[0] + toTile[0]) / 2, (fromTile[1] + toTile[1]) / 2, \"bubble\" + (buttonTiles[y][x] + 1))\n    collectGoal(\"button\", x, y, \"button\" + (buttonTiles[y][x] + 1))\n}\n\nfunction makeSpecials() {\n    let doneSpecials = [];\n    for (let i = 0; i < specialsToMake.length; i++) {\n        let s = specialsToMake[i];\n        if (doneSpecials.some(o => o.x === s.x && o.y === s.y && o.type === s.type)) continue;\n        tiles[s.y][s.x] = s.type;\n        if ([\"HSCircle\", \"VSCircle\"].includes(s.type.slice(-8))) {\n            collectGoal(getColour(s.type) + \"_circle\", s.x, s.y, getColour(s.type) + \"Circle\")\n        }\n        doneSpecials.push(s);\n    }\n    specialsToMake = [];\n}\n\nfunction reloadTileImages() {\n    let t = [];\n    for (let y = 0; y < tiles.length; y++) for (let x = 0; x < tiles[0].length; x++) {\n        let pixel = gridToPixel(x, y, X_OFFSET, Y_OFFSET, 72);\n        t.push({\n            type: tiles[y][x],\n            x: pixel[0] - 32,\n            y: pixel[1] - 32,\n            tileX: x,\n            tileY: y,\n            id: ti++\n        });\n    }\n    return t;\n}\n\nfunction regenerateCircles() {\n    let changed = false;\n    for (let y = GRID_HEIGHT - 1; y >= 0; y--) {\n        for (let x = 0; x < GRID_WIDTH; x++) {\n            if (tiles[y][x]) continue;\n            if (teleporters[y][x][1]) {\n                // Get the circle from the entrance.\n                let et = null;\n                for (let tx = 0; tx < teleporters[0].length; tx++) {\n                    for (let ty = 0; ty < teleporters.length; ty++) {\n                        if (teleporters[ty]?.[tx]?.[0] === teleporters[y][x][1]) {\n                            et = [tx, ty]\n                        }\n                    }\n                }\n                if (et && canFall(tiles[et[1]][et[0]], et[0], et[1])) {\n                    // Teleporting!\n                    tiles[y][x] = tiles[et[1]][et[0]]\n                    tiles[et[1]][et[0]] = null;\n                    induceFalling();\n                }\n            } else {\n                let s = false;\n                if (!spawningTiles.some(o => o[0] === x && o[1] === y)) {\n                    s = true;\n                }\n                if (cannonTiles[y][x].length > 0) {\n                    let c = Math.random() > 0.5 ? cannonTiles[y][x] : cannonTiles[y][x].slice().reverse();\n                    for (let type of c) {\n                        let layered = \"watermelon\".split(\".\").includes(type);\n                        let amount = 0;\n                        if (type === \"globe\") {\n                            amount = tiles.flat().filter(o => \"globe,globeHolder\".split(\",\").includes(o)).length\n                        } else if (\"vertical_striped_circle,horizontal_striped_circle,radial_circle\".split(\",\").includes(type)) {\n                            amount = tiles.flat().filter(o => o && o.slice(-8) === type[0].toUpperCase() + \"SCircle\").length\n                        } else if (layered) {\n                            for (let i = 0; i < 10; i++) {\n                                let a = tiles.flat().filter(o => o === type + String(i)).length;\n                                amount += a;\n                            }\n                        } else amount = tiles.flat().filter(o => o === type).length;\n                        let data = cannonData.filter(o => o.type === type)[0];\n                        if (data) {\n                            // Max?\n                            if (data.max) {\n                                let shouldSpawn = true;\n                                if (\"vertical_striped_circle,horizontal_striped_circle,radial_circle\".split(\",\").includes(type) && showdownStarted) shouldSpawn = false;\n                                if (type === \"globe\" && goals.some(o=>o.type===\"globe\") && amount >= (goals.filter(o=>o.type===\"globe\")[0].amount - goalsCollected.globe)) shouldSpawn = false;\n                                if (amount < data.max && shouldSpawn) {\n                                    // Spawn!\n                                    const r = _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.colourList[Math.floor(Math.random() * numberOfColours)];\n                                    const l = {\n                                        watermelon: \"watermelon\" + (data.layer || 1),\n                                        globe: \"globe\",\n                                        vertical_striped_circle: r + \"VSCircle\",\n                                        horizontal_striped_circle: r + \"HSCircle\",\n                                        radial_circle: r + \"RSCircle\"\n                                    }\n                                    tiles[y][x] = l[type];\n                                    s = true;\n                                    changed = true;\n                                }\n                            }\n                        }\n                    }\n                }\n                if (!s) { tiles[y][x] = sCircles[Math.floor(Math.random() * numberOfColours)];\n                changed = true; }\n            }\n        }\n    }\n    if (changed) {\n        induceFalling();\n        regenerateCircles();\n    }\n    return changed;\n}\n\nfunction induceFalling(s) {\n    s = false;\n    tileImagePosChanges = [];\n    let changed = false;\n    slide = false;\n    for (let z = 0; z < 2; z++) {\n        for (let y = tiles.length - 1; y >= 0; y--) {\n            for (let x = 0; x < tiles[0].length; x++) {\n                if (!tiles[y][x] || tiles[y][x] === \"none\") continue;\n                let newY = y;\n                let newX = x;\n                let tileType = tiles[newY][newX];\n                if (canFall(tileType, newX, newY)) while (newY < tiles.length - 1 && !tiles[newY + 1][newX] && tiles[newY + 1][newX] !== \"none\") {\n                    changed = true;\n                    newY++;\n                }\n                let t = tiles[y][x];\n                tiles[y][x] = null;\n                tiles[newY][newX] = t;\n                let timage = tileImages.filter(o => o.tileX === x && o.tileY === y)[0];\n                const fpt = 1;\n            }\n            for (let x = 0; x < tiles[0].length; x++) {\n                if (!tiles[y][x] || tiles[y][x] === \"none\") continue;\n                let newY = y;\n                let newX = x;\n                let tileType = tiles[newY][newX];\n                // Check for sliding.\n                // Left side\n                /*\n                    []  []\n                    ^ () < EMPTY\n                */\n                // Right side\n                /*\n                    []  [] <\n                      () < EMPTY\n                */\n                if (slide && !s && canFall(tileType, newX, newY) && !tiles[newY + 1]?.[newX - 1]) while (newX > 0 && (!tiles[newY + 1] || tiles[newY + 1][newX]) &&\n                    tiles[newY + 1] && !tiles[newY + 1]?.[newX - 1]) {\n                    newX--;\n                    newY++;\n                    changed = true;\n                    while (newY < tiles.length - 1 && !tiles[newY + 1][newX] && tiles[newY + 1][newX] !== \"none\") {\n                        newY++;\n                    }\n                }\n                if (slide && !s && canFall(tileType, newX, newY) && !tiles[newY + 1]?.[newX + 1]) while ((newX < tiles[0].length - 1) && (!tiles[newY + 1] || tiles[newY + 1][newX]) &&\n                    tiles[newY + 1] && !tiles[newY + 1]?.[newX + 1]) {\n                    newX++;\n                    newY++;\n                    changed = true;\n                    while (newY < tiles.length - 1 && !tiles[newY + 1][newX] && tiles[newY + 1][newX] !== \"none\") {\n                        newY++;\n                    }\n                }\n                let t = tiles[y][x];\n                tiles[y][x] = null;\n                tiles[newY][newX] = t;\n                if (t === \"globe\" && !encasingBlockerTiles[y][x] && globeExitTiles.some(o => o[0] === newX && o[1] === newY)) {\n                    // Collect the globe.\n                    collectGoal(\"globe\", newX, newY, \"globe\");\n                    addScore(10000, newX, newY, \"globe\");\n                    tiles[newY][newX] = null;\n                }\n            }\n        }\n        slide = true;\n    }\n    if (isMatch(tiles)) {\n        changed = true;\n        lastMatch = new Date();\n    }\n    if (changed) {\n        lastMatch = new Date();\n    } else {\n        lastMatch = null;\n        matchCheck = new Date();\n    }\n}\n\nfunction isMatch(t) {\n    let im = false;\n    for (let my = 0; my < t.length; my++) {\n        h: for (let mx = 0; mx < t[0].length; mx++) {\n            if (getColour(t[my][mx]) === \"none\") continue h;\n            let checkValid = checkForMatch(mx, my, t[my][mx], t);\n            if (mx < 0 || my < 0 || mx >= t[0].length || my >= t.length) checkValid = false;\n            if (checkValid) im = true;\n        }\n    }\n    for (let mx = 0; mx < t[0].length; mx++) {\n        j: for (let my = 0; my < t.length; my++) {\n            if (getColour(t[my][mx]) === \"none\") continue j;\n            let checkValid = checkForMatch(mx, my, t[my][mx], t);\n            if (mx < 0 || my < 0 || mx >= t[0].length || my >= t.length) checkValid = false;\n            if (checkValid) im = true;\n        }\n    }\n    return im;\n}\n\n\nfunction checkForSwipe() {\n    /// No swipe yet\n    if (mouse.swipeStatus == 0) {\n        if (mouse.held) {\n            mouse.swipeFrom = mouse.down;\n            mouse.swipeStatus++\n        }\n    } else if (mouse.swipeStatus == 1) {\n        // Holding right now\n        if (!mouse.held) {\n            mouse.swipeTo = mouse.up;\n            mouse.swipeStatus++\n        }\n    } else if (mouse.swipeStatus == 2 && canMakeMatch) {\n        mouse.swipeStatus = 0;\n        let swipeX = mouse.swipeTo[0] - mouse.swipeFrom[0];\n        let swipeY = mouse.swipeTo[1] - mouse.swipeFrom[1];\n        // Check if there's enough swipe.\n        if (Math.abs(swipeX) ** 2 + Math.abs(swipeY) ** 2 < _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.SWIPE_THRESHOLD ** 2) {\n            mouse.swipeStatus = 0;\n            return;\n        }\n        prevTiles = tiles;\n        if (Math.abs(swipeX) > Math.abs(swipeY)) {\n            // Horizontal\n            if (swipeX >= 0) {\n                // Right\n                swipe(1, 0)\n            } else {\n                // Left\n                swipe(-1, 0)\n            }\n        } else {\n            // Vertical\n            if (swipeY >= 0) {\n                // Down\n                swipe(0, 1)\n            } else {\n                // Up\n                swipe(0, -1)\n            }\n        }\n        mouse.swipeFrom = [0, 0];\n        mouse.swipeTo = [0, 0];\n    }\n\n}\n\nfunction swipe(x, y) {\n    prevTiles = tiles;\n    fromTile = pixelToGrid(mouse.down[0], mouse.down[1], X_OFFSET, Y_OFFSET, 72);\n    let test = gridToPixel(fromTile[0], fromTile[1], X_OFFSET, Y_OFFSET, 72);\n\n    toTile = [fromTile[0] + x, fromTile[1] + y]\n    if (fromTile && fromTile[0] >= 0 && fromTile[1] >= 0 && fromTile[0] < GRID_WIDTH && fromTile[1] < GRID_HEIGHT) {\n        if (toTile && toTile[0] >= 0 && toTile[1] >= 0 && toTile[0] < GRID_WIDTH && toTile[1] < GRID_HEIGHT) {\n            // Try the swipe.\n            let therTiles = tiles;\n            let temp = therTiles[fromTile[1]][fromTile[0]];\n            therTiles[fromTile[1]][fromTile[0]] = therTiles[toTile[1]][toTile[0]];\n            therTiles[toTile[1]][toTile[0]] = temp;\n            let valid = false;\n            // Check for matches.\n            for (let my = 0; my < therTiles.length; my++) {\n                for (let mx = 0; mx < therTiles[0].length; mx++) {\n                    let checkValid = checkForMatch(mx, my, therTiles[my][mx], therTiles);\n                    if (checkValid) valid = true;\n                }\n            }\n            let from = therTiles[fromTile[1]][fromTile[0]];\n            let to = therTiles[toTile[1]][toTile[0]];\n            if (from === \"rainbowCircle\" && (getColour(to) !== \"none\" || to === \"rainbowCircle\")) {\n                isRCMatch = true;\n                valid = true;\n            } else if (to === \"rainbowCircle\" && (getColour(from) !== \"none\" || from === \"rainbowCircle\")) {\n                isRCMatch = true;\n                valid = true;\n            } else isRCMatch = false;\n            let spec = from?.slice(-8)\n            let tspec = to?.slice(-8)\n            if (spec === \"VSCircle\" || spec === \"HSCircle\") {\n                if (tspec === \"RSCircle\") specialComboType = \"SR\"\n                else if (tspec === \"VSCircle\" || tspec === \"HSCircle\") specialComboType = \"SS\"\n                else specialComboType = null;\n            } else if (spec === \"RSCircle\") {\n                if (tspec === \"RSCircle\") specialComboType = \"RR\"\n                else if (tspec === \"VSCircle\" || tspec === \"HSCircle\") specialComboType = \"SR\"\n                else specialComboType = null;\n            }\n            if (specialComboType) valid = true;\n            if (_files_constants_js__WEBPACK_IMPORTED_MODULE_5__.CANNOT_MATCH.includes(therTiles[fromTile[1]][fromTile[0]]) || _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.CANNOT_MATCH.includes(therTiles[toTile[1]][toTile[0]])) valid = false;\n            if (encasingBlockerTiles[fromTile[1]][fromTile[0]] || encasingBlockerTiles[toTile[1]][toTile[0]]) valid = false;\n            if (valid) {\n                hasMadeMatch = true;\n                canMakeMatch = false;\n                lastMatch = new Date();\n                matchHappening = true;\n                moves--;\n                lastActualMatch = new Date();\n            } else {\n                tiles[toTile[1]][toTile[0]] = tiles[fromTile[1]][fromTile[0]];\n                tiles[fromTile[1]][fromTile[0]] = temp;\n            }\n        }\n    }\n}\n\nlet loops;\n\nfunction makeTiles(w, h, c) {\n    tileImages = [];\n    let t;\n    loops = 0;\n    while ((loops === 0 || !hasValidMove(t)) && loops <= _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.MAX_BOARD_LOOPS) {\n        t = [];\n        for (let y = 0; y < h; y++) {\n            let h = [];\n            for (let k = 0; k < w; k++) h.push(null);\n            t.push(h);\n            for (let x = 0; x < w; x++) {\n                let tile = sCircles[Math.floor(Math.random() * c)];\n                t[y][x] = tile;\n                let c_loops = 0;\n                while (checkForMatch(x, y, tile, t) && c_loops <= _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.MAX_CIRCLE_LOOPS) {\n                    c_loops++\n                    tile = sCircles[Math.floor(Math.random() * c)];\n                    if (t[y] && t[y][x]) t[y][x] = tile;\n                }\n            }\n        }\n        loops++;\n    }\n    return t;\n}\n\nfunction checkForMatch(x, y, c, tiles) {\n    let colour = getColour(c)\n    if (colour === \"none\") return false;\n    if (x > 1) {\n        if (tiles[y] && tiles[y][x - 1] && tiles[y][x - 2] && getColour(tiles[y][x - 1]) === colour && getColour(tiles[y][x - 2]) === colour) {\n            return true;\n        }\n    }\n    if (y > 1) {\n        if (tiles[y - 1] && tiles[y - 1][x] && tiles[y - 2][x] && getColour(tiles[y - 1][x]) === colour && getColour(tiles[y - 2][x]) === colour) {\n            return true;\n        }\n    }\n    return false;\n}\n\nlet tilesF;\n\nfunction hasValidMove(tiles) {\n    tilesF = [...tiles];\n    let valid = false;\n    // Horizontal Swipes?\n    // Vertical Swipes?\n    const swipeChecks = [(c) => {\n        for (let y = 0; y < tilesF.length; y++) {\n            for (let x = 0; x < tilesF[0].length - 1; x++) {\n                let first = tilesF[y][x];\n                let sec = tilesF[y][x + 1];\n                tilesF[y][x] = sec;\n                tilesF[y][x + 1] = first;\n                for (let my = 0; my < tilesF.length; my++) {\n                    for (let mx = 0; mx < tilesF[0].length; mx++) {\n                        if (checkForMatch(mx, my, tilesF[my][mx], tilesF)) {\n                            tilesF[y][x] = first;\n                            tilesF[y][x + 1] = sec;\n                            c();\n                        }\n                    }\n                }\n            }\n        }\n    },\n    (c) => {\n        for (let y = 0; y < tilesF.length - 1; y++) {\n            for (let x = 0; x < tilesF[0].length; x++) {\n                let first = tilesF[y][x];\n                let sec = tilesF[y + 1][x];\n                tilesF[y][x] = sec;\n                tilesF[y + 1][x] = first;\n                for (let my = 0; my < tilesF.length; my++) {\n                    for (let mx; mx < tilesF[0].length; mx++) {\n                        tilesF[y][x] = first;\n                        tilesF[y + 1][x] = sec;\n                        if (checkForMatch(mx, my, tilesF[my][mx], tilesF)) c();\n                    }\n                }\n            }\n        }\n    }]\n    if (Math.random > 0.5) swipeChecks.reverse();\n    swipeChecks[0](() => { valid = true });\n    swipeChecks[1](() => { valid = true });\n    return valid;\n}\n\nasync function getLevelTargets(l) {\n    try {\n        let levelData = await __webpack_require__(\"./src lazy recursive ^\\\\.\\\\/.*\\\\/.*\\\\.json$\")(`./${_files_constants_js__WEBPACK_IMPORTED_MODULE_5__.TEST_MODE ? \"test_levels\" : \"levels\"}/${l}.json`);\n        return [levelData.targets, levelData ? levelData.hard || 0 : 0];\n    } catch (e) {\n        return [[Infinity, Infinity, Infinity], levelData ? levelData.hard || 0 : 0]\n    }\n}\n\nasync function getLevelC(l) {\n    try {\n        let levelData = await __webpack_require__(\"./src lazy recursive ^\\\\.\\\\/.*\\\\/.*\\\\.json$\")(`./${_files_constants_js__WEBPACK_IMPORTED_MODULE_5__.TEST_MODE ? \"test_levels\" : \"levels\"}/${l}.json`);\n\n        // Get the colour.\n        const gl = levelData.goals\n        const hard = levelData.hard || 0\n        if (hard > 0) {\n            if (hard === 1) return [\"#ff8f2e\", \"#ff7700\", \"#bb5500\"]\n            if (hard === 2) return [\"#ff2222\", \"#ab0e0e\", \"#730000\"]\n            if (hard === 3) return [\"#333333\", \"#222222\", \"#111111\"]\n        }\n        let gameTypes = [];\n\n        if (levelData.time && !levelData.moves) {\n            gameTypes.push(gl.some(o => o.type === \"score\") ? _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.LS_COLOURS.timemove : _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.LS_COLOURS.time)\n        }\n\n        for (let g = 0; g < gl.length; g++) {\n            const goal = gl[g];\n            if (goal.type === \"score\") gameTypes.push(\"moves\");\n            else if (goal.type === \"button\") gameTypes.push(\"button\");\n            else if (goal.type === \"globe\") gameTypes.push(\"globe\");\n            else gameTypes.push(\"order\");\n\n            switch (gameTypes[gameTypes.length - 1]) {\n                case \"moves\": if (!levelData.time) gameTypes[gameTypes.length - 1] = _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.LS_COLOURS.moves; break;\n                case \"button\": gameTypes[gameTypes.length - 1] = _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.LS_COLOURS.button; break;\n                case \"order\": gameTypes[gameTypes.length - 1] = _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.LS_COLOURS.order; break;\n                case \"globe\": gameTypes[gameTypes.length - 1] = _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.LS_COLOURS.globe; break;\n            }\n        }\n\n        // Filter.\n        gameTypes = gameTypes.filter((item,\n            index) => gameTypes.indexOf(item) === index && item !== \"moves\");\n        return gameTypes;\n    } catch (e) {\n        return [_files_constants_js__WEBPACK_IMPORTED_MODULE_5__.LS_COLOURS.none]\n    }\n\n}\n\nfunction drawTiles(tileA) {\n    for (let h = 0; h < GRID_HEIGHT; h++) {\n        for (let w = 0; w < GRID_WIDTH; w++) {\n            let pixel = gridToPixel(w, h, X_OFFSET, Y_OFFSET, 72);\n            if (tiles[h][w] !== \"none\") ctx.drawImage(tileImage, 0, 256, 78, 78, pixel[0] - 72 + 32 - 8, pixel[1] - 72 + 32 - 8, 78, 78);\n            if (spawningTiles.some(o => o[0] === w && o[1] === h)) ctx.drawImage(tileImage, 146, 256, 76, 76, pixel[0] - 72 + 32 - 8, pixel[1] - 72 + 32 - 8, 76, 76);\n            if (buttonTiles[h][w] > 0) {\n                ctx.drawImage(tileImage, buttonTiles[h][w] * 66 - 66, 334, 64, 64, pixel[0] - 72 + 32 - 2, pixel[1] - 72 + 32 - 2, 68, 68);\n            }\n\n            const teleporter = teleporters[h][w]\n            if (teleporter[0]) {\n                // Entry teleporter\n                const tilemap = _tiles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].telEnterIndicator;\n                ctx.drawImage(tileImage, tilemap.x, tilemap.y, tilemap.s, tilemap.s, pixel[0] - 72 + 32 - 8, pixel[1] - 72 + 32 - 8, 76, 76);\n            }\n            if (teleporter[1]) {\n                // Exit teleporter\n                const tilemap = _tiles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].telExitIndicator;\n                ctx.drawImage(tileImage, tilemap.x, tilemap.y, tilemap.s, tilemap.s, pixel[0] - 72 + 32 - 8, pixel[1] - 72 + 32 - 8, 76, 76);\n            }\n            if (cannonTiles?.[h]?.[w].length > 0) {\n                const tilemap = _tiles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cannonBody;\n                ctx.drawImage(tileImage, tilemap.x, tilemap.y, 64, 64, pixel[0] - 72 + 32 - 8, pixel[1] - 72 + 32 - 8 - 36, 76, 76);\n                let spacing = 40 / cannonTiles?.[h]?.[w].length\n                let i = 1;\n                for (let type of cannonTiles?.[h]?.[w]) {\n                    const tilemap = _tiles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][type + \"Order\"];\n                    ctx.drawImage(tileImage, tilemap.x, tilemap.y, tilemap.s, tilemap.s, pixel[0] - 72 + 32 - 8 + i * spacing - (cannonTiles?.[h]?.[w].length < 2 ? 14 : 3), pixel[1] - 72 + 32 - 8 - 24, 26, 26);\n                    i++;\n                }\n            }\n            if (globeExitTiles.some(o => o[0] === w && o[1] === h)) ctx.drawImage(tileImage, 187, 464, 64, 64, pixel[0] - 72 + 32 - 8, pixel[1] - 72 + 32 - 8, 76, 76);\n        }\n    }\n    for (let h = 0; h < GRID_HEIGHT; h++) {\n        for (let w = 0; w < GRID_WIDTH; w++) {\n            const m = 500;\n            let ex = isRCMatch ? 3 : 1.7;\n            let c = isRCMatch ? 1 : 0;\n            let pixel = gridToPixel(w, h, X_OFFSET, Y_OFFSET, 72);\n            if (new Date() - lastMatch < m && matchHappening) {\n                let timeAfter = 1 - (Math.min(m, new Date() - lastActualMatch) / m);\n                let difference = [toTile[0] - fromTile[0], toTile[1] - fromTile[1]];\n                let ta = ((timeAfter + c) / (isRCMatch ? 2 : 1))\n                if (w === fromTile[0] && h === fromTile[1])\n                    pixel = gridToPixel(w + difference[0] * ta ** ex, h + difference[1] * ta ** ex, X_OFFSET, Y_OFFSET, 72);\n                if (w === toTile[0] && h === toTile[1])\n                    pixel = gridToPixel(w - difference[0] * ta ** ex, h - difference[1] * ta ** ex, X_OFFSET, Y_OFFSET, 72);\n            }\n            if (!tiles[h][w] || tiles[h][w] === \"none\") continue;\n            let tileMap;\n            if (tiles[h][w].slice(-15) === \"ExtraTimeCircle\") {\n                tileMap = _tiles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][tiles[h][w].slice(0, -15) + \"Circle\"];\n            } else {\n                tileMap = _tiles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][tiles[h][w]];\n            }\n            if (!tileMap) continue;\n            let size = (tileMap ? tileMap.s : null) || tileA;\n            if (matchedTiles.some(o => o[0] === h && o[1] === w) || goingToMatch.filter(o => o[0] === h && o[1] === w).length >= 1) {\n                ctx.globalAlpha = 0.8;\n            }\n            let trax = 0; let tray = 0;\n            let si = 0;\n            if (tiles[h][w] === \"rainbowCircle\") {\n                ctx.save();\n                trax = pixel[0] - 8; tray = pixel[1] - 8;\n                ctx.translate(trax, tray);\n                if (!encasingBlockerTiles[h][w]) ctx.rotate(Math.sin(new Date().getTime() / 500) / 4 + Math.PI * 1 / 4);\n                else ctx.rotate(Math.PI / 4)\n                ctx.translate(-trax, -tray);\n            }\n            if (tiles[h][w].startsWith(\"watermelon\") && tiles[h][w] !== \"watermelon3\") {\n                ctx.save();\n                trax = pixel[0] - 8; tray = pixel[1] - 8;\n                ctx.translate(trax, tray);\n                if (!encasingBlockerTiles[h][w]) ctx.rotate(Math.sin(new Date().getTime() / 1000) / 2);\n                ctx.translate(-trax, -tray);\n            }\n\n            if (tiles[h][w].startsWith(\"metalBall\")) si = 6;\n            if (tiles[h][w].startsWith(\"watermelon\")) si = 4;\n            if (tiles[h][w] === \"globeHolder\") {\n                si = 15;\n            }\n            ctx.drawImage(tileImage, tileMap.x, tileMap.y, size, size, pixel[0] - 72 + 32 + 4 - si / 2, pixel[1] - 72 + 32 + 4 - si / 2, 56 + si, 56 + si);\n            if (tiles[h][w] !== \"watermelon3\" && (tiles[h][w] === \"rainbowCircle\" || tiles[h][w] === \"globeHolder\" || tiles[h][w].startsWith(\"watermelon\"))) {\n                ctx.restore();\n            }\n            if (tiles[h][w].slice(-15) === \"ExtraTimeCircle\") {\n                // Add a +5 label.\n                ctx.font = \"20px Segoe UI Semibold\";\n                const textx = pixel[0] - 72 + 32 + 4 - si / 2 + 40;\n                const texty = pixel[1] - 72 + 32 + 4 - si / 2 + 20;\n                ctx.fillStyle = \"rgba(255,255,255,0.55)\";\n                ctx.strokeStyle = \"rgba(255,255,255,0.8)\";\n                ctx.fillText(\"+5\", textx, texty);\n                ctx.strokeText(\"+5\", textx, texty)\n            }\n            ctx.globalAlpha = 1;\n        }\n    }\n    for (let h = 0; h < GRID_HEIGHT; h++) {\n        for (let w = 0; w < GRID_WIDTH; w++) {\n            let pixel = gridToPixel(w, h, X_OFFSET, Y_OFFSET, 72);\n            if (encasingBlockerTiles[h] && encasingBlockerTiles[h][w]) {\n                const tilemap = _tiles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][encasingBlockerTiles[h][w]];\n                ctx.drawImage(tileImage, tilemap.x, tilemap.y, tilemap.s, tilemap.s, pixel[0] - 72 + 32 - 2, pixel[1] - 72 + 32 - 2, 68, 68);\n            }\n        }\n    }\n    for (let i = 0; i < stripedAnim.length; i++) {\n        let anim = stripedAnim[i];\n        let pixel = gridToPixel(anim.x, anim.y, X_OFFSET, Y_OFFSET, 72);\n        if (!anim.startDate) {\n            anim.startDate = new Date();\n        }\n        pixel[0] -= 32 + 8; pixel[1] -= 32 + 8;\n        let colours = [255, 255, 255]\n        switch (getColour(anim.type)) {\n            case \"red\": colours = [255, 0, 0]; break;\n            case \"blue\": colours = [0, 140, 255]; break;\n            case \"yellow\": colours = [255, 255, 40]; break;\n            case \"green\": colours = [0, 180, 0]; break;\n            case \"orange\": colours = [255, 130, 0]; break;\n            case \"purple\": colours = [200, 0, 255]; break;\n        }\n        ctx.fillStyle = \"rgba(\" + colours.join(\",\") + \",\" + (Math.max(0, 1 - (new Date() - anim.startDate) / 800) / 2) + \")\";\n        const defLength = 72 * (anim.isVertical ? GRID_HEIGHT : GRID_WIDTH);\n        const subLength = Math.min(((new Date() - anim.startDate) / 800) ** 1.3 * 1000, defLength);\n        if (anim.isVertical) {\n            // Vertical striped\n            ctx.fillRect(pixel[0], Y_OFFSET + subLength / 2, 72, defLength - subLength)\n        } else {\n            if (anim.isRadial) {\n                // Radial striped\n                const radius = Math.max(0, 120 - (subLength / 5) + (anim.isBig ? 72 : 0));\n                ctx.beginPath();\n                ctx.arc(pixel[0] + 32, pixel[1] + 32, radius, 0, 2 * Math.PI)\n                ctx.fill();\n            } else {\n                // Horizontal striped\n                ctx.fillRect(X_OFFSET + subLength / 2, pixel[1], defLength - subLength, 72)\n            }\n        }\n        if (new Date() - anim.startDate > 600) stripedAnim = stripedAnim.filter(o => o.id !== anim.id)\n    }\n}\n\nfunction pixelToGrid(x, y, xO, yO, s) {\n    return [Math.round((x - xO - 32) / s), Math.round((y - yO - 32) / s)]\n}\n\nfunction getColour(t) {\n    if (!t) return \"none\";\n    return _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.colourList.filter(o => t.toLowerCase().includes(o))[0] || \"none\"\n}\n\nfunction gridToPixel(x, y, xO, yO, s) {\n    return [xO + x * s + 32, yO + y * s + 32]\n}\n\nfunction damaged(t, x, y, e, c, rainbow) {\n    if (!t) return null;\n    // Return the damaged tile.\n    let r;\n    if (!e) {\n        switch (t) {\n            case \"none\": r = \"none\"; break;\n            case \"metalBall1\": r = null; break;\n            case \"metalBall2\": r = \"metalBall1\"; break;\n            case \"metalBall3\": r = \"metalBall2\"; break;\n            case \"metalBall4\": r = \"metalBall3\"; break;\n            case \"metalBall5\": r = \"metalBall4\"; break;\n            case \"metalBall6\": r = \"metalBall5\"; break;\n            case \"watermelon1\": r = null; break;\n            case \"watermelon2\": r = \"watermelon1\"; break;\n            case \"watermelon3\": r = \"watermelon2\"; break;\n            case \"globe\":\n                r = t; break;\n            case \"globeHolder\": r = \"globe\"; break;\n            default: r = null; break;\n        }\n        if (t && t.startsWith(\"metalBall\")) {\n            addScore(40, x, y, t)\n            collectGoal(\"metal_ball\", x, y, t)\n        }\n        if (t && t.startsWith(\"watermelon\")) {\n            addScore(30, x, y, t)\n            collectGoal(\"watermelon\", x, y, t)\n        }\n        if (getColour(t) !== \"none\") {\n            collectGoal(getColour(t) + \"_circle\", x, y, getColour(t) + \"Circle\")\n            if (t.endsWith(\"HSCircle\") || t.endsWith(\"VSCircle\")) {\n                addScore(1000, x, y, t)\n                collectGoal(\"striped_circle\", x, y, t)\n            }\n            if (t.endsWith(\"RSCircle\")) {\n                addScore(2000, x, y, t)\n                collectGoal(\"radial_circle\", x, y, t)\n            }\n            if (t.endsWith(\"ExtraTimeCircle\") && !showdownStarted) {\n                addScore(1000, x, y, t)\n                // Increase time.\n                time = Math.min(maxTime, time + 5)\n            }\n        } else {\n            if (t === \"rainbowCircle\") {\n                addScore(5000, x, y, t)\n                collectGoal(\"rainbow_circle\", x, y, t)\n            }\n        }\n        if (getColour(t) !== \"none\") {\n            // Check for orders?\n            // Check for nearby metal balls.\n            if (rainbow) {\n                if (tiles[y + 1]?.[x] && !encasingBlockerTiles[y + 1][x] && tiles[y + 1][x].startsWith(\"metalBall\")) tiles[y + 1][x] = damaged(tiles[y + 1][x], x, y + 1)\n                if (tiles[y - 1]?.[x] && !encasingBlockerTiles[y - 1][x] && tiles[y - 1][x].startsWith(\"metalBall\")) tiles[y - 1][x] = damaged(tiles[y - 1][x], x, y - 1)\n                if (tiles[y] && !encasingBlockerTiles[y][x + 1] && tiles[y][x + 1]?.startsWith(\"metalBall\")) tiles[y][x + 1] = damaged(tiles[y][x + 1], x + 1, y)\n                if (tiles[y] && !encasingBlockerTiles[y][x - 1] && tiles[y][x - 1]?.startsWith(\"metalBall\")) tiles[y][x - 1] = damaged(tiles[y][x - 1], x - 1, y)\n                if (tiles[y + 1]?.[x] && !encasingBlockerTiles[y + 1][x] && tiles[y + 1][x].startsWith(\"watermelon\")) tiles[y + 1][x] = damaged(tiles[y + 1][x], x, y + 1)\n                if (tiles[y - 1]?.[x] && !encasingBlockerTiles[y - 1][x] && tiles[y - 1][x].startsWith(\"watermelon\")) tiles[y - 1][x] = damaged(tiles[y - 1][x], x, y - 1)\n                if (tiles[y] && !encasingBlockerTiles[y][x + 1] && tiles[y][x + 1]?.startsWith(\"watermelon\")) tiles[y][x + 1] = damaged(tiles[y][x + 1], x + 1, y)\n                if (tiles[y] && !encasingBlockerTiles[y][x - 1] && tiles[y][x - 1]?.startsWith(\"watermelon\")) tiles[y][x - 1] = damaged(tiles[y][x - 1], x - 1, y)\n            }\n            // Check for bubbled tiles!\n            if (tiles[y + 1]?.[x] && encasingBlockerTiles[y + 1][x]?.startsWith(\"bubble\")) tiles[y + 1][x] = damaged(tiles[y + 1][x], x, y + 1, encasingBlockerTiles[y + 1][x])\n            if (tiles[y - 1]?.[x] && encasingBlockerTiles[y - 1][x]?.startsWith(\"bubble\")) tiles[y - 1][x] = damaged(tiles[y - 1][x], x, y - 1, encasingBlockerTiles[y - 1][x])\n            if (tiles[y] && tiles[y][x + 1] && encasingBlockerTiles[y][x + 1]?.startsWith(\"bubble\")) tiles[y][x + 1] = damaged(tiles[y][x + 1], x + 1, y, encasingBlockerTiles[y][x + 1])\n            if (tiles[y] && tiles[y][x - 1] && encasingBlockerTiles[y][x - 1]?.startsWith(\"bubble\")) tiles[y][x - 1] = damaged(tiles[y][x - 1], x - 1, y, encasingBlockerTiles[y][x - 1])\n        }\n    } else {\n        r = t;\n        let newE = null;\n        switch (e) {\n            case \"drain2\": newE = \"drain1\"; break;\n            case \"bubble2\": newE = \"bubble1\"; break;\n            case \"bubble3\": newE = \"bubble2\"; break;\n        }\n        if (!goalsDone && (!timeMode && moves < 1) && showdownStarted) newE = e;\n        encasingBlockerTiles[y][x] = newE;\n    }\n    return r;\n}\n\nfunction collectGoal(g, x, y, t, a) {\n    if (a) {\n        if (g !== \"button\") goalsCollected[g] += a;\n    } else {\n        if (g !== \"button\") goalsCollected[g]++;\n    }\n    let targetGoal = goals.filter(o => o.type === g)[0];\n    if (!targetGoal) return;\n    const collected = g === \"button\" ? buttonTiles.flat().reduce((a, b) => a + b, 0) : goalsCollected[g];\n    if (_files_constants_js__WEBPACK_IMPORTED_MODULE_5__.NOT_COLLECTED.includes(g)) return;\n    let isComplete = g === \"button\" ? (collected > initialButtons) : (collected > targetGoal.amount);\n    if (g === \"score\") isComplete = targetAnim[0]\n    if (!isComplete) goalAnim.push({\n        x: x - 1,\n        y: y,\n        type: g,\n        wasTile: t,\n        id: said++\n    })\n}\n\nfunction sizeCanvas() {\n    const A_R = _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH / _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT; // aspect ratio\n    let h, w, x, y;\n    let iH = window.innerHeight, iW = window.innerWidth\n    if (iH * A_R < iW) {\n        h = iH;\n        w = iH * A_R\n    } else {\n        w = iW;\n        h = iW / A_R\n    }\n    canvas.style.width = w + \"px\";\n    canvas.style.height = h + \"px\";\n    mouse.m[0] = w;\n    mouse.m[1] = h;\n    // CENTER\n    x = (iW - w) / 2;\n    y = (iH - h) / 2;\n    canvas.style.left = x + \"px\";\n    canvas.style.top = y + \"px\";\n}\n\nasync function loadLevel(l) {\n    goalsDone = false;\n    score = 0;\n    targets = [Infinity, Infinity, Infinity];\n    loadingDone = false;\n    showdownStarted = false;\n    for (let goal in goalsCollected) {\n        goalsCollected[goal] = 0;\n        goalsAnimCollected[goal] = 0;\n    }\n    goalsAnimCollected.button = 0;\n    slide = false;\n    let finalTiles = [];\n    messageAnim = null;\n    endMoves = null;\n    levelEnd = false;\n    let levelData = await __webpack_require__(\"./src eager recursive ^\\\\.\\\\/.*\\\\/.*\\\\.json$\")(`./${_files_constants_js__WEBPACK_IMPORTED_MODULE_5__.TEST_MODE ? \"test_levels\" : \"levels\"}/${l}.json`);\n    if (!levelData) throw Error(`Level ${l} doesn't exist!`)\n    /** The grid width. */\n    GRID_WIDTH = levelData.width || 9;\n\n    /** The grid height. */\n    GRID_HEIGHT = levelData.height || 9;\n\n    /** The X board offset. */\n    X_OFFSET = 450 + 32 + 72 * ((9 - GRID_WIDTH) / 2);\n\n    /** The Y board offset. */\n    Y_OFFSET = 10 + 32 + 16 + 72 * ((9 - GRID_HEIGHT) / 2);\n\n    immediateShowdown = levelData.immediateShowdown ?? true;\n\n    levelHard = levelData.hard || 0\n    let lo = 0;\n    hasMadeMatch = false;\n    while ((lo === 0 || isMatch(finalTiles)) && lo < 1000) {\n        buttonTiles = [];\n        encasingBlockerTiles = [];\n        teleporters = [];\n        for (let i = 0; i < GRID_HEIGHT; i++) {\n            let t = [];\n            let v = [];\n            let w = [];\n            for (let j = 0; j < GRID_WIDTH; j++) {\n                t.push([null, null]);\n                v.push(null);\n                w.push(0);\n            }\n            encasingBlockerTiles.push(v);\n            buttonTiles.push(w);\n            teleporters.push(t);\n        }\n        level = l;\n        targetAnim = [null, null, null]\n        // Load the level.\n        spawningTiles = [];\n        globeExitTiles = [];\n        if (!levelData.colours) throw Error(\"A colours property wasn't specified in the level JSON.\")\n        numberOfColours = levelData.colours;\n        iColours = !!levelData.increaseColours;\n        goals = levelData.goals;\n        targets = levelData.targets\n        for (let i = 0; i < goals.length; i++) goals[i].completion = null;\n        finalTiles = makeTiles(GRID_WIDTH + 2, GRID_HEIGHT, levelData.colours);\n        finalTiles = finalTiles.map(o => o.slice(0, -2))\n        buttonTiles = []; encasingBlockerTiles = []; cannonTiles = [];\n        cannonData = levelData.cannons || [];\n        for (let i = 0; i < GRID_HEIGHT; i++) {\n            let t = [];\n            for (let j = 0; j < GRID_WIDTH; j++) {\n                t.push(0)\n            }\n            buttonTiles.push(t)\n            t = [];\n            for (let j = 0; j < GRID_WIDTH; j++) {\n                t.push(null)\n            }\n            encasingBlockerTiles.push(t)\n            t = [];\n            for (let j = 0; j < GRID_WIDTH; j++) {\n                t.push([])\n            }\n            cannonTiles.push(t)\n        }\n        // Load some crap.\n        if (!levelData.moves && !levelData.time) throw Error(\"A moves or time property wasn't specified in the level JSON.\")\n        timeMode = !!levelData.time;\n        if (timeMode) {\n            time = levelData.time;\n            maxTime = levelData.time;\n            moves = 0;\n        }\n        if (!levelData.tilemap) throw Error(\"A tilemap property wasn't specified in the level JSON.\")\n        moves = levelData.moves;\n        if (levelData.tilemap.length !== GRID_HEIGHT) throw Error(\"The tilemap must have \" + GRID_HEIGHT + \" vertical tiles per column.\")\n        for (let y = 0; y < GRID_HEIGHT; y++) {\n            let xTiles = levelData.tilemap[y].split(\",\");\n            if (xTiles.length !== GRID_WIDTH) throw Error(\"The tilemap must have \" + GRID_WIDTH + \" horizontal tiles per row.\");\n            for (let x = 0; x < xTiles.length; x++) {\n                let tileStuff = xTiles[x];\n                let t = tileStuff.match(/.{1,2}/g);\n                let colourFlag = null;\n                let specialFlag = null;\n                for (let i = 0; i < t.length; i++) {\n                    let tile = t[i]\n                    if (tile[0] === \"T\") {\n                        i++;\n                        tile += t[i];\n                    }\n                    switch (tile) {\n                        // Tiles\n                        case \"--\": finalTiles[y][x] = \"none\"; break;\n                        case \"-O\": finalTiles[y][x] = null; break;\n                        // circles\n                        case \"*S\": spawningTiles.push([x, y]); break;\n                        // Fixed circles\n                        case \"*0\": colourFlag = \"blue\"; break;\n                        case \"*1\": colourFlag = \"green\"; break;\n                        case \"*2\": colourFlag = \"orange\"; break;\n                        case \"*3\": colourFlag = \"purple\"; break;\n                        case \"*4\": colourFlag = \"red\"; break;\n                        case \"*5\": colourFlag = \"yellow\"; break;\n                        // Special c\n                        case \"*|\": specialFlag = \"VS\"; break;\n                        case \"*-\": specialFlag = \"HS\"; break;\n                        case \"*O\": specialFlag = \"RS\"; break;\n                        case \"*/\": finalTiles[y][x] = \"rainbowCircle\"; break;\n                        case \"*+\": specialFlag = \"ExtraTime\"; break;\n                        // Buttons\n                        case \"B1\":\n                            buttonTiles[y][x] = 1;\n                            break;\n                        case \"B2\":\n                            buttonTiles[y][x] = 2;\n                            break;\n                        case \"B3\":\n                            buttonTiles[y][x] = 3;\n                            break;\n                        // Blockers\n                        case \"D1\": encasingBlockerTiles[y][x] = \"drain1\"; break;\n                        case \"D2\": encasingBlockerTiles[y][x] = \"drain2\"; break;\n                        case \"b1\": encasingBlockerTiles[y][x] = \"bubble1\"; break;\n                        case \"b2\": encasingBlockerTiles[y][x] = \"bubble2\"; break;\n                        case \"b3\": encasingBlockerTiles[y][x] = \"bubble3\"; break;\n                        // Globes\n                        case \"G1\": finalTiles[y][x] = \"globe\"; break;\n                        case \"G2\": finalTiles[y][x] = \"globeHolder\"; break;\n                        case \"G-\": globeExitTiles.push([x, y]); break;\n                        // Metal balls\n                        case \"M1\": finalTiles[y][x] = \"metalBall1\"; break;\n                        case \"M2\": finalTiles[y][x] = \"metalBall2\"; break;\n                        case \"M3\": finalTiles[y][x] = \"metalBall3\"; break;\n                        case \"M4\": finalTiles[y][x] = \"metalBall4\"; break;\n                        case \"M5\": finalTiles[y][x] = \"metalBall5\"; break;\n                        case \"M6\": finalTiles[y][x] = \"metalBall6\"; break;\n                        // Watermelons\n                        case \"W1\": finalTiles[y][x] = \"watermelon1\"; break;\n                        case \"W2\": finalTiles[y][x] = \"watermelon2\"; break;\n                        case \"W3\": finalTiles[y][x] = \"watermelon3\"; break;\n                        // Cannons\n                        case \"CW\": cannonTiles[y][x].push(\"watermelon\"); break;\n                        case \"CG\": cannonTiles[y][x].push(\"globe\"); break;\n                        case \"C-\": cannonTiles[y][x].push(\"horizontal_striped_circle\"); break;\n                        case \"C|\": cannonTiles[y][x].push(\"vertical_striped_circle\"); break;\n                        case \"CO\": cannonTiles[y][x].push(\"radial_circle\"); break;\n                        // FOR random circles: Don't do anything.\n                        default:\n                            if (tile[0] === \"T\") {\n                                // Teleporter!\n                                const number = Number(tile.slice(1))\n                                if (number % 2 === 1) {\n                                    // It is a start teleporter.\n                                    teleporters[y][x][0] = (number + 1) / 2\n                                } else {\n                                    // It is an end teleporter.\n                                    teleporters[y][x][1] = number / 2\n                                }\n                            }\n                            break;\n                    }\n                }\n                if (colourFlag && !specialFlag) finalTiles[y][x] = colourFlag + \"Circle\";\n                if (!colourFlag && specialFlag) {\n                    let prevColour = finalTiles[y][x].slice(0, -6);\n                    finalTiles[y][x] = prevColour + specialFlag + \"Circle\"\n                }\n                if (colourFlag && specialFlag) finalTiles[y][x] = colourFlag + specialFlag + \"Circle\";\n            }\n        }\n        initialButtons = buttonTiles.flat().reduce((a, b) => a + b, 0);\n        lo++;\n    }\n    slide = true;\n    loadingDone = true;\n    return finalTiles;\n}\n\nfunction drawGoals() {\n    goalsDone = true;\n    let goalPos = [];\n    for (let i = 0; i < goals.length; i++) {\n        let goal = goals[i]\n        let SIZE_DOWN = 0;\n        let t = _tiles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][goal.type + \"Order\"]\n        let sD = 0;\n        if (goal.lastCollected) {\n            const ct = goal.type === \"score\" ? 900 : 300;\n            const exp = goal.type === \"score\" ? 1.3 : 2.2;\n            sD += Math.max(8 * (1 - ((new Date() - goal.lastCollected) / ct) ** exp), 0);\n        }\n        ctx.drawImage(tileImage, t.x, t.y, t.s, t.s, 22 - sD / 2, 222 + i * OBJ_SIZE - sD / 2, 40 * OBJ_SIZE / 50 + sD, 40 * OBJ_SIZE / 50 + sD);\n        goalPos.push({\n            type: goal.type,\n            x: 22,\n            y: 222 + i * OBJ_SIZE,\n            size: 40 * OBJ_SIZE / 50\n        })\n        let number = 0;\n        let internalNumber = 0;\n        switch (goal.type) {\n            case \"button\":\n                const cButtonAmount = goalsAnimCollected.button || 0;\n                // Specific amount of buttons\n                if (goal.amount && goal.amount !== 0) {\n                    ctx.fillStyle = \"white\";\n                    number = Math.max(0, goal.amount - cButtonAmount);\n                    internalNumber = goal.amount - (initialButtons - buttonTiles.flat().reduce((a, b) => a + b, 0));\n                    break;\n                }\n                // All buttons\n                number = initialButtons - cButtonAmount;\n                internalNumber = buttonTiles.flat().reduce((a, b) => a + b, 0)\n                ctx.fillStyle = \"#ccdae8\";\n                break;\n            case \"score\":\n                ctx.fillStyle = \"#ffdddd\";\n                number = targets[0] - score;\n                internalNumber = targets[0] - score;\n                break;\n            default: {\n                ctx.fillStyle = \"white\";\n                number = Math.max(0, goal.amount - goalsAnimCollected[goal.type]);\n                internalNumber = Math.max(0, goal.amount - goalsCollected[goal.type]);\n            }\n        }\n        if (number >= 1000 && goals.length <= 3) SIZE_DOWN = 20;\n\n        ctx.font = (36 * OBJ_SIZE / 50 - SIZE_DOWN) + \"px Segoe UI Semibold\"\n        if (internalNumber > 0 || !loadingDone) goalsDone = false;\n        if (number > 0) {\n            if (number >= 1000000) number = Math.floor(number / 1000000 * 100) / 100 + \"M\"\n            else if (number >= 100000) number = Math.floor(number / 1000 * 10) / 10 + \"K\"\n            ctx.fillText(number, 70 + (OBJ_SIZE - 50) / 1.7, 255 + i * OBJ_SIZE + (OBJ_SIZE - 50) / 1.7);\n        } else {\n            if (!goal.completion) goal.completion = new Date();\n            const size = (1 - Math.min(1, (new Date() - goal.completion) / 250)) ** 2 * OBJ_SIZE + 40;\n            const defaultSize = 40;\n            let sizeDif = size - defaultSize;\n            ctx.drawImage(tileImage, 254, 344, 56, 56, 70 - sizeDif / 2 + (OBJ_SIZE - 50) / 1.7, 221 + i * OBJ_SIZE - sizeDif / 2 + (OBJ_SIZE - 50) / 1.7, size, size);\n        }\n    }\n    // Draw animated goal collections.\n\n    for (let i = 0; i < showGoalAnim.length; i++) {\n        let anim = showGoalAnim[i]\n        if (!anim.startDate) anim.startDate = new Date();\n        let startingPos;\n        if (anim.type !== \"score\") {\n            startingPos = gridToPixel(anim.x, anim.y, X_OFFSET, Y_OFFSET, 64);\n            startingPos[0] += 32; startingPos[0] += 32;\n        } else startingPos = [goalAnim.x / 2, goalAnim.y / 2]\n        const orderObjPos = goalPos.filter(p => p.type === anim.type)[0];\n        let orderPos = [orderObjPos.x, orderObjPos.y];\n        if (goals.length < 4) {\n            orderPos[0] += 8;\n            orderPos[1] += 6;\n        }\n        const exp = 1.7;\n        let o = (1 - Math.min((new Date() - anim.startDate) / (anim.type === \"score\" ? 1250 : 750), 1)) ** exp;\n        let c = \"boardTile\";\n        switch (anim.type) {\n            default: c = anim.wasTile;\n        }\n        const tilemap = _tiles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][c];\n        const os = goals.length > 3 ? orderObjPos.size : 50;\n        ctx.drawImage(tileImage, tilemap.x, tilemap.y, tilemap.s || 64, tilemap.s || 64,\n            o * startingPos[0] + (1 - o) * orderPos[0], o * startingPos[1] + (1 - o) * orderPos[1], os, os);\n        if (new Date() - anim.startDate > 800) {\n            showGoalAnim = showGoalAnim.filter(o => o.id !== anim.id);\n            for (let j = 0; j < goals.length; j++) {\n                if (goals[j].type === anim.type) goals[j].lastCollected = new Date();\n            }\n        }\n\n    }\n}\n\n\nfunction canFall(t, x, y) {\n    if (encasingBlockerTiles[y][x]) return false;\n    return !_files_constants_js__WEBPACK_IMPORTED_MODULE_5__.CANNOT_FALL.includes(t)\n}\n\nfunction init() {\n    canvas.width = _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.WIDTH;\n    canvas.height = _files_constants_js__WEBPACK_IMPORTED_MODULE_5__.HEIGHT;\n    canvas.id = \"gameCanvas\";\n    canvas.style.overflow = \"hidden\";\n    document.body.style.overflow = \"hidden\";\n    document.body.style.overflowX = \"hidden\";\n    document.body.style.overflowY = \"hidden\";\n    document.body.style.backgroundColor = \"#222222\";\n\n    canvas.style.position = \"absolute\";\n    document.body.appendChild(canvas);\n\n    canvas.addEventListener(\"mouseup\", clickCanvas);\n    canvas.addEventListener(\"mousedown\", clickCanvasDown);\n    canvas.addEventListener(\"mousemove\", clickCanvasMove);\n\n    canvas.addEventListener(\"pointerup\", clickCanvas);\n    canvas.addEventListener(\"pointerdown\", clickCanvasDown);\n    canvas.addEventListener(\"pointermove\", clickCanvasMove);\n    canvas.addEventListener(\"wheel\", event => {\n        const delta = Math.sign(event.deltaY);\n        lsScrollY -= delta * 60\n    });\n\n    requestAnimationFrame(tick); // Call game!\n}\n\nload();\n\n// Some debug stuff\n\nwindow.showGameData = () => console.log(\"%c DATA:\\n\\n\"+window.localStorage.getItem(\"circle.match.save\"), \"color:#222222\")\n\n//# sourceURL=webpack://circle-match/./src/index.js?");

/***/ }),

/***/ "./src/tiles.js":
/*!**********************!*\
  !*** ./src/tiles.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tileMaps = {\n    // Coloured circles\n    redCircle: {x: 0, y: 0},\n    yellowCircle: {x: 128, y: 0},\n    blueCircle: {x: 64, y: 0},\n    greenCircle: {x: 0, y: 64},\n    orangeCircle: {x: 64, y: 64},\n    purpleCircle: {x: 128, y: 64},\n    // Normal special circles\n    redVSCircle: {x: 0, y: 128},\n    yellowVSCircle: {x: 128, y: 128},\n    blueVSCircle: {x: 64, y: 128},\n    greenVSCircle: {x: 0, y: 192},\n    orangeVSCircle: {x: 64, y: 192},\n    purpleVSCircle: {x: 128, y: 192},\n    redHSCircle: {x: 192, y: 0},\n    yellowHSCircle: {x: 128+192, y: 0},\n    blueHSCircle: {x: 64+192, y: 0},\n    greenHSCircle: {x: 192, y: 64},\n    orangeHSCircle: {x: 64+192, y: 64},\n    purpleHSCircle: {x: 128+192, y: 64},\n    redRSCircle: {x: 0+192, y: 0+128},\n    yellowRSCircle: {x: 128+192, y: 0+128},\n    blueRSCircle: {x: 64+192, y: 0+128},\n    greenRSCircle: {x: 0+192, y: 64+128},\n    orangeRSCircle: {x: 64+192, y: 64+128},\n    purpleRSCircle: {x: 128+192, y: 64+128},\n    // Activated Special circles\n    redAVSCircle: {x: 0, y: 128},\n    yellowAVSCircle: {x: 128, y: 128},\n    blueAVSCircle: {x: 64, y: 128},\n    greenAVSCircle: {x: 0, y: 192},\n    orangeAVSCircle: {x: 64, y: 192},\n    purpleAVSCircle: {x: 128, y: 192},\n    redAHSCircle: {x: 192, y: 0},\n    yellowAHSCircle: {x: 128+192, y: 0},\n    blueAHSCircle: {x: 64+192, y: 0},\n    greenAHSCircle: {x: 192, y: 64},\n    orangeAHSCircle: {x: 64+192, y: 64},\n    purpleAHSCircle: {x: 128+192, y: 64},\n    redARSCircle: {x: 0+192, y: 0+128},\n    yellowARSCircle: {x: 128+192, y: 0+128},\n    blueARSCircle: {x: 64+192, y: 0+128},\n    greenARSCircle: {x: 0+192, y: 64+128},\n    orangeARSCircle: {x: 64+192, y: 64+128},\n    purpleARSCircle: {x: 128+192, y: 64+128},\n    // Blockers & Buttons\n    button1: {x: 0, y: 334},\n    button2: {x: 64, y: 334},\n    button3: {x: 128, y: 334},\n    drain1: {x: 0, y: 399, s: 65},\n    drain2: {x: 65, y: 399, s: 65},\n    bubble1: {x: 131, y: 399, s: 65},\n    bubble2: {x: 196, y: 399, s: 65},\n    bubble3: {x: 261, y: 399, s: 65},\n    // Misc\n    boardTile: {x: 0, y: 256, s: 80},\n    spawnIndicator: {x: 144, y: 256, s: 64},\n    telEnterIndicator: {x: 326, y: 400, s: 64},\n    telExitIndicator: {x: 390, y: 400, s: 64},\n    rainbowCircle: {x: 80, y: 256},\n    globeHolder: {x: 0, y: 464},\n    globe: {x: 66, y: 464},\n    globeExit: {x: 187, y: 464},\n    cannonBody: {x: 466, y: 407},\n    // Goals\n    buttonOrder: {x: 197, y: 345, s: 55},\n    red_circleOrder: {x: 221, y: 258, s: 56},\n    blue_circleOrder: {x: 282, y: 258, s: 56},\n    yellow_circleOrder: {x: 341, y: 289, s: 56},\n    green_circleOrder: {x: 317, y: 344, s: 56},\n    orange_circleOrder: {x: 383, y: 219, s: 56},\n    purple_circleOrder: {x: 377, y: 343, s: 56},\n    rainbow_circleOrder: {x: 384, y: 165, s: 56},\n    striped_circleOrder: {x: 384, y: 51, s: 56},\n    \n    horizontal_striped_circleOrder: {x: 384, y: 51, s: 56},\n    vertical_striped_circleOrder: {x: 504, y: 114, s: 56},\n\n    radial_circleOrder: {x: 384, y: 109, s: 56},\n    metal_ballOrder: {x: 504, y: 0, s: 56},\n    scoreOrder: {x: 504, y: 54, s: 56},\n    globeOrder: {x: 131, y: 464, s: 56},\n    watermelonOrder: {x: 454, y: 473, s: 56},\n    // Metal balls\n    metalBall1: {x: 440, y: 0},\n    metalBall2: {x: 440, y: 64},\n    metalBall3: {x: 440, y: 128},\n    metalBall4: {x: 440, y: 192},\n    metalBall5: {x: 440, y: 256},\n    metalBall6: {x: 440, y: 320},\n    // Watermelons\n    watermelon1: {x: 262, y: 464},\n    watermelon2: {x: 326, y: 464},\n    watermelon3: {x: 390, y: 464},\n    // Stars\n    star1: {x: 505, y: 235, s: 55},\n    star2: {x: 505, y: 290, s: 55},\n    star3: {x: 505, y: 345, s: 55},\n    starDisabled: {x: 504, y: 176, s: 56}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tileMaps);\n\n//# sourceURL=webpack://circle-match/./src/tiles.js?");

/***/ }),

/***/ "./src eager recursive ^\\.\\/.*\\/.*\\.json$":
/*!********************************************************!*\
  !*** ./src/ eager ^\.\/.*\/.*\.json$ namespace object ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./levels/1.json\": \"./src/levels/1.json\",\n\t\"./levels/10.json\": \"./src/levels/10.json\",\n\t\"./levels/100.json\": \"./src/levels/100.json\",\n\t\"./levels/101.json\": \"./src/levels/101.json\",\n\t\"./levels/102.json\": \"./src/levels/102.json\",\n\t\"./levels/103.json\": \"./src/levels/103.json\",\n\t\"./levels/104.json\": \"./src/levels/104.json\",\n\t\"./levels/105.json\": \"./src/levels/105.json\",\n\t\"./levels/106.json\": \"./src/levels/106.json\",\n\t\"./levels/107.json\": \"./src/levels/107.json\",\n\t\"./levels/108.json\": \"./src/levels/108.json\",\n\t\"./levels/109.json\": \"./src/levels/109.json\",\n\t\"./levels/11.json\": \"./src/levels/11.json\",\n\t\"./levels/110.json\": \"./src/levels/110.json\",\n\t\"./levels/111.json\": \"./src/levels/111.json\",\n\t\"./levels/112.json\": \"./src/levels/112.json\",\n\t\"./levels/113.json\": \"./src/levels/113.json\",\n\t\"./levels/114.json\": \"./src/levels/114.json\",\n\t\"./levels/115.json\": \"./src/levels/115.json\",\n\t\"./levels/116.json\": \"./src/levels/116.json\",\n\t\"./levels/12.json\": \"./src/levels/12.json\",\n\t\"./levels/13.json\": \"./src/levels/13.json\",\n\t\"./levels/14.json\": \"./src/levels/14.json\",\n\t\"./levels/15.json\": \"./src/levels/15.json\",\n\t\"./levels/16.json\": \"./src/levels/16.json\",\n\t\"./levels/17.json\": \"./src/levels/17.json\",\n\t\"./levels/18.json\": \"./src/levels/18.json\",\n\t\"./levels/19.json\": \"./src/levels/19.json\",\n\t\"./levels/2.json\": \"./src/levels/2.json\",\n\t\"./levels/20.json\": \"./src/levels/20.json\",\n\t\"./levels/21.json\": \"./src/levels/21.json\",\n\t\"./levels/22.json\": \"./src/levels/22.json\",\n\t\"./levels/23.json\": \"./src/levels/23.json\",\n\t\"./levels/24.json\": \"./src/levels/24.json\",\n\t\"./levels/25.json\": \"./src/levels/25.json\",\n\t\"./levels/26.json\": \"./src/levels/26.json\",\n\t\"./levels/27.json\": \"./src/levels/27.json\",\n\t\"./levels/28.json\": \"./src/levels/28.json\",\n\t\"./levels/29.json\": \"./src/levels/29.json\",\n\t\"./levels/3.json\": \"./src/levels/3.json\",\n\t\"./levels/30.json\": \"./src/levels/30.json\",\n\t\"./levels/31.json\": \"./src/levels/31.json\",\n\t\"./levels/32.json\": \"./src/levels/32.json\",\n\t\"./levels/33.json\": \"./src/levels/33.json\",\n\t\"./levels/34.json\": \"./src/levels/34.json\",\n\t\"./levels/35.json\": \"./src/levels/35.json\",\n\t\"./levels/36.json\": \"./src/levels/36.json\",\n\t\"./levels/37.json\": \"./src/levels/37.json\",\n\t\"./levels/38.json\": \"./src/levels/38.json\",\n\t\"./levels/39.json\": \"./src/levels/39.json\",\n\t\"./levels/4.json\": \"./src/levels/4.json\",\n\t\"./levels/40.json\": \"./src/levels/40.json\",\n\t\"./levels/41.json\": \"./src/levels/41.json\",\n\t\"./levels/42.json\": \"./src/levels/42.json\",\n\t\"./levels/43.json\": \"./src/levels/43.json\",\n\t\"./levels/44.json\": \"./src/levels/44.json\",\n\t\"./levels/45.json\": \"./src/levels/45.json\",\n\t\"./levels/46.json\": \"./src/levels/46.json\",\n\t\"./levels/47.json\": \"./src/levels/47.json\",\n\t\"./levels/48.json\": \"./src/levels/48.json\",\n\t\"./levels/49.json\": \"./src/levels/49.json\",\n\t\"./levels/5.json\": \"./src/levels/5.json\",\n\t\"./levels/50.json\": \"./src/levels/50.json\",\n\t\"./levels/51.json\": \"./src/levels/51.json\",\n\t\"./levels/52.json\": \"./src/levels/52.json\",\n\t\"./levels/53.json\": \"./src/levels/53.json\",\n\t\"./levels/54.json\": \"./src/levels/54.json\",\n\t\"./levels/55.json\": \"./src/levels/55.json\",\n\t\"./levels/56.json\": \"./src/levels/56.json\",\n\t\"./levels/57.json\": \"./src/levels/57.json\",\n\t\"./levels/58.json\": \"./src/levels/58.json\",\n\t\"./levels/59.json\": \"./src/levels/59.json\",\n\t\"./levels/6.json\": \"./src/levels/6.json\",\n\t\"./levels/60.json\": \"./src/levels/60.json\",\n\t\"./levels/61.json\": \"./src/levels/61.json\",\n\t\"./levels/62.json\": \"./src/levels/62.json\",\n\t\"./levels/63.json\": \"./src/levels/63.json\",\n\t\"./levels/64.json\": \"./src/levels/64.json\",\n\t\"./levels/65.json\": \"./src/levels/65.json\",\n\t\"./levels/66.json\": \"./src/levels/66.json\",\n\t\"./levels/67.json\": \"./src/levels/67.json\",\n\t\"./levels/68.json\": \"./src/levels/68.json\",\n\t\"./levels/69.json\": \"./src/levels/69.json\",\n\t\"./levels/7.json\": \"./src/levels/7.json\",\n\t\"./levels/70.json\": \"./src/levels/70.json\",\n\t\"./levels/71.json\": \"./src/levels/71.json\",\n\t\"./levels/72.json\": \"./src/levels/72.json\",\n\t\"./levels/73.json\": \"./src/levels/73.json\",\n\t\"./levels/74.json\": \"./src/levels/74.json\",\n\t\"./levels/75.json\": \"./src/levels/75.json\",\n\t\"./levels/76.json\": \"./src/levels/76.json\",\n\t\"./levels/77.json\": \"./src/levels/77.json\",\n\t\"./levels/78.json\": \"./src/levels/78.json\",\n\t\"./levels/79.json\": \"./src/levels/79.json\",\n\t\"./levels/8.json\": \"./src/levels/8.json\",\n\t\"./levels/80.json\": \"./src/levels/80.json\",\n\t\"./levels/81.json\": \"./src/levels/81.json\",\n\t\"./levels/82.json\": \"./src/levels/82.json\",\n\t\"./levels/83.json\": \"./src/levels/83.json\",\n\t\"./levels/84.json\": \"./src/levels/84.json\",\n\t\"./levels/85.json\": \"./src/levels/85.json\",\n\t\"./levels/86.json\": \"./src/levels/86.json\",\n\t\"./levels/87.json\": \"./src/levels/87.json\",\n\t\"./levels/88.json\": \"./src/levels/88.json\",\n\t\"./levels/89.json\": \"./src/levels/89.json\",\n\t\"./levels/9.json\": \"./src/levels/9.json\",\n\t\"./levels/90.json\": \"./src/levels/90.json\",\n\t\"./levels/91.json\": \"./src/levels/91.json\",\n\t\"./levels/92.json\": \"./src/levels/92.json\",\n\t\"./levels/93.json\": \"./src/levels/93.json\",\n\t\"./levels/94.json\": \"./src/levels/94.json\",\n\t\"./levels/95.json\": \"./src/levels/95.json\",\n\t\"./levels/96.json\": \"./src/levels/96.json\",\n\t\"./levels/97.json\": \"./src/levels/97.json\",\n\t\"./levels/98.json\": \"./src/levels/98.json\",\n\t\"./levels/99.json\": \"./src/levels/99.json\",\n\t\"./test_levels/1.json\": \"./src/test_levels/1.json\",\n\t\"./test_levels/2.json\": \"./src/test_levels/2.json\",\n\t\"./test_levels/3.json\": \"./src/test_levels/3.json\",\n\t\"./test_levels/4.json\": \"./src/test_levels/4.json\",\n\t\"./test_levels/5.json\": \"./src/test_levels/5.json\",\n\t\"./test_levels/6.json\": \"./src/test_levels/6.json\",\n\t\"./test_levels/7.json\": \"./src/test_levels/7.json\",\n\t\"./test_levels/8.json\": \"./src/test_levels/8.json\"\n};\n\n\nfunction webpackAsyncContext(req) {\n\treturn webpackAsyncContextResolve(req).then(id => {\n\t\treturn __webpack_require__.t(id, 3);\n\t});\n}\nfunction webpackAsyncContextResolve(req) {\n\t// Here Promise.resolve().then() is used instead of new Promise() to prevent\n\t// uncaught exception popping up in devtools\n\treturn Promise.resolve().then(() => {\n\t\tif(!__webpack_require__.o(map, req)) {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t}\n\t\treturn map[req];\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.resolve = webpackAsyncContextResolve;\nwebpackAsyncContext.id = \"./src eager recursive ^\\\\.\\\\/.*\\\\/.*\\\\.json$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://circle-match/./src/_eager_^\\.\\/.*\\/.*\\.json$_namespace_object?");

/***/ }),

/***/ "./src lazy recursive ^\\.\\/.*\\/.*\\.json$":
/*!*******************************************************!*\
  !*** ./src/ lazy ^\.\/.*\/.*\.json$ namespace object ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./levels/1.json\": \"./src/levels/1.json\",\n\t\"./levels/10.json\": \"./src/levels/10.json\",\n\t\"./levels/100.json\": \"./src/levels/100.json\",\n\t\"./levels/101.json\": \"./src/levels/101.json\",\n\t\"./levels/102.json\": \"./src/levels/102.json\",\n\t\"./levels/103.json\": \"./src/levels/103.json\",\n\t\"./levels/104.json\": \"./src/levels/104.json\",\n\t\"./levels/105.json\": \"./src/levels/105.json\",\n\t\"./levels/106.json\": \"./src/levels/106.json\",\n\t\"./levels/107.json\": \"./src/levels/107.json\",\n\t\"./levels/108.json\": \"./src/levels/108.json\",\n\t\"./levels/109.json\": \"./src/levels/109.json\",\n\t\"./levels/11.json\": \"./src/levels/11.json\",\n\t\"./levels/110.json\": \"./src/levels/110.json\",\n\t\"./levels/111.json\": \"./src/levels/111.json\",\n\t\"./levels/112.json\": \"./src/levels/112.json\",\n\t\"./levels/113.json\": \"./src/levels/113.json\",\n\t\"./levels/114.json\": \"./src/levels/114.json\",\n\t\"./levels/115.json\": \"./src/levels/115.json\",\n\t\"./levels/116.json\": \"./src/levels/116.json\",\n\t\"./levels/12.json\": \"./src/levels/12.json\",\n\t\"./levels/13.json\": \"./src/levels/13.json\",\n\t\"./levels/14.json\": \"./src/levels/14.json\",\n\t\"./levels/15.json\": \"./src/levels/15.json\",\n\t\"./levels/16.json\": \"./src/levels/16.json\",\n\t\"./levels/17.json\": \"./src/levels/17.json\",\n\t\"./levels/18.json\": \"./src/levels/18.json\",\n\t\"./levels/19.json\": \"./src/levels/19.json\",\n\t\"./levels/2.json\": \"./src/levels/2.json\",\n\t\"./levels/20.json\": \"./src/levels/20.json\",\n\t\"./levels/21.json\": \"./src/levels/21.json\",\n\t\"./levels/22.json\": \"./src/levels/22.json\",\n\t\"./levels/23.json\": \"./src/levels/23.json\",\n\t\"./levels/24.json\": \"./src/levels/24.json\",\n\t\"./levels/25.json\": \"./src/levels/25.json\",\n\t\"./levels/26.json\": \"./src/levels/26.json\",\n\t\"./levels/27.json\": \"./src/levels/27.json\",\n\t\"./levels/28.json\": \"./src/levels/28.json\",\n\t\"./levels/29.json\": \"./src/levels/29.json\",\n\t\"./levels/3.json\": \"./src/levels/3.json\",\n\t\"./levels/30.json\": \"./src/levels/30.json\",\n\t\"./levels/31.json\": \"./src/levels/31.json\",\n\t\"./levels/32.json\": \"./src/levels/32.json\",\n\t\"./levels/33.json\": \"./src/levels/33.json\",\n\t\"./levels/34.json\": \"./src/levels/34.json\",\n\t\"./levels/35.json\": \"./src/levels/35.json\",\n\t\"./levels/36.json\": \"./src/levels/36.json\",\n\t\"./levels/37.json\": \"./src/levels/37.json\",\n\t\"./levels/38.json\": \"./src/levels/38.json\",\n\t\"./levels/39.json\": \"./src/levels/39.json\",\n\t\"./levels/4.json\": \"./src/levels/4.json\",\n\t\"./levels/40.json\": \"./src/levels/40.json\",\n\t\"./levels/41.json\": \"./src/levels/41.json\",\n\t\"./levels/42.json\": \"./src/levels/42.json\",\n\t\"./levels/43.json\": \"./src/levels/43.json\",\n\t\"./levels/44.json\": \"./src/levels/44.json\",\n\t\"./levels/45.json\": \"./src/levels/45.json\",\n\t\"./levels/46.json\": \"./src/levels/46.json\",\n\t\"./levels/47.json\": \"./src/levels/47.json\",\n\t\"./levels/48.json\": \"./src/levels/48.json\",\n\t\"./levels/49.json\": \"./src/levels/49.json\",\n\t\"./levels/5.json\": \"./src/levels/5.json\",\n\t\"./levels/50.json\": \"./src/levels/50.json\",\n\t\"./levels/51.json\": \"./src/levels/51.json\",\n\t\"./levels/52.json\": \"./src/levels/52.json\",\n\t\"./levels/53.json\": \"./src/levels/53.json\",\n\t\"./levels/54.json\": \"./src/levels/54.json\",\n\t\"./levels/55.json\": \"./src/levels/55.json\",\n\t\"./levels/56.json\": \"./src/levels/56.json\",\n\t\"./levels/57.json\": \"./src/levels/57.json\",\n\t\"./levels/58.json\": \"./src/levels/58.json\",\n\t\"./levels/59.json\": \"./src/levels/59.json\",\n\t\"./levels/6.json\": \"./src/levels/6.json\",\n\t\"./levels/60.json\": \"./src/levels/60.json\",\n\t\"./levels/61.json\": \"./src/levels/61.json\",\n\t\"./levels/62.json\": \"./src/levels/62.json\",\n\t\"./levels/63.json\": \"./src/levels/63.json\",\n\t\"./levels/64.json\": \"./src/levels/64.json\",\n\t\"./levels/65.json\": \"./src/levels/65.json\",\n\t\"./levels/66.json\": \"./src/levels/66.json\",\n\t\"./levels/67.json\": \"./src/levels/67.json\",\n\t\"./levels/68.json\": \"./src/levels/68.json\",\n\t\"./levels/69.json\": \"./src/levels/69.json\",\n\t\"./levels/7.json\": \"./src/levels/7.json\",\n\t\"./levels/70.json\": \"./src/levels/70.json\",\n\t\"./levels/71.json\": \"./src/levels/71.json\",\n\t\"./levels/72.json\": \"./src/levels/72.json\",\n\t\"./levels/73.json\": \"./src/levels/73.json\",\n\t\"./levels/74.json\": \"./src/levels/74.json\",\n\t\"./levels/75.json\": \"./src/levels/75.json\",\n\t\"./levels/76.json\": \"./src/levels/76.json\",\n\t\"./levels/77.json\": \"./src/levels/77.json\",\n\t\"./levels/78.json\": \"./src/levels/78.json\",\n\t\"./levels/79.json\": \"./src/levels/79.json\",\n\t\"./levels/8.json\": \"./src/levels/8.json\",\n\t\"./levels/80.json\": \"./src/levels/80.json\",\n\t\"./levels/81.json\": \"./src/levels/81.json\",\n\t\"./levels/82.json\": \"./src/levels/82.json\",\n\t\"./levels/83.json\": \"./src/levels/83.json\",\n\t\"./levels/84.json\": \"./src/levels/84.json\",\n\t\"./levels/85.json\": \"./src/levels/85.json\",\n\t\"./levels/86.json\": \"./src/levels/86.json\",\n\t\"./levels/87.json\": \"./src/levels/87.json\",\n\t\"./levels/88.json\": \"./src/levels/88.json\",\n\t\"./levels/89.json\": \"./src/levels/89.json\",\n\t\"./levels/9.json\": \"./src/levels/9.json\",\n\t\"./levels/90.json\": \"./src/levels/90.json\",\n\t\"./levels/91.json\": \"./src/levels/91.json\",\n\t\"./levels/92.json\": \"./src/levels/92.json\",\n\t\"./levels/93.json\": \"./src/levels/93.json\",\n\t\"./levels/94.json\": \"./src/levels/94.json\",\n\t\"./levels/95.json\": \"./src/levels/95.json\",\n\t\"./levels/96.json\": \"./src/levels/96.json\",\n\t\"./levels/97.json\": \"./src/levels/97.json\",\n\t\"./levels/98.json\": \"./src/levels/98.json\",\n\t\"./levels/99.json\": \"./src/levels/99.json\",\n\t\"./test_levels/1.json\": \"./src/test_levels/1.json\",\n\t\"./test_levels/2.json\": \"./src/test_levels/2.json\",\n\t\"./test_levels/3.json\": \"./src/test_levels/3.json\",\n\t\"./test_levels/4.json\": \"./src/test_levels/4.json\",\n\t\"./test_levels/5.json\": \"./src/test_levels/5.json\",\n\t\"./test_levels/6.json\": \"./src/test_levels/6.json\",\n\t\"./test_levels/7.json\": \"./src/test_levels/7.json\",\n\t\"./test_levels/8.json\": \"./src/test_levels/8.json\"\n};\n\nfunction webpackAsyncContext(req) {\n\treturn Promise.resolve().then(() => {\n\t\tif(!__webpack_require__.o(map, req)) {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t}\n\n\t\tvar id = map[req];\n\t\treturn __webpack_require__.t(id, 3 | 16);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./src lazy recursive ^\\\\.\\\\/.*\\\\/.*\\\\.json$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://circle-match/./src/_lazy_^\\.\\/.*\\/.*\\.json$_namespace_object?");

/***/ }),

/***/ "./public/Noto Sans.ttf":
/*!******************************!*\
  !*** ./public/Noto Sans.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a50ccd7ec8e550220297.ttf\";\n\n//# sourceURL=webpack://circle-match/./public/Noto_Sans.ttf?");

/***/ }),

/***/ "./public/Segoe UI Semibold.ttf":
/*!**************************************!*\
  !*** ./public/Segoe UI Semibold.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6e8b789f42105e109003.ttf\";\n\n//# sourceURL=webpack://circle-match/./public/Segoe_UI_Semibold.ttf?");

/***/ }),

/***/ "./public/Segoe UI.ttf":
/*!*****************************!*\
  !*** ./public/Segoe UI.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"55d336ac99f56921ab9f.ttf\";\n\n//# sourceURL=webpack://circle-match/./public/Segoe_UI.ttf?");

/***/ }),

/***/ "./src/files/bg.png":
/*!**************************!*\
  !*** ./src/files/bg.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"073ca3a6340df24f7bbf.png\";\n\n//# sourceURL=webpack://circle-match/./src/files/bg.png?");

/***/ }),

/***/ "./src/files/infoIngame.png":
/*!**********************************!*\
  !*** ./src/files/infoIngame.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ea62f04c89e2e16221eb.png\";\n\n//# sourceURL=webpack://circle-match/./src/files/infoIngame.png?");

/***/ }),

/***/ "./src/files/tiles.png":
/*!*****************************!*\
  !*** ./src/files/tiles.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"dfacba6363e15d4f8841.png\";\n\n//# sourceURL=webpack://circle-match/./src/files/tiles.png?");

/***/ }),

/***/ "./src/files/ui.png":
/*!**************************!*\
  !*** ./src/files/ui.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"27179c5ab9e45cf5d856.png\";\n\n//# sourceURL=webpack://circle-match/./src/files/ui.png?");

/***/ }),

/***/ "./src/levels/1.json":
/*!***************************!*\
  !*** ./src/levels/1.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":12,\"targets\":[600,900,1200],\"width\":6,\"height\":6,\"colours\":5,\"immediateShowdown\":false,\"tilemap\":[\"***S,***S,***S,***S,***S,***S\",\"**,**,**,**,**,**\",\"**,**,**,**,**,**\",\"**,**,**,**,**,**\",\"**,**,**,**,**,**\",\"**,**,**,**,**,**\"],\"goals\":[{\"type\":\"score\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/1.json?");

/***/ }),

/***/ "./src/levels/10.json":
/*!****************************!*\
  !*** ./src/levels/10.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":21,\"targets\":[300000,400000,450000],\"width\":12,\"height\":9,\"colours\":4,\"hard\":1,\"tilemap\":[\"***SB1,***SB1,***SB2,***SB2,***SB3,***SB3,***SB3,***SB3,***SB2,***SB2,***SB1,***SB1\",\"**B1,**B1,**B2,**B2,**B3,**B3,**B3,**B3,**B2,**B2,**B1,**B1\",\"**B1,**B1,**B2,**B2,**B3,**B3,**B3,**B3,**B2,**B2,**B1,**B1\",\"**B1,**B1,**B2,**B2,**B3,**B3,**B3,**B3,**B2,**B2,**B1,**B1\",\"**B1,**B1,**B2,**B2,**B3,**B3,**B3,**B3,**B2,**B2,**B1,**B1\",\"**B1,**B1,**B2,**B2,**B3,**B3,**B3,**B3,**B2,**B2,**B1,**B1\",\"**B1,**B1,**B2,**B2,**B3,**B3,**B3,**B3,**B2,**B2,**B1,**B1\",\"**B1,**B1,**B2,**B2,--,**B2,**B2,--,**B2,**B2,**B1,**B1\",\"**B1,**B1,**B2,--,*/B1,--,--,*/B1,--,**B2,**B1,**B1\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/10.json?");

/***/ }),

/***/ "./src/levels/100.json":
/*!*****************************!*\
  !*** ./src/levels/100.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":55,\"targets\":[200000,300000,500000],\"width\":12,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null},{\"type\":\"globe\",\"amount\":5},{\"type\":\"watermelon\",\"amount\":110},{\"type\":\"blue_circle\",\"amount\":200}],\"tilemap\":[\"*2CW*S,*0CW*S,*0CW*S,CW*SCG*2,*2CW*SCG,*1CW*SCG,*1CW*SCG,*3CW*SCG,CW*SCG*3,*2CW*S,*2CW*S,*3CW*S\",\"*0,*2*OD2,*O*5,*O*5,*1*OD1,*3*OD1,*3*OD1,*1*OD1,*O*5,*O*5,*3*OD2,*0\",\"B1M4,B2M2,B2M2,B2M2,B2M2,B2M2,B2M2,B2M2,B2M2,B2M2,B2M2,B2M2\",\"B2M1,B2M2,B3W3b1,B2M2,B3W3b1,B3W3b1,B3W3b1,B2M2,B3W3b1,B3W3b1,B3W3b1,B2M2\",\"B2M2,B3W3b1,B3W3b1,B2M2,B3W3b1,B2M2,B3W3b1,B2M2,B3W3b1,B2M2,B3W3b1,B2M2\",\"B2M2,B2M2,B3W3b1,B2M2,B3W3b1,B2M2,B3W3b1,B2M2,B3W3b1,B2M2,B3W3b1,B2M2\",\"B1M4,B2M2,B3W3b1,B2M2,B3*-b1,B2M2,B3*-b1,B2M2,B3W3b1,B2M2,B3W3b1,B2M2\",\"B1M4,B2M2,B3*/b2,B2M2,B3W3b1,B3*-b1,B3W3b1,B2M2,B3*/b2,B3W3b1,B3*/b2,B2M2\",\"G-B1M4,G-B2M2,G-B2M2,G-B2M2,G-B2M2,G-B2M2,G-B2M2,G-B2M2,G-B2M2,G-B2M2,G-B2M2,G-B2M2\"],\"cannons\":[{\"type\":\"watermelon\",\"max\":10},{\"type\":\"globe\",\"max\":2}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/100.json?");

/***/ }),

/***/ "./src/levels/101.json":
/*!*****************************!*\
  !*** ./src/levels/101.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":30,\"targets\":[150000,200000,250000],\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"globe\",\"amount\":20}],\"tilemap\":[\"CGG1,--,--,***S,***S,M3T002,M3T004,***S,***S\",\"G1,--,--,**,**,**,**,**,**\",\"G1,--,--,**,**,**,**,**,**\",\"G1,--,--,**,**,**,**,**,**\",\"G1,--,--,M1,W1,M1,W1,M1,W1\",\"G1,G2T003,--,W1,M1,W1,M1,W1,M1\",\"G1,--,--,M1,W1,M1,W1,M1,W1\",\"G1,--,--,W1,M1,W1,M1,W1,M1\",\"G2T001,--,--,M1,G-W1,G-M1,G-W1,M1,W1\"],\"cannons\":[{\"type\":\"globe\",\"max\":25}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/101.json?");

/***/ }),

/***/ "./src/levels/102.json":
/*!*****************************!*\
  !*** ./src/levels/102.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":35,\"targets\":[1000,20000,300000],\"colours\":4,\"hard\":1,\"goals\":[{\"type\":\"globe\",\"amount\":15},{\"type\":\"watermelon\",\"amount\":65}],\"tilemap\":[\"***S,***S,***S,***S,***S,--,CWCGG1,**CGCW,CWCGG1\",\"**,***O,**,***O,**,--,W1,G1,W1\",\"**,**,**,**,**,--,G1,W1,G1\",\"**,**,**,**,**,--,W1,G1,W1\",\"**,***-D1,**,***-D1,**,--,G1,W1,G1\",\"**,**,***-D1,**,**,--,W1,G1,W1\",\"**,***-D1,**,***-D1,**,--,G1,W1,G1\",\"**,**,***-D1,**,**,--,W1,G1,W1\",\"**,***-D2,***O,***-D2,**,--,G-W1,G-W1,G-W1\"],\"cannons\":[{\"type\":\"watermelon\",\"max\":25},{\"type\":\"globe\",\"max\":20}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/102.json?");

/***/ }),

/***/ "./src/levels/103.json":
/*!*****************************!*\
  !*** ./src/levels/103.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"time\":30,\"targets\":[150000,190000,210000],\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"score\",\"amount\":null}],\"tilemap\":[\"*O*Sb3,***SCG,--,***SCG,*S*+b3,***SCG,--,***SCG,*O*Sb3\",\"**,*-*5b3,**,*-*5b3,G-**,*-*5b3,**,*-*5b3,**\",\"--,**,*O*5,**,--,**,*O*5,**,--\",\"**,*|*5b3,G-**,*|*5b3,**,*|*5b3,G-**,*|*5b3,**\",\"*+b3,**,--,**,*Ob3,**,--,**,*+b3\",\"G-**,*-*5b3,**,*-*5b3,G-**,*-*5b3,**,*-*5b3,G-**\",\"--,**,*O*5,**,--,**,*O*5,**,--\",\"**,*|*5b3,**,*|*5b3,**,*|*5b3,**,*|*5b3,**\",\"G-*Ob3,G-**,--,G-**,G-*+b3,G-**,--,G-**,G-*Ob3\"],\"cannons\":[{\"type\":\"globe\",\"max\":2}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/103.json?");

/***/ }),

/***/ "./src/levels/104.json":
/*!*****************************!*\
  !*** ./src/levels/104.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":30,\"targets\":[100000,130000,150000],\"width\":7,\"height\":7,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null},{\"type\":\"globe\",\"amount\":5},{\"type\":\"striped_circle\",\"amount\":12}],\"tilemap\":[\"***S,**CG*S,**CG*S,**CG*S,**CG*S,**CG*S,***S\",\"**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**\",\"**,**,**,G1D1,**,**,**\",\"**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**\",\"B3M6D2,G-**,G-*-b2,G-**,G-*-b2,G-**,B3M6D2\"],\"cannons\":[{\"type\":\"globe\",\"max\":1}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/104.json?");

/***/ }),

/***/ "./src/levels/105.json":
/*!*****************************!*\
  !*** ./src/levels/105.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":8,\"targets\":[20000,40000,60000],\"width\":5,\"height\":7,\"colours\":3,\"hard\":2,\"goals\":[{\"type\":\"globe\",\"amount\":12}],\"tilemap\":[\"CGCW*S*1,CWCG*S**,CGCW*S*1,CWCG*S**,CGCW*S**\",\"**,**,*1,**,*1\",\"*1,**,**,*1,**\",\"**,*1,**,**,*1\",\"*1,**,**,*1,**\",\"**,**,*1,**,*1\",\"G-*1,G-**,G-*1,G-**,G-**\"],\"cannons\":[{\"type\":\"globe\",\"max\":9},{\"type\":\"watermelon\",\"max\":3}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/105.json?");

/***/ }),

/***/ "./src/levels/106.json":
/*!*****************************!*\
  !*** ./src/levels/106.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":25,\"targets\":[250000,300000,350000],\"width\":8,\"height\":8,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"globe\",\"amount\":20},{\"type\":\"rainbow_circle\",\"amount\":15}],\"tilemap\":[\"M1*S,M1*S,*S*-,*SM1,*SM1,*S*-,M1*S,M1*S\",\"M1,G1D2,G1D2,G1D2,G1D2,G1D2,G1D2,M1\",\"*|,G1D2,*/D1,*/D1,*/D1,*/D1,G1D2,*|\",\"M1,G1D2,*/D1,*O,*|,*/D1,G1D2,M1\",\"M1,G1D2,*/D1,*|,*O,*/D1,G1D2,M1\",\"*|,G1D2,*/D1,*/D1,*/D1,*/D1,G1D2,*|\",\"M1,G1D2,G1D2,G1D2,G1D2,G1D2,G1D2,M1\",\"G-M1,G-M1,G-*-,G-M1,G-M1,G-*-,G-M1,G-M1\"],\"cannons\":[]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/106.json?");

/***/ }),

/***/ "./src/levels/107.json":
/*!*****************************!*\
  !*** ./src/levels/107.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":40,\"targets\":[40000,80000,120000],\"colours\":5,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null}],\"tilemap\":[\"B1***S,B1***S,B1***S,B1***S,B1***S,B1***S,B1***S,B1***S,B1***S\",\"B1**,B2**,B2**,B2**,B2**,B2**,B2**,B2**,B1**\",\"B1**,B2**,B2**,B2**,B2**,B2**,B2**,B2**,B1**\",\"B1**,B1**,B1**,B1**,B1**,B1**,B1**,B1**,B1**\",\"B3**b1,B3**b1,B3**b1,B3**b2,B3**b2,B3**b2,B3**b3,B3**b3,B3**b3\",\"B3b1-O,B3b1-O,B3b1-O,B2b2-O,B2b2-O,B2b2-O,B1b3-O,B1b3-O,B1b3-O\",\"B3b1-O,B3b1-O,B3b1-O,B2b2-O,B2b2-O,B2b2-O,B1b3-O,B1b3-O,B1b3-O\",\"B3b1-O,B3*/D1,B3b1-O,B2b2-O,B2b2-O,B2b2-O,B1b3-O,B1*/D1,B1b3-O\",\"B3b1-O,B3b1-O,B3b1-O,B2b2-O,B2b2-O,B2b2-O,B1b3-O,B1b3-O,B1b3-O\"],\"cannons\":[]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/107.json?");

/***/ }),

/***/ "./src/levels/108.json":
/*!*****************************!*\
  !*** ./src/levels/108.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":25,\"targets\":[30000,60000,90000],\"width\":12,\"height\":5,\"colours\":5,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null},{\"type\":\"globe\",\"amount\":2},{\"type\":\"watermelon\",\"amount\":1}],\"tilemap\":[\"B3*SG1CG,B3**T002,B3**T004,B3***-T006,B3**T008,B3**T010,B3**T012,B3**T014,B3**T016,B3**T018,--,W3D1\",\"B3**,B3**,B3**,B3**,B3***-,B3**,B3**,B3**,B3**,B3**,--,W3D1\",\"B3**,B3**,B3**,B3**,B3**,B3***-,B3**,B3**,B3**,B3**,--,W3D1\",\"B3**,B3**,B3**,B3**,B3**,B3**,B3***-,B3**,B3**,B3**,--,W3D1\",\"B3**T001,B3**T003,B3**T005,B3**T007,B3**T009,B3**T011,B3**T013,B3***-T015,B3**T017,B3G-**,--,W3D1\"],\"cannons\":[{\"type\":\"globe\",\"max\":1}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/108.json?");

/***/ }),

/***/ "./src/levels/109.json":
/*!*****************************!*\
  !*** ./src/levels/109.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":20,\"targets\":[30000,60000,100000],\"width\":5,\"height\":5,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"striped_circle\",\"amount\":20}],\"tilemap\":[\"C|*1*S,*0*SC-,C|*1*SC-,*0*SC-,C|*1*S\",\"*0,*1,*0,*1,*0\",\"*1,*5*-b1,*1,*5*-b1,*1\",\"*|*5b3,*1,*5*-b1,*1,*|*5b3\",\"*1,*0,*1,*0,*1\"],\"cannons\":[{\"type\":\"vertical_striped_circle\",\"max\":1},{\"type\":\"horizontal_striped_circle\",\"max\":1}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/109.json?");

/***/ }),

/***/ "./src/levels/11.json":
/*!****************************!*\
  !*** ./src/levels/11.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":21,\"targets\":[60000,100000,120000],\"width\":7,\"height\":7,\"colours\":4,\"tilemap\":[\"***S,***SB2,***SB3,***SB3,***SB3,***SB2,***S\",\"**,**B2,**B3,**B3,**B3,**B2,**\",\"**,**B2,**B3,**B3,**B3,**B2,**\",\"**,**B2,**B3,**B3,**B3,**B2,**\",\"**,**B2,**B3,**B3,**B3,**B2,**\",\"--,--,--,--,--,--,--\",\"--,*0B1,--,*/B1,--,*0B1,--\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/11.json?");

/***/ }),

/***/ "./src/levels/110.json":
/*!*****************************!*\
  !*** ./src/levels/110.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":24,\"targets\":[45000,75000,100000],\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"radial_circle\",\"amount\":30}],\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S,***S,***S\",\"**,**,**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**,**,**\",\"--,--,**,**,**,**,**,--,--\",\"***OCOT001,--,**,**D1,**,***-D1,**,--,***OCOT005\",\"--,--,**,**,**,**,**,--,--\",\"***OT002T003,--,**,***-D1,**,**D1,**,--,***OT006T007\",\"--,--,**,**,**,**,**,--,--\",\"***OT004,--,**,**D1,**,***-D1,**,--,***OT008\"],\"cannons\":[{\"type\":\"radial_circle\",\"max\":100}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/110.json?");

/***/ }),

/***/ "./src/levels/111.json":
/*!*****************************!*\
  !*** ./src/levels/111.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":30,\"targets\":[90000,120000,150000],\"width\":11,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"striped_circle\",\"amount\":60}],\"tilemap\":[\"***S,***S,***S,***S,--,C-C|***|T001,--,***S,***S,***S,***S\",\"**,**,**,**,--,--,--,**,**,**,**\",\"**,**,**,**,--,***-T002T003,--,**,**,**,**\",\"**,**,**,**,--,--,--,**,**,**,**\",\"**,**,**,**,--,***|T004T005,--,**,**,**,**\",\"**,**,**,**,--,--,--,**,**,**,**\",\"**,**,**,**,--,***-T006T007,--,**,**,**,**\",\"**,**,**,**,--,--,--,**,**,**,**\",\"***-D2,**,**,**b1,**b1,***|b2T008,**b1,**b1,**,**,***-D2\"],\"cannons\":[{\"type\":\"horizontal_striped_circle\",\"max\":100},{\"type\":\"vertical_striped_circle\",\"max\":100}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/111.json?");

/***/ }),

/***/ "./src/levels/112.json":
/*!*****************************!*\
  !*** ./src/levels/112.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":25,\"targets\":[40000,60000,80000],\"colours\":5,\"hard\":1,\"goals\":[{\"type\":\"globe\",\"amount\":4}],\"tilemap\":[\"***SCWCG,***SCW,***SCWCG,***SCW,***SCWCG,***SCW,***SCWCG,***SCW,***SCWCG\",\"**,**,**,**,*4,**,**,**,**\",\"**,**,*4,*4,W2,*4,*4,**,**\",\"M1,M1,M1,M1,M1T001,M1,M1,M1,M1\",\"M3,*O,M2,M2,--,M2,M2,*O,M3\",\"M1,M1,M1,M1,M1T002,M1,M1,M1,M1\",\"**,**,**,**,G1b3,**,**,**,**\",\"W2,W3,W2,W2,W2,W2,W2,W3,W2\",\"G-**,G-**,G-**,G-**,G-**,G-**,G-**,G-**,G-**\"],\"cannons\":[{\"type\":\"watermelon\",\"max\":10,\"layer\":2},{\"type\":\"globe\",\"max\":1}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/112.json?");

/***/ }),

/***/ "./src/levels/113.json":
/*!*****************************!*\
  !*** ./src/levels/113.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":26,\"targets\":[120000,130000,140000],\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null},{\"type\":\"globe\",\"amount\":10}],\"tilemap\":[\"--,--,--,--,B2*SCG*1,--,--,--,--\",\"--,--,--,B2*1,B3*0,B2*1,--,--,--\",\"--,--,B2*1,B3*0,B3*1,B3*0,B2*1,--,--\",\"--,B2*1,B2*0,B3*0,G1b2,B3*0,B3*0,B2*1,--\",\"B2G-*1,B2*0,B2*1,G1b2,G1b3,G1b2,B3*1,B3*0,B2G-*1\",\"--,B2G-*1,B3*0,B3*0,G1b2,B3*0,B3*0,B2G-*1,--\",\"--,--,B2G-*1,B3*0,B3*1,B3*0,B2G-*1,--,--\",\"--,--,--,B2G-*1,B3*O*0,B2G-*1,--,--,--\",\"--,--,--,--,B2G-*1,--,--,--,--\"],\"cannons\":[{\"type\":\"globe\",\"max\":3}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/113.json?");

/***/ }),

/***/ "./src/levels/114.json":
/*!*****************************!*\
  !*** ./src/levels/114.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":25,\"targets\":[30000,50000,75000],\"width\":12,\"colours\":4,\"hard\":1,\"goals\":[{\"type\":\"green_circle\",\"amount\":120}],\"tilemap\":[\"*S*0,*S*3,*S*0,--,***S,***S,***S,***S,--,*S*1,*S*0,*S*1\",\"*3,*0,*3,--,**,**,**,**,--,*0,*1,*0\",\"M1,M1,M1,--,**,**,**,**,--,M1,M1,M1\",\"M1,M1,M1,--,**,M1,M1,**,--,**,***-,**\",\"**,***-,**,--,**b1,**b1,**b1,**b1,--,M1,M1,M1\",\"M1,M1,M1,--,**b1,**b1,**b1,**b1,--,**,***-,**\",\"**,***-,**,--,**b1,**b1,**b1,**b1,--,M1,M1,M1\",\"M1,M1,M1,--,**,M1,M1,**,--,**,***-,**\",\"M1,M1,M1,--,**,**,**,**,--,M1,M1,M1\"],\"cannons\":[]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/114.json?");

/***/ }),

/***/ "./src/levels/115.json":
/*!*****************************!*\
  !*** ./src/levels/115.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":11,\"targets\":[30000,50000,65000],\"width\":6,\"height\":6,\"colours\":3,\"hard\":0,\"goals\":[{\"type\":\"metal_ball\",\"amount\":40}],\"tilemap\":[\"*S*0,*S*0,*S*0C-,M1*SC-,--,--\",\"*0,*0,M1,M2,--,--\",\"*0*-,M1,M2,M3,M4*S,M6*S\",\"M1,M2,M3,M3,M4,M6\",\"--,--,M4,M4,M4,M6\",\"--,--,M6,M6,M6,M6\"],\"cannons\":[{\"type\":\"horizontal_striped_circle\",\"max\":1}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/115.json?");

/***/ }),

/***/ "./src/levels/116.json":
/*!*****************************!*\
  !*** ./src/levels/116.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":22,\"targets\":[35000,40000,45000],\"width\":12,\"height\":5,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"score\",\"amount\":null}],\"tilemap\":[\"M1*S,M1*S,M1*S,M1*S,M1*S,M1*S,M1*S,M1*S,M1*S,M1*S,M1*S,*-*5\",\"**,**,**,**,**,**,**,**,**,**,M1**,*5*-D1\",\"M2,M2,M2,M2,M2,M2,M2,M2,M2,M2,*5*-,G1\",\"M2,M2,M2,M2,M2,M2,M2,M2,M2,M2,M1**,*5*-D1\",\"M2,M2,M2,M2,M2,M2,M2,M2,M2,M2,**,G-*-*5D1\"],\"cannons\":[]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/116.json?");

/***/ }),

/***/ "./src/levels/12.json":
/*!****************************!*\
  !*** ./src/levels/12.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":20,\"targets\":[40000,65000,80000],\"width\":10,\"height\":7,\"colours\":4,\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S,***S,***S,***S\",\"*5,**,*2,*4,*2,*4,*2,*4,*5,**\",\"**,**,*4,*3,*2,*1,*0,*2,**,**\",\"*5,**,*2,*5,*/,*5*O,*5,*4,**,*5\",\"**,**,*4,*0,*1,*2,*3,*2,**,**\",\"*O,**,*2,*4,*2,*4,*2,*4,*5,*O\",\"**,**,*5,**,**,*5,**,**,**,**\"],\"goals\":[{\"type\":\"score\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/12.json?");

/***/ }),

/***/ "./src/levels/13.json":
/*!****************************!*\
  !*** ./src/levels/13.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":17,\"targets\":[60000,80000,100000],\"width\":5,\"height\":7,\"colours\":3,\"tilemap\":[\"***SB3,***SB2,***SB3,***SB2,***SB3\",\"**B1,**B3,**B1,**B3,**B1\",\"**T001,**T003,**B1,**T005,**T007\",\"--,--,--,--,--\",\"**T002,**T004,***SB1,**T006,**T008\",\"**B1,**B3,**B1,**B3,**B1\",\"**B3,**B2,**B3,**B2,**B3\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/13.json?");

/***/ }),

/***/ "./src/levels/14.json":
/*!****************************!*\
  !*** ./src/levels/14.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":25,\"targets\":[20000,40000,60000],\"width\":8,\"height\":7,\"colours\":5,\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S,***S\",\"**,**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**,**\",\"**,*|,**,**,**,**,*|,**\",\"**,**,**,**,**,**,**,**\",\"**,*O,**,**,**,**,*O,**\",\"**,**,**,**,**,**,**,**\"],\"goals\":[{\"type\":\"blue_circle\",\"amount\":40}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/14.json?");

/***/ }),

/***/ "./src/levels/15.json":
/*!****************************!*\
  !*** ./src/levels/15.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":22,\"targets\":[100000,130000,160000],\"width\":9,\"height\":9,\"colours\":4,\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S,***S,***S\",\"**,**,**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**,**,**\",\"*5,*4,*5,*4,*5,*4,*5,*4,*5\",\"*4,*5,*4,*5,*4,*5,*4,*5,*4\",\"*5,*4,*5,*4,*5,*4,*5,*4,*5\",\"*4,*5,*4,*5,*4,*5,*4,*5,*4\",\"*5,*4,*5,*4,*5,*4,*5,*4,*5\",\"*4,*5,*4,*5,*4,*5,*4,*5,*4\"],\"goals\":[{\"type\":\"green_circle\",\"amount\":100},{\"type\":\"orange_circle\",\"amount\":100}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/15.json?");

/***/ }),

/***/ "./src/levels/16.json":
/*!****************************!*\
  !*** ./src/levels/16.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":20,\"targets\":[20000,30000,40000],\"width\":6,\"height\":6,\"colours\":5,\"hard\":1,\"tilemap\":[\"--,**T002,***S,***S,**T004,--\",\"**,**,**,**,**,**\",\"**,**,**,**,**,**\",\"**,*0,*3,*3,*0,**\",\"*4,*1,*4,*4,*1,*4\",\"--,*3,*4T003,*4T001,*3,--\"],\"goals\":[{\"type\":\"red_circle\",\"amount\":32},{\"type\":\"purple_circle\",\"amount\":24}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/16.json?");

/***/ }),

/***/ "./src/levels/17.json":
/*!****************************!*\
  !*** ./src/levels/17.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":19,\"targets\":[30000,50000,75000],\"colours\":4,\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S,***S,***S\",\"**,**,**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**,**,**\",\"**T001,**T003,**T005,**T007,**T009,**T011,**T013,**T015,**T017\",\"--,--,--,--,--,--,--,--,--\",\"**T002,**T004,**T006,**T008,**T010,**T012,**T014,**T016,**T018\",\"**,**,**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**,**,**\"],\"goals\":[{\"type\":\"blue_circle\",\"amount\":50},{\"type\":\"green_circle\",\"amount\":50},{\"type\":\"orange_circle\",\"amount\":50},{\"type\":\"purple_circle\",\"amount\":50}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/17.json?");

/***/ }),

/***/ "./src/levels/18.json":
/*!****************************!*\
  !*** ./src/levels/18.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":35,\"targets\":[40000,65000,90000],\"width\":11,\"height\":8,\"colours\":5,\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S,***S,***S,***S,***S\",\"**,**B2,**,**B2,**,**B2,**,**B2,**,**B2,**\",\"**B2,**,**B2,**,**B2,**,**B2,**,**B2,**,**B2\",\"**T001,**B2T003,**T009,**B2,**,**B2,**,**B2,**T011,**B2T005,**T007\",\"--,--,--,**B1,--,**B1,--,**B1,--,--,--\",\"**T002,**T004,**T010,**,**,**,**,**,**T012,**T006,**T008\",\"**B2,**,**B2,**,**B2,**,**B2,**,**B2,**,**B2\",\"**B1,**B1,**B1,**B1,**B1,*-B1,**B1,**B1,**B1,**B1,**B1\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/18.json?");

/***/ }),

/***/ "./src/levels/19.json":
/*!****************************!*\
  !*** ./src/levels/19.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":33,\"targets\":[100000,130000,140000],\"width\":10,\"height\":5,\"colours\":4,\"tilemap\":[\"**B2*S,**B2*S,**B1*S,**B1*S,**B1*S,**B1*S,**B1*S,**B1*S,**B2*S,**B2*S\",\"**B3,**B3,**B1,**B1,**B1,**B1,**B1,**B1,**B3,**B3\",\"**B3,**B3,**B1,**B1,**B1,**B1,**B1,**B1,**B3,**B3\",\"--,--,**B2,**B2,**B2,**B2,**B2,**B2,--,--\",\"**T002B1B3,--,**B2T001,**B2,**B2,**B2,**B2,**B2T003,--,**T004B1B3\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/19.json?");

/***/ }),

/***/ "./src/levels/2.json":
/*!***************************!*\
  !*** ./src/levels/2.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":15,\"targets\":[3500,4500,6000],\"width\":7,\"height\":7,\"colours\":6,\"immediateShowdown\":false,\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S\",\"**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**\",\"**,*-,**,*|,**,*-,**\",\"**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**\"],\"goals\":[{\"type\":\"score\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/2.json?");

/***/ }),

/***/ "./src/levels/20.json":
/*!****************************!*\
  !*** ./src/levels/20.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":18,\"targets\":[50000,60000,70000],\"width\":10,\"height\":9,\"colours\":4,\"tilemap\":[\"***ST004,***S,***S,***S,--,*/T002T013,--,*/T014T015,--,*5T016T011\",\"**,**,**,**,--,--,--,--,--,--\",\"**,*-,**,**,--,--,--,--,--,*/T005T012\",\"*5*|,*5,**,**,**,***S,--,--,--,--\",\"--,--,**,**,*-,**,--,--,--,*/T007T006\",\"--,--,*5,*5,**,**,--,--,--,--\",\"--,--,--,--,**,*-,**,***S,--,*/T009T008\",\"--,--,--,--,**,**,**,**,--,--\",\"--,--,--,--,*5,*5,**,**T001,--,*5T003T010\"],\"goals\":[{\"type\":\"score\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/20.json?");

/***/ }),

/***/ "./src/levels/21.json":
/*!****************************!*\
  !*** ./src/levels/21.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":23,\"targets\":[50000,80000,100000],\"width\":9,\"height\":6,\"colours\":4,\"tilemap\":[\"***S,*1*S,*1*S,***S,***S,***S,*S*-,--,M1***S\",\"**,*0,*0,*1,*0,**,--,--,M2\",\"M1,M1,M1,M1,M1,M1,--,--,M3\",\"M1,M1,M1,M1,M1,M1,--,--,M3\",\"M2,M2,M2,M2,M2,M2,--,--,M3\",\"M2,M3,M3,M3,M3,*-,--,--,*|\"],\"goals\":[{\"type\":\"metal_ball\",\"amount\":50}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/21.json?");

/***/ }),

/***/ "./src/levels/22.json":
/*!****************************!*\
  !*** ./src/levels/22.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":31,\"targets\":[110000,130000,150000],\"width\":8,\"height\":8,\"colours\":4,\"tilemap\":[\"***S,***S,***S,***S,*1*S,*1*S,*2*S,*1*S\",\"*3,M1B3,M1B3,M1B3,M1B3,M1B3,M1B3,**\",\"*3,M1B3,M2B2,M2B2,M2B2,M2B2,M1B3,**\",\"*0,M1B3,M3B2,M5B1,M5B1,M3B2,M1B3,*3\",\"*3,M1B3,M3B2,M5B1,M5B1,M3B2,M1B3,*3\",\"**,M1B3,M2B2,M2B2,M2B2,M2B2,M1B3,*2\",\"**,M1B3,M1B3,M1B3,M1B3,M1B3,M1B3,*3\",\"**,M4B1,M4B1,M4B1,M4B1,M4B1,M4B1,**\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/22.json?");

/***/ }),

/***/ "./src/levels/23.json":
/*!****************************!*\
  !*** ./src/levels/23.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":23,\"targets\":[37500,45000,65000],\"width\":10,\"height\":9,\"colours\":5,\"hard\":2,\"tilemap\":[\"***S,***S,***S,***S,***S,*4*S,***S,***S,***S,***S\",\"*-,**,**,*4,*4,**,*4,*4,**,*-\",\"M1,M1,M1,M1,M1,M1,M1,M1,M1,M1\",\"M1,M1,M1,M1,M1,M1,M1,M1,M1,M1\",\"M1,M1,M1,M1,M1,M1,M1,M1,M1,M1\",\"M2,M2,M2,M2,M2,M2,M2,M2,M2,M2\",\"M2,M2,M2,*|,M2,M2,*-,M2,M2,M2\",\"M3,M3,M3,M3,M3,M3,M3,M3,M3,M3\",\"M3,M3,M4,*-,M5,M5,*|,M4,M3,M3\"],\"goals\":[{\"type\":\"score\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/23.json?");

/***/ }),

/***/ "./src/levels/24.json":
/*!****************************!*\
  !*** ./src/levels/24.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":29,\"targets\":[250000,350000,450000],\"width\":11,\"height\":7,\"colours\":3,\"tilemap\":[\"**B3*S,**B3*S,**B3*S,--,**B3T002,**B3T004,**B3T006,--,**B3T008,**B3T010,**B3T012\",\"**B3,**B3,**B3,--,**B3,**B3,**B3,--,**B3,*-B3,**B3\",\"**B3,*2B3,**B3,--,**B3,*-B3,**B3,--,**B3,**B3,**B3\",\"*2B3,*0B3,*2B3,--,B3M5,B3*O,B3M5,--,B3M6,B3M6,B3M6\",\"M1B3,M1B3,M1B3,--,B3M1,M3B3,B3M1,--,B3M1,M3B3,B3M1\",\"M2B3,M2B3,M2B3,--,M3B3,*OB3M1,M3B3,--,M3B3,B3M1,M3B3\",\"M3B3T001,M3B3T003,M3B3T005,--,M3B3T007,M3B3T009,M3B3T011,--,M3B3,M3B3,M3B3\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/24.json?");

/***/ }),

/***/ "./src/levels/25.json":
/*!****************************!*\
  !*** ./src/levels/25.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":33,\"targets\":[30000,45000,52000],\"width\":7,\"height\":7,\"colours\":4,\"tilemap\":[\"***S,***S,***S,--,***S,***S,***S\",\"**,**,**,--,**,**,**\",\"**,**,**,M6,**,**,**\",\"**,**,M6,M6,M6,**,**\",\"**,**,**,M6,**,**,**\",\"**,**,**,--,**,**,**\",\"M3,M2,M1,M3,M1,M2,M3\"],\"goals\":[{\"type\":\"metal_ball\",\"amount\":45},{\"type\":\"blue_circle\",\"amount\":40},{\"type\":\"striped_circle\",\"amount\":6}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/25.json?");

/***/ }),

/***/ "./src/levels/26.json":
/*!****************************!*\
  !*** ./src/levels/26.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":40,\"targets\":[40000,60000,80000],\"width\":7,\"height\":9,\"colours\":5,\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S\",\"**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**\",\"*5,M1,*5,M2,*5,M1,*5\",\"M1,*5,M1,*5,M1,*5,M1\",\"*5,M2,*5,M3,*5,M2,*5\",\"M3,*5,M3,*5*O,M3,*5,M3\",\"*5,M4,*5,M5,*5,M4,*5\"],\"goals\":[{\"type\":\"radial_circle\",\"amount\":6},{\"type\":\"striped_circle\",\"amount\":6},{\"type\":\"yellow_circle\",\"amount\":18},{\"type\":\"metal_ball\",\"amount\":40}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/26.json?");

/***/ }),

/***/ "./src/levels/27.json":
/*!****************************!*\
  !*** ./src/levels/27.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":27,\"targets\":[40000,60000,80000],\"colours\":5,\"tilemap\":[\"M1*S,*0*S,M1*S,*0*S,M1*S,*0*S,M1*S,*0*S,M1*S\",\"M1,*5,M1,M1,*5,M1,M1,*5,M1\",\"M1,M1,M1,M1,M1,M1,M1,M1,M1\",\"M1,M1,M1,M1,*5*-,M1,M1,M1,M1\",\"M1,M1,M1,*5*|,*/,*5*|,M1,M1,M1\",\"M2,M2,M2,M2,*5*-,M2,M2,M2,M2\",\"M2,M2,M2,M2,M2,M2,M2,M2,M2\",\"M3,*5,M3,M3,*5,M3,M3,*5,M3\",\"M3,M3,M3,M4,M3,M4,M3,M3,M3\"],\"goals\":[{\"type\":\"green_circle\",\"amount\":60},{\"type\":\"metal_ball\",\"amount\":95},{\"type\":\"striped_circle\",\"amount\":14}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/27.json?");

/***/ }),

/***/ "./src/levels/28.json":
/*!****************************!*\
  !*** ./src/levels/28.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":32,\"targets\":[100000,175000,250000],\"colours\":4,\"tilemap\":[\"***S,***S,***S,***S,**T002,**T004,**T006,--,*4*|*S\",\"**,**,**,**,**,**,--,--,M3\",\"**,**,**,**,**,**,**,--,M3\",\"**,**,**,M3,**,**,**,--,M3\",\"**,**,M3,M5,M3,**,**,--,M4\",\"**,**,**,M3,**,**,**,--,M4\",\"**,**,**,**,**,**,**,--,M5\",\"--,**,**,**,**,**,**,--,M5\",\"**T001,**T003,**T005,**,**,**,**,--,M6\"],\"goals\":[{\"type\":\"metal_ball\",\"amount\":45}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/28.json?");

/***/ }),

/***/ "./src/levels/29.json":
/*!****************************!*\
  !*** ./src/levels/29.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":13,\"targets\":[60000,70000,80000],\"width\":4,\"height\":7,\"colours\":3,\"hard\":1,\"tilemap\":[\"***SB3,--,--,*/\",\"**B3,**B3,--,--\",\"**B3,**B3,**B3,--\",\"**B3,**B3,**B3,*5B3\",\"--,**B3,**B3,**B3\",\"--,--,**B3,*5B3\",\"*/B1,--,--,*5*-B2\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/29.json?");

/***/ }),

/***/ "./src/levels/3.json":
/*!***************************!*\
  !*** ./src/levels/3.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":20,\"targets\":[4000,5000,6500],\"width\":7,\"height\":8,\"colours\":5,\"immediateShowdown\":false,\"tilemap\":[\"--,***S,***S,--,***S,***S,--\",\"**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**\",\"**,**,**,*O,**,**,**\",\"**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**\",\"--,**,**,--,**,**,--\"],\"goals\":[{\"type\":\"score\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/3.json?");

/***/ }),

/***/ "./src/levels/30.json":
/*!****************************!*\
  !*** ./src/levels/30.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":37,\"targets\":[250000,350000,450000],\"width\":12,\"height\":9,\"colours\":4,\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S,***S,***S,***S,***S,***S\",\"**,**,**,**,**,**,**,**,**,**,**,**\",\"M1,M1,M1,M1,M1,M1,M1,M1,M1,M1,M1,M1\",\"M1,M1,M1,M1,M1,M1,M1,M1,M1,M1,M1,M1\",\"M2,M2,M2,M2,M2,M2,M2,M2,M2,M2,M2,M2\",\"M3,M3,M3,M3,M3,M3,M3,M3,M3,M3,M3,M3\",\"M4,M4,M4,M4,M4,M4,M4,M4,M4,M4,M4,M4\",\"M5,M5,M5,M5,M5,M5,M5,M5,M5,M5,M5,M5\",\"M6,M6,M6,M6,M6,M6,M6,M6,M6,M6,M6,M6\"],\"goals\":[{\"type\":\"metal_ball\",\"amount\":264}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/30.json?");

/***/ }),

/***/ "./src/levels/31.json":
/*!****************************!*\
  !*** ./src/levels/31.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":17,\"targets\":[13000,20000,27500],\"width\":6,\"height\":6,\"colours\":4,\"tilemap\":[\"***S,***S,*2*S,***S,***S,***S\",\"**,**,**,**,**,**\",\"**,**,*2,**,**,**\",\"**D1,**D1,*2D1,**D1,**D1,**D1\",\"**D1,**D1,*OD1,*OD1,**D1,**D1\",\"*/D1,**D1,**D1,**D1,**D1,*/D1\"],\"goals\":[{\"type\":\"score\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/31.json?");

/***/ }),

/***/ "./src/levels/32.json":
/*!****************************!*\
  !*** ./src/levels/32.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":37,\"targets\":[40000,70000,100000],\"width\":8,\"height\":7,\"colours\":5,\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S,***S\",\"**,**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**,**\",\"**,**,*O,**,**,*O,**,**\",\"**D1B2,**D1B2,**D1B2,**D1B2,**D1B2,**D1B2,**D1B2,**D1B2\",\"**D1B2,*-D1B2,**D1B2,**D1B2,**D1B2,**D1B2,*-D1B2,**D1B2\",\"**D2B1,**D2B1,**D2B1,**D2B1,**D2B1,**D2B1,**D2B1,**D2B1\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/32.json?");

/***/ }),

/***/ "./src/levels/33.json":
/*!****************************!*\
  !*** ./src/levels/33.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":33,\"targets\":[60000,80000,100000],\"colours\":5,\"hard\":3,\"tilemap\":[\"***SD1,***SD1,***S,***S,***SD1,***S,***S,***S,***S\",\"**,**D1,**D1,**,**D1,**D1,**,**,**\",\"*4D2,**,**D1,**D1,**,*4*O,*4D1,**,*4\",\"*4D2,*4D2,**,**D1,**D1,**,**D1,**D1,**\",\"**,*4D2,*4D2,**,**D1,**D1,**,**D1,**D1\",\"**,**,*4*OD2,*4D2,**,**D1,**D1,**,**D1\",\"*4D2,**,**,*4D2,*4D2,**,**D1,**D1,**\",\"*4D2,*4D2,**,**,*4D2,*4D2,**,**D1,**D1\",\"**,*4D2,*4D2,**,**,*4D2,*4D2,**,**D1\"],\"goals\":[{\"type\":\"red_circle\",\"amount\":120}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/33.json?");

/***/ }),

/***/ "./src/levels/34.json":
/*!****************************!*\
  !*** ./src/levels/34.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"time\":60,\"targets\":[40000,70000,100000],\"width\":6,\"height\":8,\"colours\":4,\"tilemap\":[\"***S,***S,***S,***S,***S,***S\",\"**,**,**,**,**,**\",\"**,**,**,**,**,**\",\"**,**,**,**,**,**\",\"*+D1,**D1,**D1,**D1,**D1,*+D1\",\"*/D2,**D2,*+D2,*+D2,**D2,*/D2\",\"--,--,--,--,--,--\",\"--,*+,--,--,*+,--\"],\"goals\":[{\"type\":\"score\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/34.json?");

/***/ }),

/***/ "./src/levels/35.json":
/*!****************************!*\
  !*** ./src/levels/35.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"time\":60,\"targets\":[60000,90000,110000],\"width\":9,\"height\":9,\"colours\":4,\"tilemap\":[\"***S,***S,***S,***S,*+*S,***S,***S,***S,***S\",\"--,**,**,**,**,**,**,**,--\",\"--,--,**,**,**,**,**,--,--\",\"--,--,*+D1,**,**,**,*+D1,--,--\",\"--,--,--,M1,*+,M1,--,--,--\",\"--,--,M1,M2,M2,M2,M1,--,--\",\"--,--,M2,M2,M2,M2,M2,--,--\",\"--,M3,M2,M2,M2,M2,M2,M3,--\",\"*+*4D2,*+*4D1,M3,*+*4,M3,*+*4,M3,*+*4D1,*+*4D2\"],\"goals\":[{\"type\":\"score\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/35.json?");

/***/ }),

/***/ "./src/levels/36.json":
/*!****************************!*\
  !*** ./src/levels/36.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":23,\"targets\":[50000,60000,70000],\"width\":7,\"height\":7,\"colours\":4,\"tilemap\":[\"--,--,--,**B2*S,--,--,--\",\"--,--,**B2,**B2,**B2,--,--\",\"--,**B2,**B2,M1B2,*3B2,**B2,--\",\"**B1,**B2,M1B3,D1***OB2,M1B3,*3B2,**B1\",\"--,**B3,**B2,M1B3,**B2,*3B3,--\",\"--,--,**B3,**B2,**B3,--,--\",\"--,--,--,**B2,--,--,--\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/36.json?");

/***/ }),

/***/ "./src/levels/37.json":
/*!****************************!*\
  !*** ./src/levels/37.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":21,\"targets\":[90000,120000,140000],\"width\":9,\"height\":7,\"colours\":3,\"tilemap\":[\"*2*SD1,*1*S,*0*S,M1*S,M2*S,M3*ST011,--,--,--\",\"*0,*2,M1,M2,-OT009,--,--,--,-OT012\",\"*2,M1,M1,-OT007,--,--,--,-OT010,-O\",\"*2,M1,-OT005,--,--,--,-OT008,-O,-OD1\",\"M1,M1T003,--,--,--,-OT006,-O,-O,M5\",\"-OT001,--,--,--,-OT004,-O,-O,M5,M6\",\"--,--,--,M3T002,-O,-OD1,M5,M6,M6\"],\"goals\":[{\"type\":\"blue_circle\",\"amount\":150},{\"type\":\"green_circle\",\"amount\":150},{\"type\":\"metal_ball\",\"amount\":50}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/37.json?");

/***/ }),

/***/ "./src/levels/38.json":
/*!****************************!*\
  !*** ./src/levels/38.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":30,\"targets\":[15000,40000,60000],\"width\":10,\"height\":9,\"colours\":5,\"tilemap\":[\"*5*S,**T018,**T014,***S,**T022,**T024,***S,**T016,**T020,*5*S\",\"**,**,**,*5T005,**T007,**T009,*5T011,**,**,**\",\"*5,**,**,--,--,--,--,**,**,*5\",\"**,**,**,**T006,--,--,**T012,**,**,**\",\"*5T017,**,**,**,*5T008,*5T010,**,**,**,*5T019\",\"--,*5T013,**,*5*O,**,**,*5*O,**,*5T015,--\",\"--,--,**T021,**,**,**,**,**T023,--,--\",\"*/D1T002,--,--,*5*-D1,**,**,*5*-D1,--,--,*/D2T004\",\"*5,--,--,*|T001D2,*5,*5,*|T003D2,--,--,*5\"],\"goals\":[{\"type\":\"yellow_circle\",\"amount\":20},{\"type\":\"red_circle\",\"amount\":40},{\"type\":\"rainbow_circle\",\"amount\":2}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/38.json?");

/***/ }),

/***/ "./src/levels/39.json":
/*!****************************!*\
  !*** ./src/levels/39.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":14,\"targets\":[80000,120000,123456],\"width\":5,\"height\":8,\"colours\":4,\"tilemap\":[\"**B3*S,**B3*S,**B3*S,**B3*S,**B3*S\",\"**B3,**B3,**B3,**B3,**B3T003\",\"**B3,**B3,**B3,--,--\",\"**B3,**B3,**B3,**B3,**B3T004\",\"**T001B3,**B3,**B3,**B3,**B3\",\"--,--,**B3,**B3,**B3\",\"**T002B3,**B3,**B3,**B3,**B3\",\"**B3,**B3,**B3,**B3,*/D1B3\"],\"goals\":[{\"type\":\"score\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/39.json?");

/***/ }),

/***/ "./src/levels/4.json":
/*!***************************!*\
  !*** ./src/levels/4.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":20,\"targets\":[8000,12000,16000],\"width\":7,\"height\":5,\"colours\":4,\"immediateShowdown\":false,\"tilemap\":[\"*1*S,*3*S,*2*S,*1*S,*0*S,*2*S,*2*S\",\"*0,*1,*3,*0,*0,*1,*1\",\"*0,*2,*2,*3,*2,*2,*0\",\"*1,*1,*0,*2,*1,*0,*1\",\"--,*2,*0,*1,*3,*3,--\"],\"goals\":[{\"type\":\"score\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/4.json?");

/***/ }),

/***/ "./src/levels/40.json":
/*!****************************!*\
  !*** ./src/levels/40.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":21,\"targets\":[60000,80000,100000],\"colours\":4,\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S,***S,***S\",\"*4,**,**,**,*4,**,**,**,*4\",\"**,**,*4,**,**,**,*4,**,**\",\"*4T001,**T003,*4T005,**T007,*4T009,**T011,*4T013,**T015,*4T017\",\"--,--,--,--,--,--,--,--,--\",\"**T002,**T004,**T006,**T008,**T010,**T012,**T014,**T016,**T018\",\"**,**,**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**,**,**\",\"M2D2,*-D1,M2D2,*-,M2D1,*-D1,M2D2,*-,M2D2\"],\"goals\":[{\"type\":\"striped_circle\",\"amount\":10},{\"type\":\"red_circle\",\"amount\":10},{\"type\":\"metal_ball\",\"amount\":10}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/40.json?");

/***/ }),

/***/ "./src/levels/41.json":
/*!****************************!*\
  !*** ./src/levels/41.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":25,\"targets\":[50000,75000,100000],\"width\":10,\"height\":6,\"colours\":4,\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S,***S,***S,***S\",\"**,G1,**,G1,**,**,G1,**,G1,**\",\"**,M1,**,M1,*3,*1,M1,**,M1,**\",\"**,M2,**,M3,*1,*3,M3,**,M2,**\",\"**,M3,**,M3,*3,*1,M3,**,M3,**\",\"**G-,**G-,**G-,**G-,**G-,**G-,**G-,**G-,**G-,**G-\"],\"goals\":[{\"type\":\"globe\",\"amount\":4}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/41.json?");

/***/ }),

/***/ "./src/levels/42.json":
/*!****************************!*\
  !*** ./src/levels/42.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":18,\"targets\":[80000,100000,120000],\"width\":11,\"height\":8,\"colours\":4,\"hard\":1,\"tilemap\":[\"G2*S,M1*S,M1*S,G2*S,--,*-*5,--,G2*S,M1*S,M1*S,G2*S\",\"**,**,**,**,--,*5,--,**,**,**,**\",\"**,**,**,**,--,***O,--,**,**,**,**\",\"**,M1,M2,**,--,*5*-,--,**,M2,M1,**\",\"-O,-O,-O,-O,--,--,--,-O,-O,-O,-O\",\"-O,-O,-O,-O,--,--,--,-O,-O,-O,-O\",\"-O,-O,-O,-O,--,--,--,-O,-O,-O,-O\",\"G2G-,*-D2G-,**D1G-,G2G-,--,--,--,G2G-,**D2G-,*-D1G-,G2G-\"],\"goals\":[{\"type\":\"globe\",\"amount\":8}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/42.json?");

/***/ }),

/***/ "./src/levels/43.json":
/*!****************************!*\
  !*** ./src/levels/43.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":20,\"targets\":[80000,130000,190000],\"width\":10,\"height\":9,\"colours\":4,\"tilemap\":[\"***S,--,***S,***S,***S,***S,**T002D1,**T004,**T006,**T008\",\"G1,--,**,**,**,**,G2D1,**,**,**\",\"M1,--,**,**,**,**,**D1,**,**,**\",\"M1,--,**,**,**,**,**D1,**,**,**\",\"M1,--,**D1,G2D1,**D1,**D1,**D1,**,**,**\",\"M1,--,**,**,**,**,**,**D2,**,**\",\"M1,--,**,**,**,**,**,**,**D2,**\",\"D1G2,--,**,**,**,**,**,**,**,**D2\",\"D1G2G-,--,**T001,**T003,**T005,**T007,**G-,**G-,**G-,**D2G-\"],\"goals\":[{\"type\":\"globe\",\"amount\":5}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/43.json?");

/***/ }),

/***/ "./src/levels/44.json":
/*!****************************!*\
  !*** ./src/levels/44.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":16,\"targets\":[160000,200000,300000],\"width\":11,\"height\":9,\"colours\":3,\"tilemap\":[\"--,**T002,--,--,G2*S,G2*S,*/*S,--,--,**T004,--\",\"**,--,**,--,G2,*5*O,G2,--,**,--,**\",\"**,**,**,--,M1,*5,G2,--,**,**,**\",\"**,G2,**,--,G2,G2,*5*O,--,**,G2,**\",\"**,**,**,--,*/T001,G2,G2T003,--,**,**,**\",\"**,**,**,--,--,D1,--,--,**,**,**\",\"**,**,**,--,**,**,**,--,**,**,**\",\"**,*OD1,**,--,**,G2,**,--,**,*OD1,**\",\"**G-,*-G-,**G-,--,**G-,M1G-,**G-,--,**G-,*-G-,**G-\"],\"goals\":[{\"type\":\"globe\",\"amount\":9}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/44.json?");

/***/ }),

/***/ "./src/levels/45.json":
/*!****************************!*\
  !*** ./src/levels/45.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"time\":40,\"targets\":[30000,50000,65000],\"width\":5,\"height\":5,\"colours\":4,\"hard\":2,\"tilemap\":[\"***S,**T002,**T004,**T006,*+D1T008\",\"**,**,**,**,G1D1\",\"**,**,**,**D1,G1D1\",\"**,**,**,**D1,G2D1\",\"**T001,**T003,*+D1T005,**D1T007,*OD1G-\"],\"goals\":[{\"type\":\"score\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/45.json?");

/***/ }),

/***/ "./src/levels/46.json":
/*!****************************!*\
  !*** ./src/levels/46.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":26,\"targets\":[20000,40000,75000],\"width\":8,\"height\":6,\"colours\":5,\"tilemap\":[\"***S,***S,***S,*3*S,*3*S,***S,***S,***S\",\"**,**,**,*3,**,*3,**,**\",\"M1,M1,M1,M1,M1,M1,M1,M1\",\"-O,-O,-O,-O,-O,-O,-O,-O\",\"-OB2D1,-OB1D1,-OB2D1,-OB1D1,-OB2D1,-OB1D1,-OB2D1,-OB1D1\",\"-OB1D1,*OB2D1,-OB1D1,-OB2D1,-OB1D1,-OB2D1,*OB1D1,-OB2D1\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/46.json?");

/***/ }),

/***/ "./src/levels/47.json":
/*!****************************!*\
  !*** ./src/levels/47.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":25,\"targets\":[30000,50000,8000],\"width\":9,\"height\":7,\"colours\":4,\"tilemap\":[\"G1T001,**T002T003,M1T004T005,M1T006T007,M1T008T009,M1T010T011,M1T012T013,**T014T015,G-**T016\",\"--,--,--,--,--,--,--,--,--\",\"***S,***S,***S,***S,***S,***S,***S,***S,***S\",\"**,**,**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**,**,**\",\"**,M1,D1,D2G1,D1,D2G1,D1,M1,**\",\"**G-,**G-,**G-,**G-,**G-,**G-,**G-,**G-,**G-\"],\"goals\":[{\"type\":\"globe\",\"amount\":3}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/47.json?");

/***/ }),

/***/ "./src/levels/48.json":
/*!****************************!*\
  !*** ./src/levels/48.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":23,\"targets\":[20000,35000,45000],\"width\":8,\"height\":8,\"colours\":4,\"hard\":1,\"tilemap\":[\"*5T003,--,--,***S,***S,M1T002,***S,***S\",\"--,*4T009,--,**,M1,M1,M1,**\",\"*5D1T004T005,--,--,**,**,M1,**,**\",\"--,*4D1T010T011,--,**,**,**,**,**\",\"*5D1T006T007,--,--,**,**,**,**,**\",\"--,*4D1T012,--,**,**,**,**,**\",\"*5D1T008,--,--,**,**,**,**,**\",\"**T001,--,--,*5D1,*4D2,*5D2,*4D2,*5D1\"],\"goals\":[{\"type\":\"yellow_circle\",\"amount\":4},{\"type\":\"red_circle\",\"amount\":4}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/48.json?");

/***/ }),

/***/ "./src/levels/49.json":
/*!****************************!*\
  !*** ./src/levels/49.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":30,\"targets\":[50000,75000,90000],\"width\":11,\"height\":8,\"colours\":5,\"hard\":0,\"goals\":[{\"type\":\"globe\",\"amount\":\"5\"}],\"tilemap\":[\"--,--,--,--,***S,***S,***S,--,--,--,--\",\"--,--,**T004,**T002,G1,**,G1,**T006,**T008,--,--\",\"--,**,**,**,G1D1,*0,G1D1,*0,*0,**,--\",\"**,*0,*1,*1,*2,G2,*2,*1,*1,*0,**\",\"G-**,*0,*1,*1,*2,*1,*2,*1,*1,*0,G-**\",\"--,G-**,*0,*0,*1*|D1,*0,*1*|D1,*0,*0,G-**,--\",\"--,--,G-**,**T003,*0,***|D1,*0,**T007,G-**,--,--\",\"--,--,--,--,**D1T001,G-**D2,**D1T005,--,--,--,--\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/49.json?");

/***/ }),

/***/ "./src/levels/5.json":
/*!***************************!*\
  !*** ./src/levels/5.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":19,\"targets\":[15000,22500,30000],\"width\":9,\"height\":9,\"colours\":6,\"tilemap\":[\"***S,***S,*5*S,*5*S,*2*S,*3*S,***S,***S,***S\",\"**,*5,*4,*4,*|*1,*O*4,**,*5,**\",\"**,**,**,**,**,**,*5,**,**\",\"**T003,**,**,**,**T005,**,**,**,**T001\",\"--,**,*O,**,--,**,*O,**,--\",\"**T004,**,**,**,**T006,**,**,**,**T002\",\"**,**,**,**,**,**,**,**,**\",\"**,*O,**,--,--,--,**,*O,**\",\"**,**,**,--,*/*S,--,**,**,**\"],\"goals\":[{\"type\":\"score\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/5.json?");

/***/ }),

/***/ "./src/levels/50.json":
/*!****************************!*\
  !*** ./src/levels/50.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":31,\"targets\":[500000,600000,750000],\"width\":12,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"score\",\"amount\":null}],\"tilemap\":[\"***S,***O*S,***S,*O*S,***S,*O*S,***S,***O*S,***S,*O*S,***S,*O*S\",\"*O,M6,M6,M6,M6,**,*O,M6,M6,M6,M6,**\",\"**,M6,D1,*-D2,M1D2,*O,**,M6,D1,*-D2,M6,*O\",\"*O,M6,*-D2,D1,M1D2,**,*O*5,M6,*-D2,D1,M6,**\",\"**,M6,M6,M6,M6,*O*5,**,M6,**,**,M6,*O\",\"*O,M1D2,*/D2,D1,M6,**,*O*5,M6,*OD2,D1,M6,**\",\"**,M1D2,D1,*OD2,M6,*O,**,M6,D1,*/D2,M6,*O\",\"*O,M6,M6,M6,M6,**,*O,M6,M6,M6,M6,**\",\"**,*O,**,*O,**,*O,**,*O,**,*O,**,*O\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/50.json?");

/***/ }),

/***/ "./src/levels/51.json":
/*!****************************!*\
  !*** ./src/levels/51.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":32,\"targets\":[175000,200000,250000],\"width\":12,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null}],\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S,***S,***S,***S,***S,***S\",\"**,**,**,**,**,**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**,**,**,**,**,**\",\"B1**b1,B1M2b1,B1M2b1,B1M1b1,B1M1b1,B1M1b1,B1M1b1,B1M1b1,B1M1b1,B1M2b1,B1M2b1,B1M2b1\",\"B1M2b1,B1*OD1,B1M2b1,B1M2b1,B1M2b1,B1M2b1,B1M2b1,B1M2b1,B1M2b1,B1M2b1,B1*OD1,B1M2b1\",\"B1M1b2,B1M1b1,B1M1b2,B1M1b1,B1M1b1,B1M1b1,B1M1b1,B1M1b1,B1M1b1,B1M1b1,B1M1b1,B1M1b1\",\"B2M1b2,B1M1b2,B2M1b2,B1M1b2,B2*OD2,B1M1b2,B2M1b2,B1*OD2,B2M1b2,B1M1b2,B2M1b2,B1M1b2\",\"B2M1b2,B2M1b3,B2M1b2,B2M1b3,B2M1b2,B2M1b3,B2M1b2,B2M1b3,B2M1b2,B2M1b3,B2M1b2,B2M1b3\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/51.json?");

/***/ }),

/***/ "./src/levels/52.json":
/*!****************************!*\
  !*** ./src/levels/52.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":13,\"targets\":[20000,40000,60000],\"width\":5,\"colours\":4,\"hard\":3,\"goals\":[{\"type\":\"globe\",\"amount\":\"5\"}],\"tilemap\":[\"*S*3,*S*3,*S*2*|b3,*S*3,*S*3\",\"*2,G1b3,*1,G1b3,*2\",\"*2,*1,*0,*1,*2\",\"*3b1,*0b1,*2b1,*0b1,*3b1\",\"*3b1,*2b1,*3b1,*2b1,*3b1\",\"**b1,**b1,**b1,**b1,**b1\",\"**b1,**b1,G2b1,**b1,**b1\",\"**b1,***|b3,G2b1,***|b3,**b1\",\"G-**b1,G-**b1,G-G2b1,G-**b1,G-**b1\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/52.json?");

/***/ }),

/***/ "./src/levels/53.json":
/*!****************************!*\
  !*** ./src/levels/53.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":17,\"targets\":[80000,125000,175000],\"colours\":6,\"hard\":0,\"goals\":[{\"type\":\"rainbow_circle\",\"amount\":\"30\"}],\"tilemap\":[\"*S*1,*S*0,*S*1,*S*0,*S*1,*S*0,*S*1,*S*0,*S*1\",\"*0,*1,*0,*1,*5*O,*1,*0,*1,*0\",\"*1,*0,*1,*5,*0,*5,*1,*0,*1\",\"*/b3,**b1,*/b3,**b2,*/b3,**b2,*/b3,**b1,*/b3\",\"**b1,*/b3,**b1,*/b3,**b1,*/b3,**b1,*/b3,**b1\",\"*/b3,**b1,*/b3,**b1,*/b1,**b1,*/b3,**b1,*/b3\",\"M1b1,*/D1,M1b1,*/D1,M1b1,*/D1,M1b1,*/D1,M1b1\",\"*/D2,M1b1,*/D2,M1b1,*/D2,M1b1,*/D2,M1b1,*/D2\",\"*/D2,*/D2,M2b1,*/D2,*/D2,*/D2,M2b1,*/D2,*/D2\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/53.json?");

/***/ }),

/***/ "./src/levels/54.json":
/*!****************************!*\
  !*** ./src/levels/54.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"time\":25,\"targets\":[90000,125000,175000],\"height\":8,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"score\",\"amount\":null}],\"tilemap\":[\"*S*3,*S*2,*S*3,*S*1,*S*3,*S*1,*S*3,*S*2,*S*3\",\"*0,G1,*0,G1,*1,G1,*0,G1,*0\",\"*0,*1*O,*0,*1*O,**,*1*O,*0,*1*O,*0\",\"M1,*0b1,M1,***+b3,M2,***+b3,M1,*0b1,M1\",\"**b1,M2,**b1,M2,***|b3,M2,**b1,M2,**b1\",\"M1,*+*5b3,M1,***+b3,M4,***+b3,M1,*+*5b3,M1\",\"*3,M1,*3,M1,*3,M1,*3,M1,*3\",\"G-*1,G-*/D2,G-*1,G-*/D2,G-*1,G-*/D2,G-*1,G-*/D2,G-*1\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/54.json?");

/***/ }),

/***/ "./src/levels/55.json":
/*!****************************!*\
  !*** ./src/levels/55.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":9,\"targets\":[60000,95000,115000],\"height\":8,\"colours\":3,\"hard\":0,\"increaseColours\":true,\"goals\":[{\"type\":\"button\",\"amount\":null}],\"tilemap\":[\"--,--,--,B1***S,B1***S,B1***S,--,--,--\",\"--,B3*S,B1**,B3,B1**,B3,B1**,B3*S,--\",\"--,B1**,B3,B1**,B3,B1**,B3,B1**,--\",\"**b1,B3D1,**b1,B3D1,**b1,B3D1,**b1,B3D1,**b1\",\"**b1,**b1,B3**b2,**b1,B3**b2,**b1,B3**b2,**b1,**b1\",\"--,B3**b2,**b3,B3**b2,***Ob3,B3**b2,**b3,B3**b2,--\",\"--,*/b3,B3**b2,**b3,B3**b2,**b3,B3**b2,*/b3,--\",\"--,--,--,**b3,**b3,**b3,--,--,--\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/55.json?");

/***/ }),

/***/ "./src/levels/56.json":
/*!****************************!*\
  !*** ./src/levels/56.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":17,\"targets\":[60000,95000,115000],\"colours\":4,\"hard\":2,\"goals\":[{\"type\":\"globe\",\"amount\":\"5\"}],\"tilemap\":[\"***S,-OT002,***S,-OT004,***S,-OT006,***S,-OT008,***S\",\"**,**,**,**,*3*|,**,**,**,**\",\"**,**,*3,*3,**,*3,*3,**,**\",\"**b1,***|b3,**b1,***|b3,G2b3,***|b3,**b1,***|b3,**b1\",\"**b1,-O,**b1,-O,**b1,-O,**b1,-O,**b1\",\"G-**b1,G--O,G-**b1,G--O,G-**b1,G--O,G-**b1,G--O,G-**b1\",\"--,--,--,--,--,--,--,--,--\",\"--,G1b1T001,--,G1,--,G1,--,G1b1T007,--\",\"--,--,--,M2T003,--,M2T005,--,--,--\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/56.json?");

/***/ }),

/***/ "./src/levels/57.json":
/*!****************************!*\
  !*** ./src/levels/57.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":20,\"targets\":[60000,95000,115000],\"width\":12,\"height\":7,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null}],\"tilemap\":[\"***Sb1,*5*S,***Sb1,--,-OT002,B1***SD1,B1***SD1,-OT004,--,-OT006,B1-O,-OT008\",\"*5,**,*5,--,B1-OD1,-O,-O,B1-OD1,--,B1**b1,-O,B1**b1\",\"**b1,**b3,**b1,--,-O,-O,-O,-O,--,-O,-O,-O\",\"B1-OD1,-O,B1-OD1,--,***Ob1,**b1,**b1,***Ob1,--,-O,-O,-O\",\"-O,B1-OD1,-O,--,**b1,**b2,**b2,**b1,--,-O,B1-OD1,-O\",\"B1-OD1,-O,B1-OD1,--,**b2,*/b3,*5b3,**b2,--,B1-OD1,-O,B1-OD1\",\"-OT001,B1-OD1,-OT003,--,**b1,**b2T005,**b2T007,**b1,--,B3M1b2,B3*|b2,B3M1b2\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/57.json?");

/***/ }),

/***/ "./src/levels/58.json":
/*!****************************!*\
  !*** ./src/levels/58.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":14,\"targets\":[10000,20000,30000],\"width\":4,\"height\":4,\"colours\":3,\"hard\":0,\"goals\":[{\"type\":\"radial_circle\",\"amount\":\"2\"},{\"type\":\"striped_circle\",\"amount\":\"6\"}],\"tilemap\":[\"*S*1,*S*2,*S*2,*S*1\",\"*0,*0D1,*1*-D2,*0\",\"*2,*0*-D2,*0D1,*2\",\"*1,*2,*2,*1\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/58.json?");

/***/ }),

/***/ "./src/levels/59.json":
/*!****************************!*\
  !*** ./src/levels/59.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"time\":10,\"targets\":[20000,30000,35000],\"width\":6,\"height\":7,\"colours\":5,\"hard\":0,\"goals\":[{\"type\":\"score\",\"amount\":null}],\"tilemap\":[\"*3*S,*0*S,*3*S,*0*S,*3*S,*0*S\",\"*0,*3,*0,*3,*0,*3\",\"*3,*0,*3,*0,*3,*0\",\"*+b1,**b1,**b1,**b1,**b1,*+b1\",\"b1-O,b1-O,*+b1,*+b1,b1-O,b1-O\",\"b2-O,*+b2,b2-O,b2-O,*+b2,b2-O\",\"*+b2,*/b3,b2-O,b2-O,*/b3,*+b2\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/59.json?");

/***/ }),

/***/ "./src/levels/6.json":
/*!***************************!*\
  !*** ./src/levels/6.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":15,\"targets\":[30000,50000,75000],\"width\":6,\"height\":6,\"colours\":4,\"tilemap\":[\"--,***SB1,***SB1,***SB1,***SB1,--\",\"**B1,**B1,**B1,**B1,**B1,**B1\",\"**B1,*0B1,*0B1,**B1,*0B1,**B1\",\"**B1,**B1,**B1,*0B1,**B1,**B1\",\"**B1,**B1,**B1,**B1,**B1,**B1\",\"--,**B1,**B1,**B1,**B1,--\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/6.json?");

/***/ }),

/***/ "./src/levels/60.json":
/*!****************************!*\
  !*** ./src/levels/60.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":26,\"targets\":[50000,90000,120000],\"colours\":4,\"hard\":1,\"goals\":[{\"type\":\"yellow_circle\",\"amount\":\"6\"},{\"type\":\"blue_circle\",\"amount\":\"140\"}],\"tilemap\":[\"*5,--,**T002,***S,***S,***S,**T004,--,*5\",\"--,--,**,**,**,**,**,--,--\",\"*5,--,**,**,**,**,**,--,*5\",\"--,--,**,**,**,**,**,--,--\",\"*5,--,*0b1,**b1,*0b1,**b1,*0b1,--,*5\",\"--,--,**b1,*0b1,**b1,*0b1,**b1,--,--\",\"*5b1,--,*0b1,**b1,*0b1,**b1,*0b1,--,*5b1\",\"--,--,**D1,*0D1,**D1,*0D1,**D1,--,--\",\"*5D1,--,*0D1,**T001,*0D1,**T003,*0D1,--,*5D1\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/60.json?");

/***/ }),

/***/ "./src/levels/61.json":
/*!****************************!*\
  !*** ./src/levels/61.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":30,\"targets\":[80000,110000,150000],\"width\":8,\"height\":8,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null},{\"type\":\"globe\",\"amount\":\"4\"}],\"tilemap\":[\"B2***S,B2***S,B2***S,B2***S,B2***S,B2***S,B2***S,B2***S\",\"B2**,B2**,B2**,B2**,B2**,B2**,B2**,B2**\",\"B2**,B2**,B2**,B2G1,B2G1,B2**,B2**,B2**\",\"B2**,B2G1,B2**,B2M2,B2M2,B2**,B2G1,B2**\",\"B2**,B2M3,B2*0,B2M2,B2M2,B2*2,B2M3,B2**\",\"B2**,B2M1,B2*0,B2M1,B2M1,B2**,B2M1,B2**\",\"B2**,B2M1,B2**,B2M1,B2M1,B2*2,B2M1,B2**\",\"G-B2**,G-B2M3,G-B2*0,G-B2M3,G-B2M3,G-B2*2,G-B2M3,G-B2**\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/61.json?");

/***/ }),

/***/ "./src/levels/62.json":
/*!****************************!*\
  !*** ./src/levels/62.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":33,\"targets\":[90000,120000,150000],\"height\":7,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null},{\"type\":\"globe\",\"amount\":\"1\"}],\"tilemap\":[\"***S,***S,***S,*S*0,***S,***S,***S,--,G1\",\"B1***-D1,B1**,B1*0,B1*4*O,B1*0,B1**,B1***-D1,--,*5\",\"B1**,B1*0,B1*4,B1*0,B1*4,B1*0,B1**,--,*5\",\"B2**b2,B2**b2,B2**b2,B2**b2,B2**b2,B2**b2,B2**b2,--,M2\",\"B3**b1,B3**b1,B3**b1,B3**b1,B3**b1,B3**b1,B3**b1,--,*/\",\"B3**b1,B3**b1,B3**b1,B3**b1,B3**b1,B3**b1,B3**b1,--,M2\",\"B3**b1,B3**b1,B3**b1,B3**b1,B3**b1,B3**b1,B3**b1,--,G-B1M2\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/62.json?");

/***/ }),

/***/ "./src/levels/63.json":
/*!****************************!*\
  !*** ./src/levels/63.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":25,\"targets\":[200000,250000,320000],\"colours\":4,\"hard\":1,\"goals\":[{\"type\":\"button\",\"amount\":null},{\"type\":\"globe\",\"amount\":\"25\"}],\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S,***S,***S\",\"**,**,G2,*3,*1,*3,G2,**,**\",\"**,**,*3,*1,*3,*1,*3,**,**\",\"G1b2,**b3,G1b2,**b3,G1b2,**b3,G1b2,**b3,G1b2\",\"B2b1-O,G1b2,B2b1-O,G1b2,B2b1-O,G1b2,B2b1-O,G1b2,B2b1-O\",\"G1b2,B2b1-O,G1b2,B2b1-O,G1b2,B2b1-O,G1b2,B2b1-O,G1b2\",\"B1b1-O,G1b2,B2b1-O,G1b2,B2*/b1,G1b2,B2b1-O,G1b2,B2b1-O\",\"G1b2,B2b1-O,G1b2,B2*/b1,G1b2,B2*/b1,G1b2,B2b1-O,G1b2\",\"G-B2b1-O,G-B2b1-O,G-B2*|D1,G-B2b1-O,G-B2b1-O,G-B2b1-O,G-B2*|D1,G-B2b1-O,G-B2b1-O\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/63.json?");

/***/ }),

/***/ "./src/levels/64.json":
/*!****************************!*\
  !*** ./src/levels/64.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":16,\"targets\":[20000,25000,30000],\"width\":12,\"height\":3,\"colours\":5,\"hard\":0,\"goals\":[{\"type\":\"orange_circle\",\"amount\":\"16\"}],\"tilemap\":[\"***S,*2*S,***S,*2*S,***S,*2*S,***S,*2*S,***S,*2*S,***S,*2*S\",\"*2,**D1,*2,**,*2b2,**,*2,**b2,*2,**,*2D1,**\",\"**b1,*2,**,*2,**,*2,**,*2,**,*2,**,*2b1\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/64.json?");

/***/ }),

/***/ "./src/levels/65.json":
/*!****************************!*\
  !*** ./src/levels/65.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":40,\"targets\":[20000,25000,30000],\"width\":12,\"colours\":5,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":\"130\"},{\"type\":\"globe\",\"amount\":\"9\"}],\"tilemap\":[\"B2***S,B2***S,B2***S,B2***S,B2***S,B2***S,B2***S,B2***S,B2***S,B2***S,B2***S,B2***S\",\"B2**,B2**,B2**,B2**,B2***|D2,B2**,B2**,B2***|D2,B2**,B2**,B2**,B2**\",\"B2**T001,B2**T003,B2**T005,B2**T007,B2**T009,B2**T011,B2**T013,B2**T015,B2**T017,B2**T019,B2**T021,B2**T023\",\"--,--,--,--,--,--,--,--,--,--,--,--\",\"--,G-G2,G-G2,G-G2,G-G2,G-G2,G-G2,G-G2,G-G2,G-G2,G-G2,--\",\"--,--,--,--,--,--,--,--,--,--,--,--\",\"B2**T002,B2**T004,B2**T006,B2**T008,B2**T010,B2**T012,B2**T014,B2**T016,B2**T018,B2**T020,B2**T022,B2**T024\",\"B2**,B2***|D2,B2**,B2**,B2**,B2**,B2**,B2**,B2**,B2**,B2***|D2,B2**\",\"B2**,B2**,B2**,B2**,B2**,B2**,B2**,B2**,B2**,B2**,B2**,B2**\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/65.json?");

/***/ }),

/***/ "./src/levels/66.json":
/*!****************************!*\
  !*** ./src/levels/66.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":14,\"targets\":[20000,30000,50000],\"width\":5,\"colours\":3,\"hard\":0,\"increaseColours\":true,\"goals\":[{\"type\":\"metal_ball\",\"amount\":\"65\"}],\"tilemap\":[\"***S,***S,M6*S,***S,***S\",\"**,**,M4,**,**\",\"M6,M1,**,M1,M6\",\"**,**,M6,**,**\",\"**,**,M1,**,**\",\"M6,M1,**,M1,M6\",\"**,**,M6,**,**\",\"**,M1,*1,M1,**\",\"M6,*1,**,*1,M6\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/66.json?");

/***/ }),

/***/ "./src/levels/67.json":
/*!****************************!*\
  !*** ./src/levels/67.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":30,\"targets\":[40000,70000,100000],\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null},{\"type\":\"radial_circle\",\"amount\":\"8\"}],\"tilemap\":[\"B1***S,B1***S,--,--,--,--,--,B1***S,B1***S\",\"B1**T001,B3**,B3***S,B2*S*5,B2***S,B3*S*5,B2***S,B2**,B1**T003\",\"--,B3*3,B2*3,B2**,B3*5,B3**,B2*3,B3*3,--\",\"--,B2M1D1,B2M1D1,B3*3,B3*-*5,B2*3,B2M1D1,B3M1D1,--\",\"--,B3-Ob2,B3M2b2,B3M1D1,B2*OD1,B2M1D1,B3M2b2,B3-Ob2,--\",\"--,B3-O,B2M2,B2-Ob2,B2-Ob2,B3-Ob2,B3M2,B3-O,--\",\"--,B2-O,B2-O,B3-O,B3-O,B3-O,B2-O,B2-O,--\",\"B1**T004,B3-O,B3-O,B3-O,B3*OD2,B2-O,B2-O,B3-O,B1**T002\",\"B1*Ob1,B1**,--,--,--,--,--,B1**,B1*Ob1\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/67.json?");

/***/ }),

/***/ "./src/levels/68.json":
/*!****************************!*\
  !*** ./src/levels/68.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":23,\"targets\":[10000,20000,30000],\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"metal_ball\",\"amount\":\"10\"}],\"tilemap\":[\"--,--,--,--,M1b1,--,--,--,--\",\"--,--,--,--,***S,--,--,--,--\",\"--,--,--,**b1,**,**b1,--,--,--\",\"--,--,**b1,**,**,**,**b1,--,--\",\"M1b1,**,**,**,M6b3,**,**,**,M1b1\",\"--,--,**b1,**,**,**,**b1,--,--\",\"--,--,--,**b1,**,**b1,--,--,--\",\"--,--,--,--,**,--,--,--,--\",\"--,--,--,--,M1b1,--,--,--,--\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/68.json?");

/***/ }),

/***/ "./src/levels/69.json":
/*!****************************!*\
  !*** ./src/levels/69.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":15,\"targets\":[69420,424242,694200],\"width\":11,\"colours\":3,\"hard\":0,\"increaseColours\":true,\"goals\":[{\"type\":\"globe\",\"amount\":6},{\"type\":\"metal_ball\",\"amount\":150}],\"tilemap\":[\"G1*S,***S,***S,***S,***S,*|*5*S,*5*S,***S,*5*S,***S,G1*S\",\"**,**,M6,M6,-OD1,M1,**D1,M6,M6,**,**\",\"**,M6,G2,-OD1,M1,*-D1,M6,M1D1,**,M6,**\",\"**,M6,-OD1,M1D1,M1,*O,M6,M1,M1D1,M6,**\",\"**,M6,M6,M6,*/D1,*|D2,*/D1,M6,M6,M6,**\",\"**,M6,M1,M1,M6,*O,-OD1,M1,M1,M6,**\",\"**,M6,-OD1,M1,M6,*-D1,-OD1,M1,G2,M6,**\",\"**,**,M6,M6,-OD1,M4,-OD1,M6,M6,**,**\",\"G-**,G-**,G-G2,G-**,G-**,G-**,G-**,G-**,G-G2,G-**,G-**\"],\"cannons\":[]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/69.json?");

/***/ }),

/***/ "./src/levels/7.json":
/*!***************************!*\
  !*** ./src/levels/7.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":17,\"targets\":[75000,100000,140000],\"width\":7,\"height\":9,\"colours\":4,\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S\",\"**,**B1,**B1,**B1,**B1,**B1,**\",\"**,**B1,**B2,**B2,**B2,**B1,**\",\"**T001,**B1,**B2,**B2,**B2,**B1,**T003\",\"--,**B1,**B2,**B2,**B2,**B1,--\",\"**T002,**B1,**B2,**B2,**B2,**B1,**T004\",\"**,**B1,**B2,**B2,**B2,**B1,**\",\"**,**B1,**B1,**B1,**B1,**B1,**\",\"**,**,**,**,**,**,**\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/7.json?");

/***/ }),

/***/ "./src/levels/70.json":
/*!****************************!*\
  !*** ./src/levels/70.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":18,\"targets\":[40000,50000,60000],\"width\":11,\"colours\":4,\"hard\":1,\"goals\":[{\"type\":\"button\",\"amount\":null},{\"type\":\"yellow_circle\",\"amount\":\"5\"}],\"tilemap\":[\"*5*SD1,*5*SD1,--,--,*-*SD1,B1***-*S,*-*SD1,--,--,*5*SD1,*5*SD1\",\"*5D1,*5D1,--,--,--,--,--,--,--,*5D1,*5D1\",\"--,--,--,B3***S,B3***S,B3***S,B3***S,B3***S,--,--,--\",\"--,--,--,B3**,B3**,B3**,B3**,B3**,--,--,--\",\"B1***|*S,*|*SD1,--,B3**,B3**,B3**,B3**,B3**,--,*|*SD1,B1***|*S\",\"--,--,--,B3**,B3**,B3**,B3**,B3**,--,--,--\",\"--,--,--,B3**,B3**,B3**,B3**,B3**,--,--,--\",\"*5*SD1,*5*SD1,--,--,--,--,--,--,--,*5*SD1,*5*SD1\",\"*5D1,*5D1,--,--,*-*SD1,B1***-*S,*-*SD1,--,--,*5D1,*5D1\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/70.json?");

/***/ }),

/***/ "./src/levels/71.json":
/*!****************************!*\
  !*** ./src/levels/71.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"time\":20,\"targets\":[50000,80000,100000],\"width\":11,\"colours\":5,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null}],\"tilemap\":[\"--,--,--,--,***S,B1*S*2,***S,--,--,--,--\",\"--,--,--,***S,B1*2,B2**b1,B1*2,***S,--,--,--\",\"--,--,--,**,B1*2*O,B2***+b1,B1*2*O,**,--,--,--\",\"--,--,***S,B1*2,B2**b1,B2**b2,B2**b1,B1*2,***S,--,--\",\"--,--,**,B1*2,B2**b2,B2**b3,B2**b2,B1*2,**,--,--\",\"--,***S,B1*2,B2**b1,B2**b3,B3*+**D1,B2**b3,B2**b1,B1*2,***S,--\",\"--,**,B1*2*O,B2**b2,B2**D1,B3**D1,B2**D1,B2**b2,B1*2*O,**,--\",\"**,B1*2,B2**b2,B2**b3,B3**D1,B3**D2,B3**D1,B2**b3,B2**b2,B1*2,**\",\"**,B1*2,B2***+b3,B2**D1,B3**D2,B3***+D2,B3**D2,B2**D1,B2***+b3,B1*2,**\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/71.json?");

/***/ }),

/***/ "./src/levels/72.json":
/*!****************************!*\
  !*** ./src/levels/72.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":32,\"targets\":[40000,60000,80000],\"width\":11,\"colours\":5,\"hard\":0,\"goals\":[{\"type\":\"watermelon\",\"amount\":60},{\"type\":\"metal_ball\",\"amount\":11}],\"tilemap\":[\"W2*S,*S**,*S**,W2*S,W2*S,W2*S,W2*S,W2*S,*S***-,*S**,W2*S\",\"W2,**,***-,W2,W2,W2,W2,W2,**,**,W2\",\"**,**,**,**,**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**,**,**,**,**\",\"**,W2,W2,**,**,**,**,**,W2,W2,**\",\"**,W2,W2,**,**,**,**,**,W2,W2,**\",\"**,**,**,**,**,**,**,**,**,**,**\",\"M1,W1,M1,W2,M1,W2,M1,W2,M1,W1,M1\",\"W1,M1,W1,M1,W2,M1,W2,M1,W1,M1,W1\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/72.json?");

/***/ }),

/***/ "./src/levels/73.json":
/*!****************************!*\
  !*** ./src/levels/73.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":27,\"targets\":[60000,80000,100000],\"height\":8,\"colours\":5,\"hard\":0,\"goals\":[{\"type\":\"globe\",\"amount\":5},{\"type\":\"watermelon\",\"amount\":20}],\"tilemap\":[\"W2*S,G1*S,W2*S,G1*S,W2*S,G1*S,W2*S,G1*S,W2*S\",\"**,**,**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**,**,**\",\"**,**,**,**,G2,**,**,**,**\",\"**,**,**,**,**,**,**,**,**\",\"W1,W1,W1,W1,W2,W1,W1,W1,W1\",\"G-**,G-**,G-**,G-**,G-**,G-**,G-**,G-**,G-**\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/73.json?");

/***/ }),

/***/ "./src/levels/74.json":
/*!****************************!*\
  !*** ./src/levels/74.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":24,\"targets\":[40000,70000,100000],\"height\":7,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null}],\"tilemap\":[\"***S,***S,*S*3,B1*S*3,M4*S,B1*S*3,*S*3,***S,***S\",\"**,*3,B1*3*O,M4,B2M2,M4,B1*3*O,*3,**\",\"**,B1*3,M4,B2M2,B3W3,B2M2,M4,B1*3,*3\",\"B1*3,M4,B2M2,B3W3,B3*O,B3W3,B2M2,M4,B1*3\",\"*3,B1*3,M4,B2M2,B3W3,B2M2,M4,B1*3,**\",\"**,*3,B1*3*O,M4,B2M2,M4,B1*3*O,*3,**\",\"**,**,*3,B1*3,M4,B1*3,*3,**,**\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/74.json?");

/***/ }),

/***/ "./src/levels/75.json":
/*!****************************!*\
  !*** ./src/levels/75.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":26,\"targets\":[1000,60000,100000],\"width\":10,\"height\":8,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"watermelon\",\"amount\":40},{\"type\":\"striped_circle\",\"amount\":5},{\"type\":\"blue_circle\",\"amount\":50},{\"type\":\"green_circle\",\"amount\":50}],\"tilemap\":[\"***S,***S,***S,W2*Sb1,W2*Sb1,W2*Sb1,W2*Sb1,***S,***S,***S\",\"**,**,W1,**,**,**,**,W1,**,**\",\"W2b3,**,**,W1b3,**b3,**b3,W1b3,**,**,W2b3\",\"W2b3,**,**,**b3,**b2,**b2,**b3,**,**,W2b3\",\"W2b3,**,**,**b3,**b2,**b2,**b3,**,**,W2b3\",\"W2b3,**,**,W1b3,**b3,**b3,W1b3,**,**,W2b3\",\"**,**,W1,**,**,**,**,W1,**,**\",\"**,**,**,W2b3,W2b3,W2b3,W2b3,**,**,**\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/75.json?");

/***/ }),

/***/ "./src/levels/76.json":
/*!****************************!*\
  !*** ./src/levels/76.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":13,\"targets\":[60000,80000,120000],\"width\":11,\"colours\":4,\"hard\":2,\"goals\":[{\"type\":\"button\",\"amount\":null},{\"type\":\"watermelon\",\"amount\":60}],\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S,***S,***S,***S,***S\",\"**,B3W1,**,B2W1,**,B2W1,**,B2W1,**,B3W1,**\",\"**,**,B2W1,B1**,B2W1,B1***O,B2W1,B1**,B2W1,**,**\",\"B1***-,B2W1,B1**,B2W2,B3W3,B3W3,B3W3,B2W2,B1**,B2W1,B1***-\",\"**,**,B2W1,B2W2,B3W3,B3W3b1,B3W3,B2W2,B2W1,**,**\",\"B1***-,B2W1,B1**,B2W2,B3W3,B3W3,B3W3,B2W2,B1**,B2W1,B1***-\",\"**,**,B2W1,B1**,B2W1,B1***O,B2W1,B1**,B2W1,**,**\",\"**,B3W1,**,B2W1,**,B2W1,**,B2W1,**,B3W1,**\",\"**,**,**,**,**,**,**,**,**,**,**\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/76.json?");

/***/ }),

/***/ "./src/levels/77.json":
/*!****************************!*\
  !*** ./src/levels/77.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"time\":30,\"targets\":[60000,80000,120000],\"width\":10,\"height\":6,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null}],\"tilemap\":[\"*SW1,*SW1,*SW1,*SW1,*SW1,*SW1,*SW1,*SW1,*SW1,*SW1\",\"**,**,**,**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**,**,**,**\",\"M1b1,M1b1,M1b1,*+D2,M1b1,M1b1,*+D2,M1b1,M1b1,M1b1\",\"B2M1D2,B2M1D2,B2M1D2,B2M1D2,B2M1D1,B2M1D1,B2M1D2,B2M1D2,B2M1D1,B2M1D2\",\"B2-O,B2-O,B2-O,B2-O,B2-O,B2-O,B2-O,B2-O,B2-O,B2-O\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/77.json?");

/***/ }),

/***/ "./src/levels/78.json":
/*!****************************!*\
  !*** ./src/levels/78.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":40,\"targets\":[60000,75000,90000],\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"metal_ball\",\"amount\":120}],\"tilemap\":[\"--,--,--,--,*S*1,--,--,--,--\",\"--,--,--,*S*1,*2,*S*1,--,--,--\",\"--,--,*S*1,*0,*1,*0,*S*1,--,--\",\"--,*S*1,*0,*0,M6b1,*0,*0,*S*1,--\",\"*S*2,*0,*0,M6b1,M6,M6b1,*0,*0,*S*2\",\"*1,*0,M6b1,M6,M6b1,M6,M6b1,*0,*1\",\"*1,M6b1,M6,M6b1,M6,M6b1,M6,M6b1,*1\",\"M6b1,M6,M6b1,M6,M6b1,M6,M6b1,M6,M6b1\",\"*|*1,*2,*|*0,*1,*|*2,*1,*|*0,*2,*|*1\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/78.json?");

/***/ }),

/***/ "./src/levels/79.json":
/*!****************************!*\
  !*** ./src/levels/79.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":30,\"targets\":[50000,60000,70000],\"width\":12,\"colours\":4,\"hard\":1,\"goals\":[{\"type\":\"green_circle\",\"amount\":125},{\"type\":\"watermelon\",\"amount\":35}],\"tilemap\":[\"***S,***S,***S,--,**T002,--,--,W2T004,*1T006,**T008,--,--\",\"**,**,**,--,*1,**,--,--,W2,*1,**,--\",\"**,**,**,--,W2,*1,**,--,--,W3,*1,**\",\"W1,**,**,--,*1,W2,*1,**,--,*1,W2,*1\",\"**,**,--,--,**,*1,W2,*1,--,**,*1,W2\",\"**T001,--,--,**,*1,W2,*1,--,--,*1,W2,*1\",\"--,--,**,*1,W2,*1,--,--,*1,W3,*1,**\",\"--,**,*1,W2,*1,--,--,*1,W2,*1,**,**\",\"**T003,*1T005,W2T007,--,--,--,*1,W2,*1,**,**,**\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/79.json?");

/***/ }),

/***/ "./src/levels/8.json":
/*!***************************!*\
  !*** ./src/levels/8.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":35,\"targets\":[130000,150000,170000],\"width\":11,\"height\":9,\"colours\":5,\"tilemap\":[\"***S,***S,***S,***S,***S,--,**T002,**T004,**T006,**T008,**T010\",\"**B1,**B1,**B2,**B2,**B2,--,**B2,**B2,**B2,**B1,**B1\",\"**B1,**B1,**B2,**B2,**B2,--,**B2,**B2,**B2,**B1,**B1\",\"**B1,**B1,**B2,**B2,**B2,--,**B2,**B2,**B2,**B1,**B1\",\"**B1,**B1,**B2,**B2,**B2,--,**B2,**B2,**B2,**B1,**B1\",\"**B1,**B1,**B2,**B2,**B2,--,**B2,**B2,**B2,**B1,**B1\",\"**B1,**B1,**B2,**B2,**B2,--,**B2,**B2,**B2,**B1,**B1\",\"**B1,**B1,**B2,**B2,**B2,--,**B2,**B2,**B2,**B1,**B1\",\"**T001,**T003,**T005,**T007,**T09,--,**,**,**,**,**\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/8.json?");

/***/ }),

/***/ "./src/levels/80.json":
/*!****************************!*\
  !*** ./src/levels/80.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"time\":30,\"targets\":[88888,100000,111111],\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"score\",\"amount\":null}],\"tilemap\":[\"***S,***S,***S,***S,--,***S,***S,***S,***S\",\"**,W2,**,W2,***S,W2,**,W2,**\",\"W2,**,W2,**,W2,**,W2,**,W2\",\"W2,**,W2,**,W2,**,W2,**,W2\",\"--,W2,**,W2,**,W2,**,W2,--\",\"W1,**,W1,**,W1,**,W1,**,W1\",\"W1,**,W1,**,W1,**,W1,**,W1\",\"**,W1,**,W1,**,W1,**,W1,**\",\"**,**,**,**,--,**,**,**,**\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/80.json?");

/***/ }),

/***/ "./src/levels/81.json":
/*!****************************!*\
  !*** ./src/levels/81.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":14,\"targets\":[30000,45000,60000],\"width\":7,\"height\":7,\"colours\":3,\"hard\":0,\"goals\":[{\"type\":\"metal_ball\",\"amount\":7},{\"type\":\"watermelon\",\"amount\":9},{\"type\":\"radial_circle\",\"amount\":9},{\"type\":\"striped_circle\",\"amount\":4},{\"type\":\"rainbow_circle\",\"amount\":1},{\"type\":\"blue_circle\",\"amount\":30}],\"tilemap\":[\"*-*S*1b3,*S*1,*S*2,--,*O*S*1b2,*O*S*1b1,*O*S*2b2\",\"*-*0b1,*-*2b3,*2,--,*2,*O*0b3,*0\",\"*-*0b3T001,*O*0,*O*1,--,*O*1,*2,*1T003\",\"--,--,--,*/b3,--,--,--\",\"*S*2T002,*S*1,*O*1,--,*O*0,*S*0,M2T004\",\"*1,W2,*2,--,*1,M2,M1\",\"W2,W3,W2,--,*0,*1,M2\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/81.json?");

/***/ }),

/***/ "./src/levels/82.json":
/*!****************************!*\
  !*** ./src/levels/82.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":26,\"targets\":[30000,45000,60000],\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null},{\"type\":\"globe\",\"amount\":11}],\"tilemap\":[\"B2*S**,B2*S**,B2*S**,B1*S**,B1*S**,B1*S**,B2*S**,B2*S**,B2*S**\",\"B2**,G2,B2**,B1**,G2,B1**,B2**,G2,B2**\",\"B2**,B3**,B2**,B1**,B3**,B1**,B2**,B3**,B2**\",\"B2M1,G2,B2M1,B1W1,G2,B1W1,B2M1,G2,B2M1\",\"B2-O,B3M1,B2W1,B1M1,B3M1,B1M1,B2W1,B3M1,B2-O\",\"B2-O,G2,B2M1,B1M1,M1,B1M1,B2M1,G2,B2-O\",\"B2-O,B3-O,B2-O,B1-O,B3-O,B1-O,B2-O,B3-O,B2-O\",\"B2-O,G2,B2-O,B1-O,G2,B1-O,B2-O,G2,B2-O\",\"G-B2-O,G-B2-O,G-B2-O,G-B1-O,G-B1-O,G-B1-O,G-B2-O,G-B2-O,G-B2-O\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/82.json?");

/***/ }),

/***/ "./src/levels/83.json":
/*!****************************!*\
  !*** ./src/levels/83.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":13,\"targets\":[65000,80000,100000],\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"score\",\"amount\":null}],\"tilemap\":[\"*/*Sb3,*SW1,--,***S,*/*Sb3,***S,--,*SW1,*/*Sb3\",\"W1,***O,--,***Ob1,**,***Ob1,--,***O,W1\",\"--,--,*/b1,--,--,--,*/b1,--,--\",\"***S,**,--,W2,***S,W2,--,**,***S\",\"*/b3,W1,--,**,*/b3,**,--,W1,*/b3\",\"**,**,--,W2,**,W2,--,**,**\",\"--,--,*/b1,--,--,--,*/b1,--,--\",\"*SW1,***|,--,*5,*-*5*S,**,--,***|,*SW1\",\"*/b3,W1,--,*5,*/b3,*5,--,W1,*/b3\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/83.json?");

/***/ }),

/***/ "./src/levels/84.json":
/*!****************************!*\
  !*** ./src/levels/84.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":17,\"targets\":[65000,80000,100000],\"colours\":3,\"hard\":0,\"increaseColours\":true,\"goals\":[{\"type\":\"watermelon\",\"amount\":72},{\"type\":\"metal_ball\",\"amount\":24},{\"type\":\"green_circle\",\"amount\":40}],\"tilemap\":[\"*O*1,--,--,--,--,--,--,--,*O*1\",\"--,W3*S,W2*S,W3*S,W3*S,W3*S,W2*S,W3*S,--\",\"--,W2,*1,W2,M3,W2,*1,W2,--\",\"--,W3,W2,M3,*1*O,M3,W2,W3,--\",\"--,W3,M3,M1,*/,M1,M3,W3,--\",\"--,W3,W1,M3,M1,M3,W1,W3,--\",\"--,W1,*1,W1,M3,W1,*1,W1,--\",\"--,W3,W1,W3,W3,W3,W1,W3,--\",\"*/,--,--,--,--,--,--,--,*/\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/84.json?");

/***/ }),

/***/ "./src/levels/85.json":
/*!****************************!*\
  !*** ./src/levels/85.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":30,\"targets\":[200000,210000,220000],\"colours\":4,\"hard\":1,\"goals\":[{\"type\":\"button\",\"amount\":null}],\"tilemap\":[\"*/b1,*/b2,--,--,--,--,--,*/b2,*/b1\",\"*/b2,--,--,--,B1*SM6b1,--,--,--,*/b2\",\"--,--,B2***S,B2***S,B2***S,B2***S,B2***S,--,--\",\"--,--,B2**,B3**,B3**,B3**,B2**,--,--\",\"--,B1M6,B2**,B3**,B3W3,B3**,B2**,B1M6,--\",\"--,--,B2**,B3**,B3**,B3**,B2**,--,--\",\"--,--,B2**,B2**,B2**,B2**,B2**,--,--\",\"*/b2,--,--,--,B1M6,--,--,--,*/b2\",\"*/b1,*/b2,--,--,--,--,--,*/b2,*/b1\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/85.json?");

/***/ }),

/***/ "./src/levels/86.json":
/*!****************************!*\
  !*** ./src/levels/86.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":21,\"targets\":[10000,20000,30000],\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"watermelon\",\"amount\":55}],\"cannons\":[{\"type\":\"watermelon\",\"max\":3,\"layer\":3}],\"tilemap\":[\"***S,***S,***S,M4CW*S,***S,M4CW*S,***S,***S,***S\",\"**,**,**,**,**,**,**,**,**\",\"--,**,W1,**,**,**,W1,**,--\",\"**,--,**T001,W1,**,W1,**T003,--,**\",\"**,--,--,**,W1,**,--,--,**\",\"**,**,--,--,**,--,--,**,**\",\"**,**,**T002,--,--,--,**T004,**,**\",\"**,**,**,**,--,**,**,**,**\",\"**,**,**,**,**,**,**,**,**\"]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/86.json?");

/***/ }),

/***/ "./src/levels/87.json":
/*!****************************!*\
  !*** ./src/levels/87.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":32,\"targets\":[40000,60000,80000],\"height\":7,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null},{\"type\":\"watermelon\",\"amount\":30}],\"tilemap\":[\"W3*S,W3*S,W3*S,W3*S,W3CW*S,W3*S,W3*S,W3*S,W3*S\",\"B1**,B2**,B2**,B2**,B2**,B2**,B2**,B2**,B1**\",\"B1**,B2**,B2*5,B2**,B2*5,B2**,B2*5,B2**,B1**\",\"B1**D1,B2**,B2**,B2*5,B2**,B2*5,B2**,B2**,B1**D1\",\"B1**,B1**D1,B1*5D1,B1**D1,B1*O*5D1,B1**D1,B1*5D1,B1**D1,B1**\",\"B1**,B1**,B1**,B3**,B3**,B3**,B1**,B1**,B1**\",\"--,B1**,B1**,--,--,--,B1**,B1**,--\"],\"cannons\":[{\"type\":\"watermelon\",\"max\":1,\"layer\":1}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/87.json?");

/***/ }),

/***/ "./src/levels/88.json":
/*!****************************!*\
  !*** ./src/levels/88.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":11,\"targets\":[30000,40000,50000],\"width\":8,\"height\":7,\"colours\":4,\"hard\":1,\"goals\":[{\"type\":\"button\",\"amount\":null}],\"tilemap\":[\"B1***SCW,B1***SCW,B1***SCW,B1***SCW,B1***SCW,B1***SCW,B1***SCW,*SW3CW\",\"B1**,B1**,B1**,B1**,B1**,B1**,B1**,W3\",\"B1**,B1**,B1**,B1**,B1**,B1**,B1**,W3\",\"B1**,B1**,B1**,B1**,B1**,B1**,B1**,W3\",\"B1**,B1**,B1**,B1**,B1**,B1**,B1**,W3\",\"B1**,B1**,B1**,B1**,B1**,B1**,--,--\",\"W3,W3,W3,W3,W3,W3,--,W3\"],\"cannons\":[{\"type\":\"watermelon\",\"max\":13,\"layer\":3}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/88.json?");

/***/ }),

/***/ "./src/levels/89.json":
/*!****************************!*\
  !*** ./src/levels/89.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":22,\"targets\":[50000,80000,120000],\"width\":8,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"globe\",\"amount\":4},{\"type\":\"metal_ball\",\"amount\":20},{\"type\":\"watermelon\",\"amount\":20}],\"tilemap\":[\"*S**,*S**,--,CWG1,CWG1,--,*S**,*S**\",\"G1,**,--,W2,W2,--,**,G1\",\"**,**,--,W2,W2,--,**,**\",\"**,**,--,G-W2,G-W2,--,**,**\",\"**,M2,--,--,--,--,M2,**\",\"*1,M2,M1,*SM1,*SM1,M1,M2,*3\",\"**,*O*1,**,**,**,**,*O*3,**\",\"*1,M2,*|,**,**,*|,M2,*3\",\"G-*1,G-M1,G-M1,G-**,G-**,G-M1,G-M1,G-*3\"],\"cannons\":[{\"type\":\"watermelon\",\"max\":4,\"layer\":2}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/89.json?");

/***/ }),

/***/ "./src/levels/9.json":
/*!***************************!*\
  !*** ./src/levels/9.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":24,\"targets\":[130000,150000,170000],\"width\":6,\"height\":8,\"colours\":4,\"tilemap\":[\"*O*S,--,***S,***S,--,*O*S\",\"--,**B1,--,--,**B1,--\",\"**B2,**B3,**B2,**B2,**B3,**B2\",\"**B3,**B3,**B3,**B3,**B3,**B3\",\"**B2,**B3,**B3,**B3,**B3,**B2\",\"**B2,**B3,**B3,**B3,**B3,**B2\",\"**B3,*|B3,**B3,**B3,*|B3,**B3\",\"**B2,**B3,**B2,**B2,**B3,**B2\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/9.json?");

/***/ }),

/***/ "./src/levels/90.json":
/*!****************************!*\
  !*** ./src/levels/90.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":13,\"targets\":[20000,35000,45000],\"width\":12,\"colours\":5,\"hard\":0,\"goals\":[{\"type\":\"watermelon\",\"amount\":15},{\"type\":\"metal_ball\",\"amount\":30},{\"type\":\"purple_circle\",\"amount\":40},{\"type\":\"radial_circle\",\"amount\":10}],\"tilemap\":[\"**CW*S,W3CW*S,**CW*S,W3CW*S,**CW*S,W3CW*S,**CW*S,--,**CW*S,CW*S*-*3b2,**CW*S,**CW*S\",\"W3,**,W3,**,W3,**,--,**,*3,*3*Ob2,**,--\",\"**,W3,**,W3,**,--,**,*3*Ob2,*3,**,--,**CW*S\",\"W3,**,W3,**,--,**,*3,*-*3b2,**,--,**,M4D1\",\"**,W3,**,--,**,*3*Ob2,*3,**,--,**,M3,***O\",\"W3,**,--,**,*3,*3*Ob2,**,--,**,M3D1,***O,M4\",\"**,--,**,*-*3b2,*3,**,--,**,M3,***O,M3,***O\",\"--,**,*3,*3*Ob2,**,--,**,M3D1,***O,M3,***O,M3\",\"--,*3*Ob2,*3,**,--,**,M4,***O,M4,***O,M3,***O\"],\"cannons\":[{\"type\":\"watermelon\",\"max\":4,\"layer\":3}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/90.json?");

/***/ }),

/***/ "./src/levels/91.json":
/*!****************************!*\
  !*** ./src/levels/91.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"time\":45,\"targets\":[20000,30000,40000],\"width\":12,\"height\":8,\"colours\":5,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null}],\"tilemap\":[\"***S,***S,***S,***S,***S,***S,***S*+D2,--,***S,***S,***S,***S\",\"**,B3**b3,**,**,B3**b3,**,**,--,B1**,B1**,B1**,**\",\"**,**,**,**,**,**,--,B1**,B1**,B1**,B1**,**\",\"**,B3**b3,**,**,B3**b3,**,--,B2**b3,B1**,B1**,B2***+b3,**\",\"**,B1**,B3***+b3,B3**b3,B1**,--,**,**,**,**,**,**\",\"**,B1**,B1**,B1**,B1**,--,**,**,B2**b3,B2**b3,**,**\",\"**,B1**,B1**,B1**,--,**,**,B2**b3,**,**,B2**b3,**\",\"**,**,**,**,--,***+D2,**,**,**,**,**,**\"],\"cannons\":[]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/91.json?");

/***/ }),

/***/ "./src/levels/92.json":
/*!****************************!*\
  !*** ./src/levels/92.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":12,\"targets\":[1000,25000,40000],\"width\":12,\"height\":7,\"colours\":4,\"hard\":2,\"goals\":[{\"type\":\"watermelon\",\"amount\":75}],\"tilemap\":[\"**CW*S,--,--,*3T002,*5T004,*S*5,*S*1D1,*5T006,*5T008,--,--,**CW*S\",\"**D2,**,--,*3,*3,*5,*5,*0,*0,--,**,**D2\",\"**D2,**,--,*5,*5,*2,*5,*5,*0,--,**,**D2\",\"***|,**D2,--,W1,W1,W1,W1,W1,W1,--,**D2,***|\",\"**D2,**,--,W1,W1,W1,W1,W1,W1,--,**,**D2\",\"**,**D2,--,W1b1,W1b1,W1b1,W1b1,W1b1,W1b1,--,**D2,**\",\"**T001,***|T003,--,W1b1,W1b1,W1b1,W1b1,W1b1,W1b1,--,***|T005,**T007\"],\"cannons\":[{\"type\":\"watermelon\",\"layer\":3,\"max\":12}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/92.json?");

/***/ }),

/***/ "./src/levels/93.json":
/*!****************************!*\
  !*** ./src/levels/93.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":34,\"targets\":[30000,60000,100000],\"width\":12,\"height\":7,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"globe\",\"amount\":4},{\"type\":\"metal_ball\",\"amount\":222}],\"tilemap\":[\"M6*S,M1*S,M6*S,M1*S,M2*S,*0*S,*3*S,M2*S,M1*S,M6*S,M1*S,M6*S\",\"M6,G1b3,M6,M1,M1,*0,*0,M1,M1,M6,G1b3,M6\",\"M6,M1,M6,M1,M2,*3,*3,M2,M1,M6,M1,M6\",\"M6,M1,M6,M1,M1,*1*O,*2*O,M1,M1,M6,M1,M6\",\"M6,M1,M6,M1,M1,M1,M1,M1,M1,M6,M1,M6\",\"M6,M1,M6,M1,M1,M1,M1,M1,M1,M6,M1,M6\",\"G-M6,G-M1,G-G2,G-M6,G-M6,G-M6,G-M6,G-M6,G-M6,G-G2,G-M1,G-M6\"],\"cannons\":[]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/93.json?");

/***/ }),

/***/ "./src/levels/94.json":
/*!****************************!*\
  !*** ./src/levels/94.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":17,\"targets\":[40000,70000,100000],\"width\":12,\"height\":8,\"colours\":4,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null}],\"tilemap\":[\"--,W3CW,--,W3CW,--,*S*1,*S*1,*0*S,*0*S,*S*1,*S*1,*0*S\",\"W3,--,W3,--,--,*1,*0,*0,*1,*1,*0,*0\",\"--,W3,--,W3,--,*0,*0,*1,*1,*0,*0,*1\",\"W3,--,W3,--,--,*0,*1,*1,*0,*0,*1,*1\",\"--,W3,--,W3,--,*1,*1,*0,*0,*1,*1,*0\",\"W3,--,W3,--,--,*1,*0,*0,*1,*1,*0,*0\",\"--,W3,--,W3,--,*0,*0,*1,*1,*0,*0,*1\",\"B1W3,--,B1W3,--,--,*0,*1,*1,*0,*0,*1,*1\"],\"cannons\":[{\"type\":\"watermelon\",\"layer\":1,\"max\":8}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/94.json?");

/***/ }),

/***/ "./src/levels/95.json":
/*!****************************!*\
  !*** ./src/levels/95.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":20,\"targets\":[40000,70000,100000],\"colours\":3,\"hard\":0,\"goals\":[{\"type\":\"button\",\"amount\":null},{\"type\":\"globe\",\"amount\":3}],\"tilemap\":[\"B1*S*1,B1*0T002,B1*1T004,*-b1,--,--,***SD1,***SD1,*/*SD1\",\"B1*0,G1,B1*0,--,--,--,--,**D1,**D1\",\"B1*1T001,B1*0T003,B1*1,--,--,--,*-b1,--,**D1\",\"*-b1,--,--,B2*2,B2*1T006,B2*2T008,--,--,--\",\"--,--,--,B2*1,G1,B2*1,--,--,--\",\"--,--,--,B2*2T005,B2*1T007,B2*2,--,--,*-b1\",\"***SD1,--,*-b1,--,--,--,B3*0,B3*2T010,B3*0T012\",\"**D1,**D1,--,--,--,--,B3*2,G1,B3*2\",\"*/D1,**D1,**D1,--,--,*-b1,B3*0T009,B3*2T011,B3G-*0\"],\"cannons\":[{\"type\":\"watermelon\",\"layer\":1,\"max\":8}]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/95.json?");

/***/ }),

/***/ "./src/levels/96.json":
/*!****************************!*\
  !*** ./src/levels/96.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":15,\"targets\":[100000,125000,150000],\"colours\":3,\"hard\":0,\"increaseColours\":true,\"goals\":[{\"type\":\"score\",\"amount\":null}],\"tilemap\":[\"--,--,--,*0*S,*S*/,*0*S,--,--,--\",\"--,*0*S,*0*S,W3D2,W3D2,W3D2,*0*S,*0*S,--\",\"--,*0,W3D2,*0*Ob3,W3b2,*0*Ob2,W3,*0,--\",\"*0*SD1,W3D2,*0*Ob3,W3b3,*0*Ob3,W3b3,*0*Ob2,W3,*0*SD1\",\"*/b1,W3D2,W3b3,*0*Ob3,W3D2,*0*Ob3,W3b2,W3,*/b1\",\"*0D1,W3D2,*0*Ob3,W3b3,*0*Ob3,W3b3,*0*Ob3,W3,*0D1\",\"--,*0D2,W3D2,*0*Ob3,W3b3,*0*Ob3,W3D2,*0D1,--\",\"--,*0,*0D2,W3D2,W3D2,W3D2,*0D1,*0,--\",\"--,--,--,*0,*/b1,*0,--,--,--\"],\"cannons\":[]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/96.json?");

/***/ }),

/***/ "./src/levels/97.json":
/*!****************************!*\
  !*** ./src/levels/97.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":23,\"targets\":[15000,32000,40000],\"width\":4,\"height\":4,\"colours\":3,\"hard\":0,\"goals\":[{\"type\":\"blue_circle\",\"amount\":70}],\"tilemap\":[\"*0*S,*2*S,*2*S,W1*S\",\"*2,*0,W1,*2\",\"*2,W1,*0,*2\",\"W1,*2,*2,*0\"],\"cannons\":[]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/97.json?");

/***/ }),

/***/ "./src/levels/98.json":
/*!****************************!*\
  !*** ./src/levels/98.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":21,\"targets\":[120000,130000,140000],\"colours\":6,\"hard\":0,\"goals\":[{\"type\":\"globe\",\"amount\":3},{\"type\":\"radial_circle\",\"amount\":15},{\"type\":\"rainbow_circle\",\"amount\":21}],\"tilemap\":[\"*/b3,--,--,***S,***S,***S,--,--,*/b3\",\"--,G1D2,*/D2,*/D2,*O*1,***|b2,*/D2,G1D2,--\",\"--,*/D2,*O*1D2,*/D2,*0,*/D2,*|b2,*/D2,--\",\"***S,*/D2,*/D2,*/D2,*5,*/D2,*/D2,*|b2,***S\",\"**,*O*1,*5,*5,*O*1,*5,*5,*O*1,**\",\"G-**,*|b2,*/D2,*/D2,*5,*O*1D2,*OD2,*O*1D2,G-**\",\"--,*/D2,*|b2,*/D2,*0,*OD2,*/D2,*OD2,--\",\"--,G-G1D2,G-*/D2,*|b2,*O*1,*O*1D2,G-*OD2,G-*O*1D2,--\",\"*/b3,--,--,G-**,G-**,G-**,--,--,*/b3\"],\"cannons\":[]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/98.json?");

/***/ }),

/***/ "./src/levels/99.json":
/*!****************************!*\
  !*** ./src/levels/99.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":22,\"targets\":[80000,100000,110000],\"colours\":4,\"hard\":3,\"goals\":[{\"type\":\"striped_circle\",\"amount\":45}],\"tilemap\":[\"--,*S*0*|,*S*2,*S*0*|,--,--,--,--,--\",\"*0,*2,*0D2,*2,*0,--,--,--,--\",\"**,*0*-b3,**,*0*-b3,**,--,--,--,--\",\"*0*-b3,**,*0*-b3,**,*0*-b3,--,--,*S*-*0D2,--\",\"**,*0*-b3,**,*0*-b3,**,--,--,M2,--\",\"*0*-b3,**,*0*-b3,**,*0*-b3,--,--,*/D2,--\",\"**,*0*-b3,**,*0*-b3,**,--,--,M2,--\",\"*0*|,**,*0*|D2,**,*0*|,--,--,*0*-D2,--\",\"--,*0*|,**,*0*|,--,--,--,--,--\"],\"cannons\":[]}');\n\n//# sourceURL=webpack://circle-match/./src/levels/99.json?");

/***/ }),

/***/ "./src/test_levels/1.json":
/*!********************************!*\
  !*** ./src/test_levels/1.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":30,\"targets\":[90000,120000,150000],\"colours\":4,\"tilemap\":[\"***S,***S,***S,***S,***S,--,--,***OD1,***OD2\",\"**,*5b2,**,**,**,--,--,*5*Ob1,***OD1\",\"**,**,*5*Ob1,**,**,--,--,--,--\",\"**,**,**,**,**,--,--,--,--\",\"*-b1,**,**,**,*/D2,**,***S,***S,*-*S\",\"--,--,--,--,**,**,**,**,**\",\"--,--,--,--,**,**,*5*Ob2,**,**\",\"***OD1,*5*Ob1,--,--,**,**,**,*5b3,**\",\"***OD2,***OD1,--,--,**,**,**,**,**\"],\"goals\":[{\"type\":\"yellow_circle\",\"amount\":4},{\"type\":\"radial_circle\",\"amount\":10}]}');\n\n//# sourceURL=webpack://circle-match/./src/test_levels/1.json?");

/***/ }),

/***/ "./src/test_levels/2.json":
/*!********************************!*\
  !*** ./src/test_levels/2.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":30,\"targets\":[90000,120000,150000],\"colours\":4,\"tilemap\":[\"*4*S,*5*S,*5*S,*4*S,*4*S,*5*S,*2*S,*5*S,*5*|*S\",\"**D1,**D1,*-D1,*/D1,*/D1,**D1,**D1,**D1,*-\",\"M2D1,M2D1,M2D1,M2D1,M2D1,M2D1,M2D1,M2D1,*4*-\",\"M2D1,M2D1,M2D1,M2D1,M2D1,M2D1,M2D1,M2D1,*2*-\",\"M2D1,M2D1,M2D1,M2D1,M2D1,M2D1,M2D1,M2D1,*5*-\",\"M2D1,M2D1,M2D1,M2D1,M2D1,M2D1,M2D1,M2D1,*1*-\",\"M4D1,M2D1,M2D1,M2D1,M2D1,M2D1,M2D1,M4D1,*0*-\",\"M6D1,M4D1,M2D1,M2D1,M2D1,M2D1,M4D1,M6D1,*3*-\",\"M6D1,M6D1,M4D1,M2D1,M2D1,M4D1,M6D1,M6D1,*-\"],\"goals\":[{\"type\":\"rainbow_circle\",\"amount\":5},{\"type\":\"radial_circle\",\"amount\":50},{\"type\":\"striped_circle\",\"amount\":50}]}');\n\n//# sourceURL=webpack://circle-match/./src/test_levels/2.json?");

/***/ }),

/***/ "./src/test_levels/3.json":
/*!********************************!*\
  !*** ./src/test_levels/3.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":22,\"targets\":[200000,400000,600000],\"colours\":4,\"increaseColours\":true,\"tilemap\":[\"*-*4*S,***S,***S,***5*O*S,M2*S,***5*O*S,***S,***S,*-*4*S\",\"*4,**,**,M2,b2*/b3,M2,**,**,*4\",\"**,**,M4,b2*/B3,b3*/B3,b2*/b3,M4,**,**\",\"*4,M2,b2*/B3,b3*/B3,D1*/B3,b3*/B3,b2*/b3,M2,*4\",\"M2,b2*/B3,b3*/B3,D1*/B3,D2*/B2,D1*/B3,b3*/B3,b2*/b3,M2\",\"**,M2,b2*/B3,b3*/B3,D1*/B3,b3*/B3,b2*/b3,M2,**\",\"**,**,M2,b2*/B3,b1*/B3,b2*/b3,M2,**,**\",\"**,**,**,M1,b2*/b1,b2***O,**,**,**\",\"*-,**,**,***5*O,M1,***5*O,**,**,*-\"],\"goals\":[{\"type\":\"rainbow_circle\",\"amount\":25},{\"type\":\"radial_circle\",\"amount\":2},{\"type\":\"button\"},{\"type\":\"score\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/test_levels/3.json?");

/***/ }),

/***/ "./src/test_levels/4.json":
/*!********************************!*\
  !*** ./src/test_levels/4.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":15,\"targets\":[150000,200000,250000],\"colours\":4,\"tilemap\":[\"**B3*S,--,**B3T002,--,**B3T004,--,M1B3T006,--,M1B3T008\",\"**B3,*/b3B3,**B3,*/b3B3,*-*5B3,*/b3B3,**B3,*/b3B3,M1B3\",\"**B3,--,**B3,--,*5B3,--,**B3,--,**B3\",\"**B3,--,**B3,--,**B3,--,**B3,--,**B3\",\"**B3,*Ob3B3,**B3,*Ob3B3,*-*5B3,*Ob3B3,**B3,*Ob3B3,**B3\",\"**B3,--,**B3,--,**B3,--,**B3,--,**B3\",\"**B3,--,**B3,--,*5B3,--,**B3,--,**B3\",\"**B3,*Ob3B3,**B3,*Ob3B3,*-*5B3,*Ob3B3,**B3,*Ob3B3,**B3\",\"**B3T001,--,**B3T003,--,**B3T005,--,***|B3T007,--,***|B3\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/test_levels/4.json?");

/***/ }),

/***/ "./src/test_levels/5.json":
/*!********************************!*\
  !*** ./src/test_levels/5.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":22,\"targets\":[20000,40000,80000],\"colours\":4,\"tilemap\":[\"--,--,***S,***S,***S,***S,***S,--,--\",\"--,--,**,**B2,**B2,**B2,**,--,--\",\"M1B1*ST001,*0*-B1T003,M1,M1B2,M1B2,M1B2,M1,*0*|B1T013,M1B1*ST015\",\"--,--,M1,M1B2,M1B2,M1B2,M1,--,--\",\"M1B1T002T005,*1*|B1T004T007,M1,M1B2,M1B2,M1B2,M1,*1*-B1T014T017,M1B1T016T019\",\"--,--,M1,M1B2,M1B2,M1B2,M1,--,--\",\"M1B1T006T009,*2*-B1T008T011,M1,M1B2,M1B2,M1B2,M1,*2*|B1T018T021,M1B1T020T023\",\"--,--,M1,M1B2,M1B2,M1B2,M1,--,--\",\"M1B1T010,*3*|B1T012,M1,M1B2,M1B2,M1B2,M1,*3*-B1T022,M1B1T024\"],\"goals\":[{\"type\":\"button\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/test_levels/5.json?");

/***/ }),

/***/ "./src/test_levels/6.json":
/*!********************************!*\
  !*** ./src/test_levels/6.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":21,\"targets\":[50000,80000,120000],\"colours\":4,\"tilemap\":[\"***S,***S,***S,***S,M5*S,***S,***S,***S,***S\",\"**,**,**,**,**,**,**,**,**\",\"**,**,**,**,**,**,**,**,**\",\"**T001,M3T003,**T005,M3T007,**T009,M3T011,**T013,M3T015,**T017\",\"--,--,--,--,--,--,--,--,--\",\"**T002,**T004,**T006,**T008,**T010,**T012,**T014,**T016,**T018\",\"**,**,**,**,*2,**,**,**,**\",\"**,**,*2,*2,M4,*2,*2,**,**\",\"**,**,**,**,M6,**,**,**,**\"],\"goals\":[{\"type\":\"radial_circle\",\"amount\":2},{\"type\":\"striped_circle\",\"amount\":2},{\"type\":\"orange_circle\",\"amount\":50}]}');\n\n//# sourceURL=webpack://circle-match/./src/test_levels/6.json?");

/***/ }),

/***/ "./src/test_levels/7.json":
/*!********************************!*\
  !*** ./src/test_levels/7.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":20,\"targets\":[123456,135790,147036],\"colours\":4,\"tilemap\":[\"*4*S,*5*S,*4*S,*5*S,*4*S,***S,***S,***S,***S\",\"*5,*4,*5,*4,*5,**,**,**,**\",\"*4,*5,***O,***O,*4,**,**,**,**\",\"*5,*4,*5,*4,*5,**,**,**,**\",\"*4,*5,*4,*5,*4,**,**,**,**\",\"**,**,**,**,**,**,**,**,**\",\"*/D2,**,**,**,**,**,**,**,**\",\"*/D2,*OD2,**,**,**,**,*-,*O,**\",\"*/D2,*/D2,*/D2,**,**,**,**,*|,*-\"],\"goals\":[{\"type\":\"radial_circle\",\"amount\":15},{\"type\":\"striped_circle\",\"amount\":15},{\"type\":\"blue_circle\",\"amount\":69},{\"type\":\"score\"}]}');\n\n//# sourceURL=webpack://circle-match/./src/test_levels/7.json?");

/***/ }),

/***/ "./src/test_levels/8.json":
/*!********************************!*\
  !*** ./src/test_levels/8.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"moves\":20,\"targets\":[100000,600000,800000],\"colours\":3,\"width\":6,\"height\":6,\"increaseColours\":true,\"tilemap\":[\"**T004,**T006,***S,***S,**T008,**T002\",\"**,**,**,**,**,**\",\"**,**,**,**,**,**\",\"**,**,**,**,**,**\",\"**,**,**,**,**,**\",\"**,**T003,**T005,**T007,**T001,**\"],\"goals\":[{\"type\":\"rainbow_circle\",\"amount\":25},{\"type\":\"radial_circle\",\"amount\":50}]}');\n\n//# sourceURL=webpack://circle-match/./src/test_levels/8.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;