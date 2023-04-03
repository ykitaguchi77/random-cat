/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"page\": \"index_page__Goa_Q\",\n\t\"button\": \"index_button__g8ljY\",\n\t\"frame\": \"index_frame__lHMaR\",\n\t\"scroll\": \"index_scroll__N8LQ_\",\n\t\"img\": \"index_img__4PRwt\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzP2Q5ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFnZVwiOiBcImluZGV4X3BhZ2VfX0dvYV9RXCIsXG5cdFwiYnV0dG9uXCI6IFwiaW5kZXhfYnV0dG9uX19nOGxqWVwiLFxuXHRcImZyYW1lXCI6IFwiaW5kZXhfZnJhbWVfX2xITWFSXCIsXG5cdFwic2Nyb2xsXCI6IFwiaW5kZXhfc2Nyb2xsX19OOExRX1wiLFxuXHRcImltZ1wiOiBcImluZGV4X2ltZ19fNFBSd3RcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.module.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);\n//https://typescriptbook.jp/tutorials/nextjs\n\n\n\nconst CatRoom = ()=>{\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const fetchCatImage = async ()=>{\n        const response = await fetch(\"https://api.thecatapi.com/v1/images/search\");\n        const data = await response.json();\n        return {\n            url: data[0].url\n        };\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchCatImage().then((newImage)=>{\n            setImageUrl(newImage.url);\n            setLoading(false);\n        });\n    }, []);\n    const handleNewCatClick = ()=>{\n        setLoading(true);\n        fetchCatImage().then((newImage)=>{\n            setImageUrl(newImage.url);\n            setLoading(false);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"猫の小部屋\"\n            }, void 0, false, {\n                fileName: \"/Users/kitaguchi/VScode/random-cat/pages/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNewCatClick,\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                children: \"他のにゃんこも見る\"\n            }, void 0, false, {\n                fileName: \"/Users/kitaguchi/VScode/random-cat/pages/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/kitaguchi/VScode/random-cat/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/kitaguchi/VScode/random-cat/pages/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imageUrl,\n                alt: \"Cat\",\n                style: {\n                    width: \"100vw\",\n                    height: \"auto\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/kitaguchi/VScode/random-cat/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kitaguchi/VScode/random-cat/pages/index.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatRoom);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDRDQUE0Qzs7QUFLQTtBQUNKO0FBTXhDLE1BQU1HLFVBQW9CLElBQU07SUFDOUIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTNDLE1BQU1PLGdCQUFnQixVQUErQjtRQUNuRCxNQUFNQyxXQUFXLE1BQU1DLE1BQU07UUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1FBQ2hDLE9BQU87WUFBRUMsS0FBS0YsSUFBSSxDQUFDLEVBQUUsQ0FBQ0UsR0FBRztRQUFDO0lBQzVCO0lBRUFiLGdEQUFTQSxDQUFDLElBQU07UUFDZFEsZ0JBQWdCTSxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNqQ1YsWUFBWVUsU0FBU0YsR0FBRztZQUN4Qk4sV0FBVyxLQUFLO1FBQ2xCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTVMsb0JBQW9CLElBQU07UUFDOUJULFdBQVcsSUFBSTtRQUNmQyxnQkFBZ0JNLElBQUksQ0FBQyxDQUFDQyxXQUFhO1lBQ2pDVixZQUFZVSxTQUFTRixHQUFHO1lBQ3hCTixXQUFXLEtBQUs7UUFDbEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDVTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFPQyxTQUFTSjtnQkFBbUJLLFdBQVduQixpRUFBYTswQkFBRTs7Ozs7OzBCQUM5RCw4REFBQ29COzs7OztZQUNBaEIsd0JBQ0MsOERBQUNpQjswQkFBRTs7Ozs7MENBRUgsOERBQUNDO2dCQUFJQyxLQUFLckI7Z0JBQVVzQixLQUFJO2dCQUFNQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxRQUFRO2dCQUFPOzs7Ozt5QkFDdkU7Ozs7Ozs7QUFHUDtBQUVBLGlFQUFlMUIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaHR0cHM6Ly90eXBlc2NyaXB0Ym9vay5qcC90dXRvcmlhbHMvbmV4dGpzXG5cblxuXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcblxudHlwZSBDYXRJbWFnZSA9IHtcbiAgdXJsOiBzdHJpbmc7XG59O1xuXG5jb25zdCBDYXRSb29tOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZmV0Y2hDYXRJbWFnZSA9IGFzeW5jICgpOiBQcm9taXNlPENhdEltYWdlPiA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnRoZWNhdGFwaS5jb20vdjEvaW1hZ2VzL3NlYXJjaFwiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB7IHVybDogZGF0YVswXS51cmwgfTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoQ2F0SW1hZ2UoKS50aGVuKChuZXdJbWFnZSkgPT4ge1xuICAgICAgc2V0SW1hZ2VVcmwobmV3SW1hZ2UudXJsKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTmV3Q2F0Q2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBmZXRjaENhdEltYWdlKCkudGhlbigobmV3SW1hZ2UpID0+IHtcbiAgICAgIHNldEltYWdlVXJsKG5ld0ltYWdlLnVybCk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+54yr44Gu5bCP6YOo5bGLPC9oMT5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTmV3Q2F0Q2xpY2t9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+5LuW44Gu44Gr44KD44KT44GT44KC6KaL44KLPC9idXR0b24+XG4gICAgICA8YnIgLz5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICAgKSA6IChcbiAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJDYXRcIiBzdHlsZT17eyB3aWR0aDogXCIxMDB2d1wiLCBoZWlnaHQ6IFwiYXV0b1wiIH19IC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0Um9vbTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkNhdFJvb20iLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaENhdEltYWdlIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwidXJsIiwidGhlbiIsIm5ld0ltYWdlIiwiaGFuZGxlTmV3Q2F0Q2xpY2siLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJiciIsInAiLCJpbWciLCJzcmMiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();