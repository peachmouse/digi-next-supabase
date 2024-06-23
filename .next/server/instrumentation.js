"use strict";
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
exports.id = "instrumentation";
exports.ids = ["instrumentation"];
exports.modules = {

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("module");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(instrument)/./instrumentation.ts":
/*!****************************!*\
  !*** ./instrumentation.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\n/**\r\n * This file is used to register monitoring instrumentation\r\n * for your Next.js application.\r\n */ async function register() {\n    const { registerMonitoringInstrumentation } = await __webpack_require__.e(/*! import() */ \"_instrument_packages_monitoring_api_src_instrumentation_ts\").then(__webpack_require__.bind(__webpack_require__, /*! @kit/monitoring/instrumentation */ \"(instrument)/../../packages/monitoring/api/src/instrumentation.ts\"));\n    // Register monitoring instrumentation\n    // based on the MONITORING_PROVIDER environment variable.\n    await registerMonitoringInstrumentation();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vaW5zdHJ1bWVudGF0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7O0NBR0MsR0FDTSxlQUFlQTtJQUNwQixNQUFNLEVBQUVDLGlDQUFpQyxFQUFFLEdBQUcsTUFBTSxtUUFDbEQ7SUFHRixzQ0FBc0M7SUFDdEMseURBQXlEO0lBQ3pELE1BQU1BO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9pbnN0cnVtZW50YXRpb24udHM/ZDdkNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGhpcyBmaWxlIGlzIHVzZWQgdG8gcmVnaXN0ZXIgbW9uaXRvcmluZyBpbnN0cnVtZW50YXRpb25cclxuICogZm9yIHlvdXIgTmV4dC5qcyBhcHBsaWNhdGlvbi5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlcigpIHtcclxuICBjb25zdCB7IHJlZ2lzdGVyTW9uaXRvcmluZ0luc3RydW1lbnRhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgJ0BraXQvbW9uaXRvcmluZy9pbnN0cnVtZW50YXRpb24nXHJcbiAgKTtcclxuXHJcbiAgLy8gUmVnaXN0ZXIgbW9uaXRvcmluZyBpbnN0cnVtZW50YXRpb25cclxuICAvLyBiYXNlZCBvbiB0aGUgTU9OSVRPUklOR19QUk9WSURFUiBlbnZpcm9ubWVudCB2YXJpYWJsZS5cclxuICBhd2FpdCByZWdpc3Rlck1vbml0b3JpbmdJbnN0cnVtZW50YXRpb24oKTtcclxufVxyXG4iXSwibmFtZXMiOlsicmVnaXN0ZXIiLCJyZWdpc3Rlck1vbml0b3JpbmdJbnN0cnVtZW50YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(instrument)/./instrumentation.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(instrument)/./instrumentation.ts"));
module.exports = __webpack_exports__;

})();