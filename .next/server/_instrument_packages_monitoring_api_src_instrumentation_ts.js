"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_instrument_packages_monitoring_api_src_instrumentation_ts";
exports.ids = ["_instrument_packages_monitoring_api_src_instrumentation_ts"];
exports.modules = {

/***/ "(instrument)/../../packages/monitoring/api/src/get-monitoring-provider.ts":
/*!********************************************************************!*\
  !*** ../../packages/monitoring/api/src/get-monitoring-provider.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMonitoringProvider: () => (/* binding */ getMonitoringProvider)\n/* harmony export */ });\nfunction getMonitoringProvider() {\n    return process.env.NEXT_PUBLIC_MONITORING_PROVIDER;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4uLy4uL3BhY2thZ2VzL21vbml0b3JpbmcvYXBpL3NyYy9nZXQtbW9uaXRvcmluZy1wcm92aWRlci50cyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sU0FBU0E7SUFDZCxPQUFPQyxRQUFRQyxHQUFHLENBQUNDLCtCQUErQjtBQUdwRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uLi8uLi9wYWNrYWdlcy9tb25pdG9yaW5nL2FwaS9zcmMvZ2V0LW1vbml0b3JpbmctcHJvdmlkZXIudHM/NzFiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnN0cnVtZW50YXRpb25Qcm92aWRlciB9IGZyb20gJy4vbW9uaXRvcmluZy1wcm92aWRlcnMuZW51bSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9uaXRvcmluZ1Byb3ZpZGVyKCkge1xyXG4gIHJldHVybiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05JVE9SSU5HX1BST1ZJREVSIGFzXHJcbiAgICB8IEluc3RydW1lbnRhdGlvblByb3ZpZGVyXHJcbiAgICB8IHVuZGVmaW5lZDtcclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0TW9uaXRvcmluZ1Byb3ZpZGVyIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01PTklUT1JJTkdfUFJPVklERVIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(instrument)/../../packages/monitoring/api/src/get-monitoring-provider.ts\n");

/***/ }),

