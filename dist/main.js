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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* defaults to dark theme */\\nbody {\\n  --text-color-primary: #4B6A9B;\\n  --text-color-darkgrey: #2B3442;\\n  --text-color-lightgrey: #697C9A;\\n  --logo-color: #222731;\\n  --button-hover: #222731;\\n  --primary-white: #FFFFFF;\\n  --shadow: 0px 16px 30px -10px #4660BB33;\\n  --content: 'dark';\\n  --imgurl: $img-moon;\\n  --background-container: #f6f8ff;\\n  --background-content: #fefefe;\\n  background-color: var(--background-container);\\n  color: var(--text-color--primary); }\\n\\nbody.dark-theme {\\n  --background-container: #141d2f;\\n  --background-content: #1e2a47;\\n  --text-color-primary: #FFFFFF;\\n  --logo-color: #FFFFFF;\\n  --button-hover: #90A4d4;\\n  --shadow: none;\\n  --content: 'light';\\n  --imgurl:$img-sun ; }\\n\\nimg {\\n  max-width: 100%;\\n  height: auto; }\\n\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-family: 'Space Mono', monospace;\\n  font-weight: 400; }\\n\\n.search__container {\\n  width: 100%;\\n  background-color: var(--background-content);\\n  border-radius: 15px;\\n  box-shadow: var(--shadow);\\n  margin: 24px 0;\\n  display: flex;\\n  flex-direction: row;\\n  padding-left: 16px;\\n  width: 100%;\\n  font-size: 13px;\\n  height: 60px;\\n  align-items: center;\\n  justify-content: space-between; }\\n\\n.profile {\\n  width: 100%;\\n  background-color: var(--background-content);\\n  border-radius: 15px;\\n  box-shadow: var(--shadow);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  padding: 24px;\\n  gap: 24px;\\n  color: var(--text-color-primary);\\n  font-size: 13px; }\\n\\n.container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center; }\\n\\n.content__container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 31px 24px 79px;\\n  max-width: 730px;\\n  flex: 1;\\n  max-width: 573px; }\\n\\n.header__container {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  height: 38px;\\n  width: 100%;\\n  margin-bottom: 8px; }\\n\\n.logo {\\n  justify-self: flex-start;\\n  font-weight: 700;\\n  height: 40px; }\\n\\n.logo__text {\\n  font-size: 26px;\\n  color: var(--logo-color);\\n  font-weight: 700; }\\n\\n.button__group {\\n  justify-self: flex-end;\\n  background-color: var(--background-container);\\n  color: var(--text-color-primary);\\n  width: 100px;\\n  justify-content: space-between; }\\n\\n.btn__switch-theme {\\n  font-size: 13px;\\n  letter-spacing: 2.5px;\\n  text-transform: uppercase;\\n  background-color: var(--background-container);\\n  color: var(--text-color-primary);\\n  width: 100%;\\n  height: 100%; }\\n  .btn__switch-theme:hover {\\n    cursor: pointer;\\n    color: var(--button-hover); }\\n    .btn__switch-theme:hover::after {\\n      background-color: var(--button-hover); }\\n  .btn__switch-theme::before {\\n    content: var(--content);\\n    vertical-align: top; }\\n  .btn__switch-theme::after {\\n    content: '';\\n    -webkit-mask: var(--imgUrl);\\n    mask: var(--imgUrl);\\n    -webkit-mask-size: cover;\\n    mask-size: cover;\\n    background-color: var(--text-color-primary);\\n    background-size: 20px 20px;\\n    display: inline-flex;\\n    width: 20px;\\n    height: 20px; }\\n\\n.screenreader-hidden {\\n  display: none; }\\n\\n.search__icon {\\n  justify-self: flex-start; }\\n\\n.search__input {\\n  float: left;\\n  outline: none;\\n  width: 72%;\\n  height: 100%;\\n  background-color: var(--background-content);\\n  padding-left: 9px;\\n  color: var(--text-color-primary); }\\n  .search__input:active {\\n    color: var(--logo-color); }\\n  .search__input:hover {\\n    cursor: pointer; }\\n  .search__input::placeholder {\\n    font-weight: 400;\\n    color: var(--text-color-primary); }\\n\\n.search__button {\\n  height: 46px;\\n  width: 84px;\\n  margin: 7.5px;\\n  font-weight: 700;\\n  justify-self: flex-end;\\n  background-color: #0079FF;\\n  color: var(--primary-white);\\n  border-radius: 10px; }\\n  .search__button:hover {\\n    cursor: pointer;\\n    background-color: #60ABFF; }\\n\\n.error__message {\\n  color: #F74646;\\n  font-size: 11px;\\n  font-weight: 700;\\n  width: 92px;\\n  display: none; }\\n\\n.visible {\\n  display: flex; }\\n\\n.profile__intro {\\n  display: flex;\\n  flex-direction: row;\\n  gap: 19.5px;\\n  align-items: center; }\\n\\n.profile__img {\\n  border-radius: 50%;\\n  width: 70px;\\n  height: 70px;\\n  max-width: 117px; }\\n\\n.profile__info {\\n  align-items: flex-start; }\\n\\n.profile__name {\\n  color: var(--logo-color);\\n  font-weight: 700;\\n  line-height: 1.5;\\n  font-size: 16px; }\\n\\n.profile__username {\\n  color: #0079FF;\\n  line-height: 1.46; }\\n\\n.profile__joining-date {\\n  line-height: 1.46; }\\n\\n.profile__bio {\\n  line-height: 1.92; }\\n\\n.profile__stats {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-evenly;\\n  align-items: center;\\n  background-color: var(--background-container);\\n  height: 85px;\\n  border-radius: 10px; }\\n\\n.text {\\n  line-height: 1.45;\\n  font-size: 11px; }\\n\\n.number {\\n  color: var(--logo-color);\\n  line-height: 1.5;\\n  font-size: 16px;\\n  font-weight: 700; }\\n\\n.profile__links {\\n  color: var(--text-color-primary);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n  gap: 16px;\\n  margin-bottom: 48px;\\n  line-height: 1.46;\\n  color: var(--text-color-primary); }\\n  .profile__links > div {\\n    text-align: left;\\n    flex-direction: row; }\\n\\n.profile__repos {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; }\\n\\n.profile__followers {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; }\\n\\n.profile__following {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; }\\n\\n.link {\\n  text-decoration: none;\\n  color: var(--text-color-primary); }\\n  .link:hover {\\n    cursor: pointer;\\n    text-decoration: underline; }\\n  .link:visited {\\n    color: var(--text-color-primary); }\\n\\n.no-info-transparency {\\n  opacity: 0.5; }\\n\\n.icon {\\n  fill: var(--text-color-primary);\\n  color: var(--text-color-primary);\\n  display: flex;\\n  float: left;\\n  width: 20px;\\n  height: 20px;\\n  margin-right: 20px; }\\n\\n@media (prefers-color-scheme: dark) {\\n  body {\\n    --text-color-primary: #FFFFFF;\\n    --background-container: #141d2f;\\n    --background-content: #1e2a47;\\n    --logo-color: #FFFFFF; }\\n  body.light-theme {\\n    --text-color-primary: #4B6A9B;\\n    --text-color-darkgrey: #2B3442;\\n    --text-color-lightgrey: #697C9A;\\n    --logo-color: #222731;\\n    --background-container: #f6f8ff;\\n    --background-content: #fefefe; } }\\n\\n@media only screen and (min-width: 768px) and (max-width: 1199px) {\\n  .content__container {\\n    max-width: 573px; } }\\n\\n@media only screen and (min-width: 768px) {\\n  .search__input {\\n    font-size: 18px;\\n    line-height: 1.4; }\\n    .search__input::placeholder {\\n      font-size: 18px;\\n      line-height: 1.4; }\\n  .search__button {\\n    font-size: 16px;\\n    line-height: 1.5; }\\n  .error__message {\\n    font-size: 15px;\\n    width: 100px; }\\n  .profile {\\n    max-height: 481px;\\n    padding: 40px;\\n    font-size: 15px; }\\n  .profile__img {\\n    height: 117px;\\n    width: 117px; }\\n  .profile__intro {\\n    gap: 41px;\\n    margin-top: 40px;\\n    padding-top: 40px; }\\n  .profile__name {\\n    font-size: 26px; }\\n  .profile__username {\\n    font-size: 16px;\\n    line-height: 1.5; }\\n  .profile__bio {\\n    line-height: 1.7; }\\n  .profile__stats {\\n    height: 85px;\\n    width: 493px; }\\n    .profile__stats > div {\\n      margin: 15px 32px; }\\n  .text {\\n    font-size: 13px; }\\n  .number {\\n    font-size: 22px; }\\n  .profile__links {\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    justify-content: space-evenly;\\n    padding-bottom: 40px; }\\n    .profile__links > div {\\n      width: 220px;\\n      gap: 0; } }\\n\\n@media only screen and (min-width: 1200px) {\\n  .content__container {\\n    max-width: 730px; }\\n  .profile {\\n    padding: 48px; }\\n  .profile__info {\\n    align-self: flex-end;\\n    width: 480px;\\n    display: flex;\\n    align-self: flex-start;\\n    flex-direction: column;\\n    height: 68px;\\n    flex-wrap: wrap;\\n    justify-content: flex-start; }\\n  .profile__stats {\\n    align-self: flex-end;\\n    width: 480px; }\\n  .profile__bio {\\n    align-self: flex-end;\\n    width: 480px;\\n    margin-top: -48px; }\\n  .profile__links {\\n    align-self: flex-end;\\n    width: 480px; } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dev-finder-webpacked/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://dev-finder-webpacked/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dev-finder-webpacked/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://dev-finder-webpacked/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dev-finder-webpacked/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://dev-finder-webpacked/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://dev-finder-webpacked/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://dev-finder-webpacked/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://dev-finder-webpacked/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://dev-finder-webpacked/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/const */ \"./src/js/const.js\");\n/* harmony import */ var _js_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/theme */ \"./src/js/theme.js\");\n/* harmony import */ var _js_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_theme__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n\n\n\n\n\nconst formEl = document.querySelector('.js-form');\nconst profileImgEl = document.querySelector('.js-profile-img');\nconst usernameEl = document.querySelector('.js-username');\nconst nameEl = document.querySelector('.js-name');\nconst joiningDateEl = document.querySelector('.js-date');\nconst bioEl = document.querySelector('.js-bio');\nconst numReposEl = document.querySelector('.js-repos');\nconst numFollowersEl = document.querySelector('.js-followers');\nconst numFollowingEl = document.querySelector('.js-following');\nconst locationEl = document.querySelector('.js-location');\nconst websiteEl = document.querySelector('.js-website');\nconst twitterEl = document.querySelector('.js-twitter');\nconst companyEl = document.querySelector('.js-company');\nconst errorEl = document.querySelector('.js-error');\nconst searchEl = document.querySelector('.js-search');\n\n//on first load display octocat profile\nwindow.addEventListener('load', displayDetails(_js_const__WEBPACK_IMPORTED_MODULE_0__.OCTOCAT_API));\n\n//display details fetched from forwarded api\nfunction displayDetails(api) {\n    errorEl.classList.remove(\"visible\");\n    fetch(api)\n        .then((result) => result.json())\n        .then((data) => {\n            if (data.message == \"Not Found\") {\n                errorEl.classList.add(\"visible\")\n            } else {\n                setProfileImage(data.avatar_url, data.login);\n                showUserData(data.login, data.name, new Date(data.created_at).toLocaleDateString('en-GB', {\n                    day: 'numeric',\n                    month: 'short',\n                    year: 'numeric'\n                }).split(' ').join(' '));\n                showBio(data.bio);\n                displayStatistics(data.public_repos, data.followers, data.following);\n                displayLinks(data.location, data.blog, data.twitter_username, data.company);\n            }\n        });\n}\n\nsearchEl.addEventListener('onchange', function () {\n    let searchValue = searchEl.value;\n    displayDetails(_js_const__WEBPACK_IMPORTED_MODULE_0__.GITHUB_API + searchValue);\n})\n\n//submit form and trigger displayDetails function to display info about searched profile\nformEl.addEventListener('submit', function (e) {\n    e.preventDefault();\n    //search input value\n    let searchValue = searchEl.value;\n    //remove spaces from input and then join string\n    let username = searchValue.split(' ').join('');\n    //display info about searched profile\n    displayDetails(_js_const__WEBPACK_IMPORTED_MODULE_0__.GITHUB_API + username)\n})\n\n//set image atributes\nfunction setProfileImage(image, alt) {\n    profileImgEl.setAttribute('src', image);\n    profileImgEl.setAttribute('alt', alt)\n}\n\n//show user intro details\nfunction showUserData(username, name, date) {\n    if (name == null) {\n        nameEl.textContent = username;\n    } else {\n        nameEl.textContent = name;\n    }\n    usernameEl.textContent = `@${username}`;\n    joiningDateEl.textContent = `Joined ${date}`;\n}\n\nfunction showBio(bio) {\n    if (bio == null) {\n        bioEl.textContent = \"This profile has no bio\"\n        bioEl.classList.add(\"no-info-transparency\")\n    } else {\n        bioEl.textContent = bio;\n        bioEl.classList.remove(\"no-info-transparency\");\n    }\n}\n\nfunction displayStatistics(repo, followers, following) {\n    numReposEl.textContent = repo;\n    numFollowersEl.textContent = followers;\n    numFollowingEl.textContent = following;\n}\n\nfunction displayLinks(location, website, twitter, company) {\n    if (!location) {\n        locationEl.textContent = \"Not available\"\n        locationEl.parentNode.classList.add(\"no-info-transparency\")\n    } else {\n        locationEl.textContent = location;\n        locationEl.parentNode.classList.remove(\"no-info-transparency\")\n    }\n\n    if (!website) {\n        websiteEl.textContent = \"Not available\"\n        websiteEl.parentNode.classList.add(\"no-info-transparency\")\n    } else {\n        websiteEl.textContent = website;\n        websiteEl.setAttribute('href', website);\n        websiteEl.parentNode.classList.remove(\"no-info-transparency\");\n    }\n\n    if (!twitter) {\n        twitterEl.textContent = \"Not available\";\n        twitterEl.parentNode.classList.add(\"no-info-transparency\");\n    } else {\n        twitterEl.setAttribute('href', \"https://twitter.com/\" + twitter);\n        twitterEl.textContent = twitter;\n        twitterEl.parentNode.classList.remove(\"no-info-transparency\");\n    }\n\n    if (!company) {\n        companyEl.innerHTML = \"Not available\";\n        companyEl.parentNode.classList.add(\"no-info-transparency\");\n    } else {\n        companyEl.textContent = company;\n        let link = company.slice(1).split(' ')[0];\n        companyEl.setAttribute('href', \"https://github.com/\" + link);\n        companyEl.parentNode.classList.remove(\"no-info-transparency\");\n    }\n}\n\n\n//# sourceURL=webpack://dev-finder-webpacked/./src/index.js?");

/***/ }),

