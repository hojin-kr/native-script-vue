webpackHotUpdate("bundle",{

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Main.vue");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        
 // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  template: "\n        <Frame>\n            <Main />\n        </Frame>",
  components: {
    Main: _components_Main__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}).$start();
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanMiXSwibmFtZXMiOlsiTWFpbiIsIlZ1ZSIsInRlbXBsYXRlIiwiY29tcG9uZW50cyIsIiRzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLE9BQU9BLElBQVAsb0JBQWlCLDJFQUVqQjtBQUNBOztBQUVBLElBQUlDLEdBQUosQ0FBUTtBQUNKQyxVQUFRLGtHQURKO0FBTUpDLFlBQVUsRUFBRTtBQUNSSDtBQURRO0FBTlIsQ0FBUixFQVNHSSxNQVRIIiwiZmlsZSI6ImJ1bmRsZS4xY2NlNjM3NWMwYzdlYTM3YzZmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcbmltcG9ydCBNYWluIGZyb20gJy4vY29tcG9uZW50cy9NYWluJztcblxuLy8gVW5jb21tbWVudCB0aGUgZm9sbG93aW5nIHRvIHNlZSBOYXRpdmVTY3JpcHQtVnVlIG91dHB1dCBsb2dzXG4vLyBWdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlO1xuXG5uZXcgVnVlKHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8RnJhbWU+XG4gICAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICA8L0ZyYW1lPmAsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE1haW5cbiAgICB9XG59KS4kc3RhcnQoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=