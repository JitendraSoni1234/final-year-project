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
exports.id = "pages/api/chatbotResponse";
exports.ids = ["pages/api/chatbotResponse"];
exports.modules = {

/***/ "node-nlp":
/*!***************************!*\
  !*** external "node-nlp" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node-nlp");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/chatbotResponse.js":
/*!**************************************!*\
  !*** ./pages/api/chatbotResponse.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { NlpManager  } = __webpack_require__(/*! node-nlp */ \"node-nlp\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nasync function neuralNetwork(question) {\n    try {\n        const manager = new NlpManager({\n            languages: [\n                \"en\"\n            ]\n        });\n        const dataset = fs.readFileSync(\"neuralNetwork/qna.tsv\", \"utf8\");\n        // Parse TSV file into an array of lines\n        const lines = dataset.trim().split(\"\\n\");\n        // Process each line and add it as a document\n        lines.forEach((line)=>{\n            const [utterance, intent] = line.split(\"\t\");\n            manager.addDocument(\"en\", utterance, intent);\n        });\n        // Train the manager with the added documents\n        await manager.train();\n        // Process the user's question\n        const response = await manager.process(\"en\", question);\n        return response;\n    } catch (error) {\n        throw error;\n    }\n}\nasync function handler(req, res) {\n    try {\n        const response = await neuralNetwork(req.body.data);\n        res.status(200).send(response);\n    } catch (error) {\n        res.status(500).send(\"An error occurred.\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhdGJvdFJlc3BvbnNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLEVBQUVBLFVBQVUsR0FBRSxHQUFHQyxtQkFBTyxDQUFDLDBCQUFVLENBQUM7QUFDMUMsTUFBTUMsRUFBRSxHQUFHRCxtQkFBTyxDQUFDLGNBQUksQ0FBQztBQUV4QixlQUFlRSxhQUFhLENBQUNDLFFBQVEsRUFBRTtJQUNyQyxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxHQUFHLElBQUlMLFVBQVUsQ0FBQztZQUFFTSxTQUFTLEVBQUU7Z0JBQUMsSUFBSTthQUFDO1NBQUUsQ0FBQztRQUNyRCxNQUFNQyxPQUFPLEdBQUdMLEVBQUUsQ0FBQ00sWUFBWSxDQUFDLHVCQUF1QixFQUFFLE1BQU0sQ0FBQztRQUVoRSx3Q0FBd0M7UUFDeEMsTUFBTUMsS0FBSyxHQUFHRixPQUFPLENBQUNHLElBQUksRUFBRSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBRXhDLDZDQUE2QztRQUM3Q0YsS0FBSyxDQUFDRyxPQUFPLENBQUMsQ0FBQ0MsSUFBSSxHQUFLO1lBQ3RCLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFQyxNQUFNLENBQUMsR0FBR0YsSUFBSSxDQUFDRixLQUFLLENBQUMsR0FBSSxDQUFDO1lBQzVDTixPQUFPLENBQUNXLFdBQVcsQ0FBQyxJQUFJLEVBQUVGLFNBQVMsRUFBRUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFFSCw2Q0FBNkM7UUFDN0MsTUFBTVYsT0FBTyxDQUFDWSxLQUFLLEVBQUUsQ0FBQztRQUV0Qiw4QkFBOEI7UUFDOUIsTUFBTUMsUUFBUSxHQUFHLE1BQU1iLE9BQU8sQ0FBQ2MsT0FBTyxDQUFDLElBQUksRUFBRWYsUUFBUSxDQUFDO1FBQ3RELE9BQU9jLFFBQVEsQ0FBQztJQUNsQixFQUFFLE9BQU9FLEtBQUssRUFBRTtRQUNkLE1BQU1BLEtBQUssQ0FBQztJQUNkLENBQUM7QUFDSCxDQUFDO0FBRWMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJO1FBQ0YsTUFBTUwsUUFBUSxHQUFHLE1BQU1mLGFBQWEsQ0FBQ21CLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQyxJQUFJLENBQUM7UUFDbkRGLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNULFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLEVBQUUsT0FBT0UsS0FBSyxFQUFFO1FBQ2RHLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUM3QyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRib3QvLi9wYWdlcy9hcGkvY2hhdGJvdFJlc3BvbnNlLmpzPzhlYzQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBObHBNYW5hZ2VyIH0gPSByZXF1aXJlKCdub2RlLW5scCcpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5hc3luYyBmdW5jdGlvbiBuZXVyYWxOZXR3b3JrKHF1ZXN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbWFuYWdlciA9IG5ldyBObHBNYW5hZ2VyKHsgbGFuZ3VhZ2VzOiBbJ2VuJ10gfSk7XG4gICAgY29uc3QgZGF0YXNldCA9IGZzLnJlYWRGaWxlU3luYygnbmV1cmFsTmV0d29yay9xbmEudHN2JywgJ3V0ZjgnKTtcbiAgICBcbiAgICAvLyBQYXJzZSBUU1YgZmlsZSBpbnRvIGFuIGFycmF5IG9mIGxpbmVzXG4gICAgY29uc3QgbGluZXMgPSBkYXRhc2V0LnRyaW0oKS5zcGxpdCgnXFxuJyk7XG4gICAgXG4gICAgLy8gUHJvY2VzcyBlYWNoIGxpbmUgYW5kIGFkZCBpdCBhcyBhIGRvY3VtZW50XG4gICAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgY29uc3QgW3V0dGVyYW5jZSwgaW50ZW50XSA9IGxpbmUuc3BsaXQoJ1xcdCcpO1xuICAgICAgbWFuYWdlci5hZGREb2N1bWVudCgnZW4nLCB1dHRlcmFuY2UsIGludGVudCk7XG4gICAgfSk7XG4gICAgXG4gICAgLy8gVHJhaW4gdGhlIG1hbmFnZXIgd2l0aCB0aGUgYWRkZWQgZG9jdW1lbnRzXG4gICAgYXdhaXQgbWFuYWdlci50cmFpbigpO1xuICAgIFxuICAgIC8vIFByb2Nlc3MgdGhlIHVzZXIncyBxdWVzdGlvblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbWFuYWdlci5wcm9jZXNzKCdlbicsIHF1ZXN0aW9uKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV1cmFsTmV0d29yayhyZXEuYm9keS5kYXRhKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChyZXNwb25zZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0FuIGVycm9yIG9jY3VycmVkLicpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmxwTWFuYWdlciIsInJlcXVpcmUiLCJmcyIsIm5ldXJhbE5ldHdvcmsiLCJxdWVzdGlvbiIsIm1hbmFnZXIiLCJsYW5ndWFnZXMiLCJkYXRhc2V0IiwicmVhZEZpbGVTeW5jIiwibGluZXMiLCJ0cmltIiwic3BsaXQiLCJmb3JFYWNoIiwibGluZSIsInV0dGVyYW5jZSIsImludGVudCIsImFkZERvY3VtZW50IiwidHJhaW4iLCJyZXNwb25zZSIsInByb2Nlc3MiLCJlcnJvciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJib2R5IiwiZGF0YSIsInN0YXR1cyIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/chatbotResponse.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/chatbotResponse.js"));
module.exports = __webpack_exports__;

})();