/***/ "./src/js/const.js":
/*!*************************!*\
  !*** ./src/js/const.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OCTOCAT_API\": () => (/* binding */ OCTOCAT_API),\n/* harmony export */   \"GITHUB_API\": () => (/* binding */ GITHUB_API)\n/* harmony export */ });\nconst OCTOCAT_API = \"https://api.github.com/users/octocat\";\nconst GITHUB_API = \"https://api.github.com/users/\";\n\n//# sourceURL=webpack://dev-finder-webpacked/./src/js/const.js?");

/***/ }),

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/***/ (() => {

eval("const btn = document.querySelector(\".js-btn-toggle\");\nconst prefersDarkScheme = window.matchMedia(\"(prefers-color-scheme: dark)\");\n\n\nconst currentTheme = localStorage.getItem(\"theme\");\nif (currentTheme == \"dark\") {\n    document.body.classList.toggle(\"dark-theme\");\n    btn.classList.toggle(\"dark-theme\");\n} else if (currentTheme == \"light\") {\n    document.body.classList.toggle(\"light-theme\");\n    btn.classList.toggle(\"light-theme\");\n}\n\nbtn.addEventListener(\"click\", function () {\n    if (prefersDarkScheme.matches) {\n        document.body.classList.toggle(\"light-theme\");\n        var theme = document.body.classList.contains(\"light-theme\")\n            ? \"light\"\n            : \"dark\";\n\n    } else {\n        document.body.classList.toggle(\"dark-theme\");\n        var theme = document.body.classList.contains(\"dark-theme\")\n            ? \"dark\"\n            : \"light\";\n    }\n    localStorage.setItem(\"theme\", theme);\n});\n\n\n\n//# sourceURL=webpack://dev-finder-webpacked/./src/js/theme.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