/***/ "(instrument)/../../packages/monitoring/api/src/instrumentation.ts":
/*!************************************************************!*\
  !*** ../../packages/monitoring/api/src/instrumentation.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   registerMonitoringInstrumentation: () => (/* binding */ registerMonitoringInstrumentation)\n/* harmony export */ });\n/* harmony import */ var _get_monitoring_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-monitoring-provider */ \"(instrument)/../../packages/monitoring/api/src/get-monitoring-provider.ts\");\n/* harmony import */ var _monitoring_providers_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitoring-providers.enum */ \"(instrument)/../../packages/monitoring/api/src/monitoring-providers.enum.ts\");\n\n\nconst PROVIDER = (0,_get_monitoring_provider__WEBPACK_IMPORTED_MODULE_0__.getMonitoringProvider)();\n/**\r\n * @name registerMonitoringInstrumentation\r\n * @description Register monitoring instrumentation based on the MONITORING_PROVIDER environment variable.\r\n *\r\n * Please set the MONITORING_PROVIDER environment variable to register the monitoring instrumentation provider.\r\n */ async function registerMonitoringInstrumentation() {\n    if (!PROVIDER) {\n        return;\n    }\n    switch(PROVIDER){\n        case _monitoring_providers_enum__WEBPACK_IMPORTED_MODULE_1__.InstrumentationProvider.Baselime:\n            {\n                const { registerInstrumentation } = await __webpack_require__.e(/*! import() */ \"_instrument_packages_monitoring_baselime_src_instrumentation_ts\").then(__webpack_require__.bind(__webpack_require__, /*! @kit/baselime/instrumentation */ \"(instrument)/../../packages/monitoring/baselime/src/instrumentation.ts\"));\n                return registerInstrumentation();\n            }\n        case _monitoring_providers_enum__WEBPACK_IMPORTED_MODULE_1__.InstrumentationProvider.Sentry:\n            {\n                // Sentry v8 automatically sets this up\n                return;\n            }\n        default:\n            throw new Error(`Unknown instrumentation provider: ${process.env.NEXT_PUBLIC_MONITORING_PROVIDER}`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4uLy4uL3BhY2thZ2VzL21vbml0b3JpbmcvYXBpL3NyYy9pbnN0cnVtZW50YXRpb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtFO0FBQ0k7QUFFdEUsTUFBTUUsV0FBV0YsK0VBQXFCQTtBQUV0Qzs7Ozs7Q0FLQyxHQUNNLGVBQWVHO0lBQ3BCLElBQUksQ0FBQ0QsVUFBVTtRQUNiO0lBQ0Y7SUFFQSxPQUFRQTtRQUNOLEtBQUtELCtFQUF1QkEsQ0FBQ0csUUFBUTtZQUFFO2dCQUNyQyxNQUFNLEVBQUVDLHVCQUF1QixFQUFFLEdBQUcsTUFBTSwyUUFDeEM7Z0JBR0YsT0FBT0E7WUFDVDtRQUVBLEtBQUtKLCtFQUF1QkEsQ0FBQ0ssTUFBTTtZQUFFO2dCQUNuQyx1Q0FBdUM7Z0JBRXZDO1lBQ0Y7UUFFQTtZQUNFLE1BQU0sSUFBSUMsTUFDUixDQUFDLGtDQUFrQyxFQUFFQyxRQUFRQyxHQUFHLENBQUNDLCtCQUErQixDQUFDLENBQUM7SUFFeEY7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uLi8uLi9wYWNrYWdlcy9tb25pdG9yaW5nL2FwaS9zcmMvaW5zdHJ1bWVudGF0aW9uLnRzPzFkNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TW9uaXRvcmluZ1Byb3ZpZGVyIH0gZnJvbSAnLi9nZXQtbW9uaXRvcmluZy1wcm92aWRlcic7XHJcbmltcG9ydCB7IEluc3RydW1lbnRhdGlvblByb3ZpZGVyIH0gZnJvbSAnLi9tb25pdG9yaW5nLXByb3ZpZGVycy5lbnVtJztcclxuXHJcbmNvbnN0IFBST1ZJREVSID0gZ2V0TW9uaXRvcmluZ1Byb3ZpZGVyKCk7XHJcblxyXG4vKipcclxuICogQG5hbWUgcmVnaXN0ZXJNb25pdG9yaW5nSW5zdHJ1bWVudGF0aW9uXHJcbiAqIEBkZXNjcmlwdGlvbiBSZWdpc3RlciBtb25pdG9yaW5nIGluc3RydW1lbnRhdGlvbiBiYXNlZCBvbiB0aGUgTU9OSVRPUklOR19QUk9WSURFUiBlbnZpcm9ubWVudCB2YXJpYWJsZS5cclxuICpcclxuICogUGxlYXNlIHNldCB0aGUgTU9OSVRPUklOR19QUk9WSURFUiBlbnZpcm9ubWVudCB2YXJpYWJsZSB0byByZWdpc3RlciB0aGUgbW9uaXRvcmluZyBpbnN0cnVtZW50YXRpb24gcHJvdmlkZXIuXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJNb25pdG9yaW5nSW5zdHJ1bWVudGF0aW9uKCkge1xyXG4gIGlmICghUFJPVklERVIpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHN3aXRjaCAoUFJPVklERVIpIHtcclxuICAgIGNhc2UgSW5zdHJ1bWVudGF0aW9uUHJvdmlkZXIuQmFzZWxpbWU6IHtcclxuICAgICAgY29uc3QgeyByZWdpc3Rlckluc3RydW1lbnRhdGlvbiB9ID0gYXdhaXQgaW1wb3J0KFxyXG4gICAgICAgICdAa2l0L2Jhc2VsaW1lL2luc3RydW1lbnRhdGlvbidcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybiByZWdpc3Rlckluc3RydW1lbnRhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgSW5zdHJ1bWVudGF0aW9uUHJvdmlkZXIuU2VudHJ5OiB7XHJcbiAgICAgIC8vIFNlbnRyeSB2OCBhdXRvbWF0aWNhbGx5IHNldHMgdGhpcyB1cFxyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgVW5rbm93biBpbnN0cnVtZW50YXRpb24gcHJvdmlkZXI6ICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OSVRPUklOR19QUk9WSURFUn1gLFxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0TW9uaXRvcmluZ1Byb3ZpZGVyIiwiSW5zdHJ1bWVudGF0aW9uUHJvdmlkZXIiLCJQUk9WSURFUiIsInJlZ2lzdGVyTW9uaXRvcmluZ0luc3RydW1lbnRhdGlvbiIsIkJhc2VsaW1lIiwicmVnaXN0ZXJJbnN0cnVtZW50YXRpb24iLCJTZW50cnkiLCJFcnJvciIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NT05JVE9SSU5HX1BST1ZJREVSIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(instrument)/../../packages/monitoring/api/src/instrumentation.ts\n");

/***/ }),

/***/ "(instrument)/../../packages/monitoring/api/src/monitoring-providers.enum.ts":
/*!**********************************************************************!*\
  !*** ../../packages/monitoring/api/src/monitoring-providers.enum.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InstrumentationProvider: () => (/* binding */ InstrumentationProvider)\n/* harmony export */ });\nvar InstrumentationProvider;\n(function(InstrumentationProvider) {\n    InstrumentationProvider[\"Baselime\"] = \"baselime\";\n    InstrumentationProvider[\"Sentry\"] = \"sentry\";\n})(InstrumentationProvider || (InstrumentationProvider = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4uLy4uL3BhY2thZ2VzL21vbml0b3JpbmcvYXBpL3NyYy9tb25pdG9yaW5nLXByb3ZpZGVycy5lbnVtLnRzIiwibWFwcGluZ3MiOiI7Ozs7O1VBQVlBOzs7R0FBQUEsNEJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4uLy4uL3BhY2thZ2VzL21vbml0b3JpbmcvYXBpL3NyYy9tb25pdG9yaW5nLXByb3ZpZGVycy5lbnVtLnRzPzgzZmQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gSW5zdHJ1bWVudGF0aW9uUHJvdmlkZXIge1xyXG4gIEJhc2VsaW1lID0gJ2Jhc2VsaW1lJyxcclxuICBTZW50cnkgPSAnc2VudHJ5JyxcclxufVxyXG4iXSwibmFtZXMiOlsiSW5zdHJ1bWVudGF0aW9uUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(instrument)/../../packages/monitoring/api/src/monitoring-providers.enum.ts\n");

/***/ })

};
;