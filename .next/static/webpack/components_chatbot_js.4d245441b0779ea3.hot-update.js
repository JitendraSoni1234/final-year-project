"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_chatbot_js",{

/***/ "./components/chatbot.js":
/*!*******************************!*\
  !*** ./components/chatbot.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_simple_chatbot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-simple-chatbot */ \"./node_modules/react-simple-chatbot/dist/react-simple-chatbot.js\");\n/* harmony import */ var react_simple_chatbot__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_simple_chatbot__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _neuralNetwork__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../neuralNetwork */ \"./neuralNetwork/index.js\");\n/* harmony import */ var _neuralNetwork__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_neuralNetwork__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./components/styles.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nfunction ChatbotWrapper() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"bot\"), botAnswer = ref[0], setBotAnswer = ref[1];\n    var theme = {\n        background: \"#f5f8fb\",\n        fontFamily: \"Helvetica Neue\",\n        headerBgColor: \"#DA4F78\",\n        headerFontColor: \"#fff\",\n        headerFontSize: \"15px\",\n        botBubbleColor: \"#DA4F78\",\n        botFontColor: \"#fff\",\n        userBubbleColor: \"#fff\",\n        userFontColor: \"#4a4a4a\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n            theme: theme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_simple_chatbot__WEBPACK_IMPORTED_MODULE_2___default()), {\n                steps: [\n                    {\n                        id: \"1\",\n                        message: \"hii!!\",\n                        trigger: \"user\"\n                    },\n                    {\n                        id: \"user\",\n                        user: true,\n                        trigger: \"loading\"\n                    },\n                    {\n                        id: \"loading\",\n                        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FetchResponse, {\n                            setBotAnswer: setBotAnswer\n                        }, void 0, false, void 0, void 0),\n                        asMessage: true,\n                        trigger: \"user\"\n                    }, \n                ]\n            }, void 0, false, {\n                fileName: \"/Users/jitendrasoni/Desktop/final year project/components/chatbot.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jitendrasoni/Desktop/final year project/components/chatbot.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jitendrasoni/Desktop/final year project/components/chatbot.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatbotWrapper, \"wIZED5MXTVKxf+zxQFXa1vPDM5E=\");\n_c = ChatbotWrapper;\nfunction FetchResponse(props) {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"bot\"), botAnswer = ref[0], setBotAnswer = ref[1];\n    var getChatbotAnswer = function(data) {\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/api/chatbotResponse\", data).then(function(res) {\n            var ref;\n            setBotAnswer(res === null || res === void 0 ? void 0 : (ref = res.data) === null || ref === void 0 ? void 0 : ref.answer);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getChatbotAnswer({\n            data: props.previousStep.message.toLowerCase()\n        });\n        props.triggerNextStep();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: botAnswer || \"Didn't get that, Come again!!\"\n    }, void 0, false, {\n        fileName: \"/Users/jitendrasoni/Desktop/final year project/components/chatbot.js\",\n        lineNumber: 63,\n        columnNumber: 10\n    }, this);\n}\n_s1(FetchResponse, \"tv5ftiGKp9KrlTbbkCWJ0Npr3Io=\");\n_c1 = FetchResponse;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatbotWrapper);\nvar _c, _c1;\n$RefreshReg$(_c, \"ChatbotWrapper\");\n$RefreshReg$(_c1, \"FetchResponse\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXRib3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ3lCO0FBQ1I7QUFDTztBQUNMO0FBQ2Q7QUFFL0IsU0FBU1EsY0FBYyxHQUFHOztJQUN4QixJQUFrQ0wsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ00sU0FBUyxHQUFrQk4sR0FBZSxHQUFqQyxFQUFFTyxZQUFZLEdBQUlQLEdBQWUsR0FBbkI7SUFDOUIsSUFBTVEsS0FBSyxHQUFHO1FBQ1pDLFVBQVUsRUFBRSxTQUFTO1FBQ3JCQyxVQUFVLEVBQUUsZ0JBQWdCO1FBQzVCQyxhQUFhLEVBQUUsU0FBUztRQUN4QkMsZUFBZSxFQUFFLE1BQU07UUFDdkJDLGNBQWMsRUFBRSxNQUFNO1FBQ3RCQyxjQUFjLEVBQUUsU0FBUztRQUN6QkMsWUFBWSxFQUFFLE1BQU07UUFDcEJDLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCQyxhQUFhLEVBQUUsU0FBUztLQUN6QjtJQUVELHFCQUNFLDhEQUFDYiwrQ0FBTztrQkFDTiw0RUFBQ0YsNERBQWE7WUFBQ00sS0FBSyxFQUFFQSxLQUFLO3NCQUN6Qiw0RUFBQ1AsNkRBQU87Z0JBQ05pQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0VDLEVBQUUsRUFBRSxHQUFHO3dCQUNQQyxPQUFPLEVBQUUsT0FBTzt3QkFDaEJDLE9BQU8sRUFBRSxNQUFNO3FCQUNoQjtvQkFDRDt3QkFDRUYsRUFBRSxFQUFFLE1BQU07d0JBQ1ZHLElBQUksRUFBRSxJQUFJO3dCQUNWRCxPQUFPLEVBQUUsU0FBUztxQkFDbkI7b0JBQ0Q7d0JBQ0VGLEVBQUUsRUFBRSxTQUFTO3dCQUNiSSxTQUFTLGdCQUFFLDhEQUFDQyxhQUFhOzRCQUFDakIsWUFBWSxFQUFFQSxZQUFZO3lEQUFJO3dCQUN4RGtCLFNBQVMsRUFBRSxJQUFJO3dCQUNmSixPQUFPLEVBQUUsTUFBTTtxQkFDaEI7aUJBQ0Y7Ozs7O29CQUNEOzs7OztnQkFDWTs7Ozs7WUFDUixDQUNWO0FBQ0osQ0FBQztHQXhDUWhCLGNBQWM7QUFBZEEsS0FBQUEsY0FBYztBQTBDdkIsU0FBU21CLGFBQWEsQ0FBQ0UsS0FBSyxFQUFFOztJQUM1QixJQUFrQzFCLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBMUNNLFNBQVMsR0FBa0JOLEdBQWUsR0FBakMsRUFBRU8sWUFBWSxHQUFJUCxHQUFlLEdBQW5CO0lBRTlCLElBQU0yQixnQkFBZ0IsR0FBR0MsU0FBQUEsSUFBSSxFQUFJO1FBQy9CL0Isa0RBQVUsQ0FBQyxzQkFBc0IsRUFBRStCLElBQUksQ0FBQyxDQUFDRSxJQUFJLENBQUNDLFNBQUFBLEdBQUcsRUFBSTtnQkFDdENBLEdBQVM7WUFBdEJ4QixZQUFZLENBQUN3QixHQUFHLGFBQUhBLEdBQUcsV0FBTSxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLENBQUFBLEdBQVMsR0FBVEEsR0FBRyxDQUFFSCxJQUFJLGNBQVRHLEdBQVMsY0FBVEEsS0FBQUEsQ0FBUyxHQUFUQSxHQUFTLENBQUVDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNEakMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2Q0QixnQkFBZ0IsQ0FBQztZQUFFQyxJQUFJLEVBQUVGLEtBQUssQ0FBQ08sWUFBWSxDQUFDYixPQUFPLENBQUNjLFdBQVcsRUFBRTtTQUFFLENBQUMsQ0FBQztRQUNyRVIsS0FBSyxDQUFDUyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFBTyw4REFBQ0MsS0FBRztrQkFBRTlCLFNBQVMsSUFBSSwrQkFBK0I7Ozs7O1lBQU8sQ0FBQztBQUNuRSxDQUFDO0lBZFFrQixhQUFhO0FBQWJBLE1BQUFBLGFBQWE7QUFnQnRCLCtEQUFlbkIsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2hhdGJvdC5qcz82Y2YxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhdEJvdCBmcm9tIFwicmVhY3Qtc2ltcGxlLWNoYXRib3RcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBuZXVyYWxOZXR3b3JrIGZyb20gXCIuLi9uZXVyYWxOZXR3b3JrXCI7XG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi9zdHlsZXNcIjtcblxuZnVuY3Rpb24gQ2hhdGJvdFdyYXBwZXIoKSB7XG4gIGNvbnN0IFtib3RBbnN3ZXIsIHNldEJvdEFuc3dlcl0gPSB1c2VTdGF0ZShcImJvdFwiKTtcbiAgY29uc3QgdGhlbWUgPSB7XG4gICAgYmFja2dyb3VuZDogXCIjZjVmOGZiXCIsXG4gICAgZm9udEZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIGhlYWRlckJnQ29sb3I6IFwiI0RBNEY3OFwiLFxuICAgIGhlYWRlckZvbnRDb2xvcjogXCIjZmZmXCIsXG4gICAgaGVhZGVyRm9udFNpemU6IFwiMTVweFwiLFxuICAgIGJvdEJ1YmJsZUNvbG9yOiBcIiNEQTRGNzhcIixcbiAgICBib3RGb250Q29sb3I6IFwiI2ZmZlwiLFxuICAgIHVzZXJCdWJibGVDb2xvcjogXCIjZmZmXCIsXG4gICAgdXNlckZvbnRDb2xvcjogXCIjNGE0YTRhXCIsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxDaGF0Qm90XG4gICAgICAgICAgc3RlcHM9e1tcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBcImhpaSEhXCIsXG4gICAgICAgICAgICAgIHRyaWdnZXI6IFwidXNlclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IFwidXNlclwiLFxuICAgICAgICAgICAgICB1c2VyOiB0cnVlLFxuICAgICAgICAgICAgICB0cmlnZ2VyOiBcImxvYWRpbmdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiBcImxvYWRpbmdcIixcbiAgICAgICAgICAgICAgY29tcG9uZW50OiA8RmV0Y2hSZXNwb25zZSBzZXRCb3RBbnN3ZXI9e3NldEJvdEFuc3dlcn0gLz4sXG4gICAgICAgICAgICAgIGFzTWVzc2FnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgdHJpZ2dlcjogXCJ1c2VyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF19XG4gICAgICAgIC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiBGZXRjaFJlc3BvbnNlKHByb3BzKSB7XG4gIGNvbnN0IFtib3RBbnN3ZXIsIHNldEJvdEFuc3dlcl0gPSB1c2VTdGF0ZShcImJvdFwiKTtcblxuICBjb25zdCBnZXRDaGF0Ym90QW5zd2VyID0gZGF0YSA9PiB7XG4gICAgYXhpb3MucG9zdChcIi9hcGkvY2hhdGJvdFJlc3BvbnNlXCIsIGRhdGEpLnRoZW4ocmVzID0+IHtcbiAgICAgIHNldEJvdEFuc3dlcihyZXM/LmRhdGE/LmFuc3dlcik7XG4gICAgfSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Q2hhdGJvdEFuc3dlcih7IGRhdGE6IHByb3BzLnByZXZpb3VzU3RlcC5tZXNzYWdlLnRvTG93ZXJDYXNlKCkgfSk7XG4gICAgcHJvcHMudHJpZ2dlck5leHRTdGVwKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPGRpdj57Ym90QW5zd2VyIHx8IFwiRGlkbid0IGdldCB0aGF0LCBDb21lIGFnYWluISFcIn08L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRib3RXcmFwcGVyO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNoYXRCb3QiLCJUaGVtZVByb3ZpZGVyIiwibmV1cmFsTmV0d29yayIsIldyYXBwZXIiLCJDaGF0Ym90V3JhcHBlciIsImJvdEFuc3dlciIsInNldEJvdEFuc3dlciIsInRoZW1lIiwiYmFja2dyb3VuZCIsImZvbnRGYW1pbHkiLCJoZWFkZXJCZ0NvbG9yIiwiaGVhZGVyRm9udENvbG9yIiwiaGVhZGVyRm9udFNpemUiLCJib3RCdWJibGVDb2xvciIsImJvdEZvbnRDb2xvciIsInVzZXJCdWJibGVDb2xvciIsInVzZXJGb250Q29sb3IiLCJzdGVwcyIsImlkIiwibWVzc2FnZSIsInRyaWdnZXIiLCJ1c2VyIiwiY29tcG9uZW50IiwiRmV0Y2hSZXNwb25zZSIsImFzTWVzc2FnZSIsInByb3BzIiwiZ2V0Q2hhdGJvdEFuc3dlciIsImRhdGEiLCJwb3N0IiwidGhlbiIsInJlcyIsImFuc3dlciIsInByZXZpb3VzU3RlcCIsInRvTG93ZXJDYXNlIiwidHJpZ2dlck5leHRTdGVwIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/chatbot.js\n"));

/***/ })

});